import { NavLink, useParams, useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft, FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { useEffect, useState } from "react";
import { iBlog } from "../../types/interface";
import axios from "axios";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { FaRegCalendarCheck, FaShareAlt } from "react-icons/fa";
import { IoTimeOutline, IoShareSocialOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { url } from "../../utils/Api";
import Swal from 'sweetalert2';

interface Comment {
    _id: string;
    username: string;
    content: string;
    createdAt: string;
    userIdentifier: string;
}

interface LikeStatus {
    liked: boolean;
    likeCount: number;
}

const OneBlog = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<iBlog | null>(null);
    const [loading, setLoading] = useState(false);
    const [suggestedBlogs, setSuggestedBlogs] = useState<iBlog[]>([]);
    const [readingTime, setReadingTime] = useState<number>(0);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [likeStatus, setLikeStatus] = useState<LikeStatus>({ liked: false, likeCount: 0 });
    const [commentLoading, setCommentLoading] = useState(false);
    const [likeLoading, setLikeLoading] = useState(false);

    // Get user identifier (IP or stored identifier)
    const getUserIdentifier = async (): Promise<string> => {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            return response.data.ip;
        } catch (error) {
            return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        }
    };

    const fetchBlogData = async () => {
    setLoading(true);
    try {
        const blogResponse = await axios.get(`${url}/blog/getoneblog/${id}`);
        setBlog(blogResponse.data);

        // Calculate reading time
        const wordCount = blogResponse.data.details.split(/\s+/).length;
        setReadingTime(Math.ceil(wordCount / 200));

        // Fetch all blogs for suggestions
        const allBlogsResponse = await axios.get(`${url}/blog/allblogs`);
        const allBlogs = allBlogsResponse.data || [];
        const filteredBlogs = allBlogs.filter((b: iBlog) => b._id !== id);
        const shuffled = [...filteredBlogs].sort(() => 0.5 - Math.random());
        setSuggestedBlogs(shuffled.slice(0, 3));

        // Fetch comments
        const commentsResponse = await axios.get(`${url}/action/blogs/${id}/getcomments`);
        setComments(commentsResponse.data || []);

        // Check if user has liked this blog with count
        const userIdentifier = await getUserIdentifier();
        const likeResponse = await axios.get(`${url}/action/blogs/${id}/check-like-with-count`, {
            params: { userIdentifier }
        });
        setLikeStatus({
            liked: likeResponse.data?.liked || false,
            likeCount: likeResponse.data?.likeCount || 0
        });

        setLoading(false);
    } catch (error) {
        console.error("Error getting blog data:", error);
        setLoading(false);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to load blog data',
            background: '#1f2937',
            color: '#ffffff',
            confirmButtonColor: '#2563eb'
        });
    }
};


    useEffect(() => {
        if (id) {
            fetchBlogData();
        }
    }, [id]);

    const handleLike = async () => {
    if (!id || likeLoading) return;
    
    setLikeLoading(true);
    
    // Optimistically update UI
    const wasLiked = likeStatus.liked;
    const newLikedState = !wasLiked;
    const newLikeCount = wasLiked 
        ? Math.max(0, likeStatus.likeCount - 1) 
        : likeStatus.likeCount + 1;
    
    setLikeStatus({
        liked: newLikedState,
        likeCount: newLikeCount
    });
    
    try {
        const userIdentifier = await getUserIdentifier();
        
        if (wasLiked) {
            // Unlike
            await axios.post(`${url}/action/blogs/${id}/unlike`, { userIdentifier });
            Swal.fire({
                icon: 'success',
                title: 'Unliked!',
                text: 'You unliked this blog',
                background: '#1f2937',
                color: '#ffffff',
                confirmButtonColor: '#2563eb',
                timer: 1500
            });
        } else {
            // Like
            try {
                await axios.post(`${url}/action/blogs/${id}/like`, { userIdentifier });
                Swal.fire({
                    icon: 'success',
                    title: 'Liked!',
                    text: 'You liked this blog',
                    background: '#1f2937',
                    color: '#ffffff',
                    confirmButtonColor: '#2563eb',
                    timer: 1500
                });
            } catch (likeError: any) {
                if (likeError.response?.status === 400 && 
                    likeError.response?.data?.message === 'You already liked this post') {
                    // Already liked - this is fine, UI already updated
                    // Optionally show a different message
                    Swal.fire({
                        icon: 'info',
                        title: 'Already Liked',
                        text: 'You have already liked this post',
                        background: '#1f2937',
                        color: '#ffffff',
                        confirmButtonColor: '#2563eb',
                        timer: 1000
                    });
                } else {
                    // Revert optimistic update on other errors
                    setLikeStatus({
                        liked: wasLiked,
                        likeCount: wasLiked ? likeStatus.likeCount : Math.max(0, likeStatus.likeCount - 1)
                    });
                    throw likeError;
                }
            }
        }
    } catch (error: any) {
        if (error.response?.status !== 400 || 
            error.response?.data?.message !== 'You already liked this post') {
            console.error("Error with like action:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update like',
                background: '#1f2937',
                color: '#ffffff',
                confirmButtonColor: '#2563eb'
            });
        }
    } finally {
        setLikeLoading(false);
    }
};

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !username.trim() || !id) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please enter both username and comment',
                background: '#1f2937',
                color: '#ffffff',
                confirmButtonColor: '#2563eb'
            });
            return;
        }

        setCommentLoading(true);
        try {
            const userIdentifier = await getUserIdentifier();
            const response = await axios.post(`${url}/action/blogs/${id}/addcomments`, {
                userIdentifier,
                username,
                content: newComment
            });

            setComments(prev => [response.data, ...prev]);
            setNewComment("");
            
            Swal.fire({
                icon: 'success',
                title: 'Comment Added!',
                text: 'Your comment has been posted',
                background: '#1f2937',
                color: '#ffffff',
                confirmButtonColor: '#2563eb',
                timer: 1500
            });
        } catch (error) {
            console.error("Error adding comment:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add comment',
                background: '#1f2937',
                color: '#ffffff',
                confirmButtonColor: '#2563eb'
            });
        } finally {
            setCommentLoading(false);
        }
    };

    const renderDetails = (details: string) => {
        return details.split("\n").map((line, index) => (
            <p key={index} className="mb-4 last:mb-0">
                {line}
            </p>
        ));
    };

    const shareBlog = () => {
        if (navigator.share && blog) {
            navigator.share({
                title: blog.title,
                text: blog.details.slice(0, 100) + "...",
                url: window.location.href,
            });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
                <DatasIsaLoading />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
                <div className="text-center p-8 bg-[#ffffff] rounded-2xl shadow-lg max-w-md">
                    <div className="w-24 h-24 bg-gradient-to-r from-[#ffe4e6] to-[#fce7f3] rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-[#fb7185]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#111827] mb-3">Blog Not Found</h2>
                    <p className="text-[#6b7280] mb-6">The blog you're looking for doesn't exist or has been removed.</p>
                    <NavLink
                        to="/blogs"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-[#ffffff] px-6 py-3 rounded-lg font-semibold hover:from-[#1d4ed8] hover:to-[#4338ca] transition-all duration-300"
                    >
                        <FaArrowLeft />
                        Browse All Blogs
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#dbdde1]">
            {/* Back Navigation */}
            <div className="bg-[#ffffff] border-b border-[#e5e7eb] pt-[80px] lg:pt-[100px]">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <NavLink
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#2563eb] font-medium group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Back to Blogs</span>
                    </NavLink>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Blog Content */}
                    <div className="lg:col-span-2">
                        <article className="bg-[#ffffff] rounded-2xl shadow-xl overflow-hidden">
                            {/* Featured Image */}
                            <div className="relative h-64 md:h-80 lg:h-96">
                                <img
                                    src={blog.blogImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 lg:p-10">
                                {/* Header */}
                                <header className="mb-8">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6 leading-tight">
                                        {blog.title}
                                    </h1>

                                    {/* Like & Comment Stats */}
                                    <div className="flex items-center gap-6 mb-6 flex-wrap">
                                        <button
                                            onClick={handleLike}
                                            disabled={likeLoading}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                                likeStatus.liked
                                                    ? 'bg-gradient-to-r from-[#fecdd3] to-[#fce7f3] text-[#e11d48]'
                                                    : 'bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] text-[#6b7280] hover:from-[#e5e7eb] hover:to-[#d1d5db]'
                                            }`}
                                        >
                                            {likeStatus.liked ? (
                                                <FaHeart className="text-[#e11d48]" />
                                            ) : (
                                                <FaRegHeart />
                                            )}
                                            <span>{likeStatus.likeCount} Likes</span>
                                        </button>
                                        <div className="flex items-center gap-2 text-[#6b7280]">
                                            <FaRegComment />
                                            <span>{comments.length} Comments</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#6b7280]">
                                            <FiClock />
                                            <span>{readingTime} min read</span>
                                        </div>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center justify-between gap-4 py-6 border-y border-[#f3f4f6] flex-wrap">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] rounded-full flex items-center justify-center text-[#ffffff] font-bold text-lg">
                                                {blog.author?.charAt(0) || 'A'}
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#6b7280]">Written by</p>
                                                <p className="font-semibold text-[#111827]">{blog.author}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                                            <div className="flex items-center gap-2 bg-[#f9fafb] px-3 py-2 rounded-lg">
                                                <FaRegCalendarCheck className="text-[#9ca3af]" />
                                                <span>{blog.createdAt.slice(0, 10)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-[#f9fafb] px-3 py-2 rounded-lg">
                                                <IoTimeOutline className="text-[#9ca3af]" />
                                                <span>{blog.createdAt.slice(11, 16)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </header>

                                {/* Blog Content */}
                                <div className="prose prose-lg max-w-none mb-10">
                                    <div className="text-[#374151] leading-relaxed text-lg">
                                        {renderDetails(blog.details)}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 pt-8 border-t border-[#f3f4f6]">
                                    <button
                                        onClick={shareBlog}
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#dbeafe] to-[#e0e7ff] text-[#2563eb] rounded-lg font-semibold hover:from-[#bfdbfe] hover:to-[#c7d2fe] transition-all duration-300"
                                    >
                                        <FaShareAlt />
                                        Share Article
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Comments Section */}
                        <div className="bg-[#ffffff] rounded-2xl shadow-lg p-6 md:p-8 mt-8">
                            <div className="flex items-center gap-2 mb-6">
                                <FaRegComment className="text-[#4f46e5]" />
                                <h2 className="text-2xl font-bold text-[#111827]">Comments ({comments.length})</h2>
                            </div>

                            {/* Add Comment Form */}
                            <form onSubmit={handleSubmitComment} className="mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Your name"
                                        className="px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-[#000000] bg-[#ffffff]"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={commentLoading}
                                        className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-[#ffffff] rounded-lg font-semibold hover:from-[#1d4ed8] hover:to-[#4338ca] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {commentLoading ? 'Posting...' : 'Post Comment'}
                                    </button>
                                </div>
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Share your thoughts..."
                                    className="w-full h-32 px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent resize-none text-[#000000] bg-[#ffffff]"
                                    required
                                />
                            </form>

                            {/* Comments List */}
                            <div className="space-y-6">
                                {comments.length > 0 ? (
                                    comments.map((comment) => (
                                        <div key={comment._id} className="p-4 border border-[#e5e7eb] rounded-lg bg-[#f9fafb]">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6] rounded-full flex items-center justify-center text-[#ffffff] font-bold text-sm">
                                                        {comment.username.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-[#111827]">{comment.username}</h4>
                                                        <p className="text-xs text-[#6b7280]">
                                                            {new Date(comment.createdAt).toLocaleDateString()} at {new Date(comment.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-[#374151] pl-11">{comment.content}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <FaRegComment className="w-8 h-8 text-[#9ca3af]" />
                                        </div>
                                        <p className="text-[#6b7280] mb-2">No comments yet</p>
                                        <p className="text-sm text-[#9ca3af]">Be the first to share your thoughts!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar with Suggested Blogs */}
                    <div className="space-y-8">
                        {/* Share Card */}
                        <div className="bg-[#ffffff] rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-[#111827] mb-4">Share This Article</h3>
                            <div className="flex gap-3 text-[12px] flex-wrap">
                                {[
                                    { name: 'Facebook', color: '#1877f2' },
                                    { name: 'Twitter', color: '#1da1f2' },
                                    { name: 'LinkedIn', color: '#0a66c2' }
                                ].map((platform) => (
                                    <button
                                        key={platform.name}
                                        onClick={shareBlog}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                                        style={{
                                            backgroundColor: `${platform.color}15`,
                                            color: platform.color
                                        }}
                                    >
                                        <IoShareSocialOutline />
                                        {platform.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Suggested Blogs */}
                        <div className="bg-[#ffffff] rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-6 border-b border-[#f3f4f6]">
                                <h3 className="text-xl font-bold text-[#111827]">Continue Reading</h3>
                                <p className="text-[#6b7280] text-sm mt-1">Discover more insights</p>
                            </div>

                            <div className="p-6 space-y-6">
                                {suggestedBlogs.length > 0 ? (
                                    suggestedBlogs.map((suggestedBlog) => (
                                        <div
                                            key={suggestedBlog._id}
                                            className="group cursor-pointer"
                                            onClick={() => navigate(`/blogs/oneblog/${suggestedBlog._id}`)}
                                        >
                                            <div className="flex gap-4">
                                                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                    <img
                                                        src={suggestedBlog.blogImage}
                                                        alt={suggestedBlog.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-[#111827] group-hover:text-[#2563eb] transition-colors line-clamp-2 mb-2">
                                                        {suggestedBlog.title.length > 60
                                                            ? suggestedBlog.title.slice(0, 60) + "..."
                                                            : suggestedBlog.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3 text-xs text-[#6b7280]">
                                                        <span className="flex items-center gap-1">
                                                            <FaRegCalendarCheck />
                                                            {suggestedBlog.createdAt.slice(0, 10)}
                                                        </span>
                                                        <span>•</span>
                                                        <span>{suggestedBlog.author}</span>
                                                    </div>
                                                    <div className="mt-2 inline-flex items-center gap-1 text-[#2563eb] text-sm font-medium group-hover:gap-2 transition-all duration-300">
                                                        Read More
                                                        <FaArrowRight className="text-xs" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-gradient-to-r from-[#dbeafe] to-[#e0e7ff] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <p className="text-[#6b7280]">No suggested blogs available</p>
                                    </div>
                                )}
                            </div>

                            {/* View All CTA */}
                            <div className="p-6 border-t border-[#f3f4f6] bg-gradient-to-r from-[#dbeafe] to-[#e0e7ff]">
                                <NavLink
                                    to="/blogs"
                                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-[#ffffff] rounded-lg font-semibold hover:from-[#1d4ed8] hover:to-[#4338ca] transition-all duration-300"
                                >
                                    View All Blogs
                                    <FaArrowRight />
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="max-w-7xl mx-auto px-4 py-8 mt-8">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <NavLink
                        to="/blogs"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffffff] border border-[#e5e7eb] text-[#374151] rounded-xl font-semibold hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-all duration-300 group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                        All Articles
                    </NavLink>
                    <button 
                        onClick={() => {
                            if (suggestedBlogs[0]) {
                                navigate(`/blogs/oneblog/${suggestedBlogs[0]._id}`);
                            }
                        }}
                        disabled={suggestedBlogs.length === 0}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-[#ffffff] rounded-xl font-semibold hover:from-[#1d4ed8] hover:to-[#4338ca] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next Article
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OneBlog;