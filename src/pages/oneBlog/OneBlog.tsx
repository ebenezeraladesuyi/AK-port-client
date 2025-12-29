import { NavLink, useParams, useNavigate } from "react-router-dom";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { iBlog } from "../../types/interface";
import axios from "axios";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { FaRegCalendarCheck, 
        } from "react-icons/fa";
import { IoTimeOutline, 
        } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { url } from "../../utils/Api";

const OneBlog = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<iBlog | null>(null);
    const [loading, setLoading] = useState(false);
    const [suggestedBlogs, setSuggestedBlogs] = useState<iBlog[]>([]);
    const [readingTime, setReadingTime] = useState<number>(0);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${url}/blog/getoneblog/${id}`);
                setBlog(response.data);

                // Fetch all blogs for suggestions
                const allBlogsResponse = await axios.get(`${url}/blog/allblogs`);
                const allBlogs = allBlogsResponse.data || [];

                // Calculate reading time (assuming 200 words per minute)
                const wordCount = response.data.details.split(/\s+/).length;
                setReadingTime(Math.ceil(wordCount / 200));

                // Get random suggested blogs (excluding current blog)
                const filteredBlogs = allBlogs.filter((b: iBlog) => b._id !== id);
                const shuffled = [...filteredBlogs].sort(() => 0.5 - Math.random());
                setSuggestedBlogs(shuffled.slice(0, 3));

                setLoading(false);
            } catch (error) {
                console.error("Error getting blog:", error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const renderDetails = (details: string) => {
        return details.split("\n").map((line, index) => (
            <p key={index} className="mb-4 last:mb-0">
                {line}
            </p>
        ));
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <DatasIsaLoading />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
                    <div className="w-24 h-24 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Blog Not Found</h2>
                    <p className="text-gray-600 mb-6">The blog you're looking for doesn't exist or has been removed.</p>
                    <NavLink
                        to="/blogs"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    >
                        <FaArrowLeftLong />
                        Browse All Blogs
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
            {/* Back Navigation */}
            <div className="bg-whit border-b border-gray-200 pt-[100px]">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <NavLink
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium group"
                    >
                        <FaArrowLeftLong className="group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Back to Blogs</span>
                    </NavLink>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Blog Content */}
                    <div className="lg:col-span-2">
                        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Featured Image */}
                            <div className="relative h-64 md:h-80 lg:h-96">
                                <img
                                    src={blog.blogImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <span className="text-xs font-semibold text-blue-600">
                                            Featured Article
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 lg:p-10">
                                {/* Header */}
                                <header className="mb-8">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        {blog.title}
                                    </h1>

                                    {/* Meta Information */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-y border-gray-100">
                                        <div className="flex items-center gap-4">
                                            {/* Author Avatar */}
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                {blog.author?.charAt(0) || 'A'}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Written by</p>
                                                <p className="font-semibold text-gray-900">{blog.author}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                                <FaRegCalendarCheck className="text-gray-400" />
                                                <span>{blog.createdAt.slice(0, 10)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                                <IoTimeOutline className="text-gray-400" />
                                                <span>{blog.createdAt.slice(11, 16)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                                <FiClock className="text-gray-400" />
                                                <span>{readingTime} min read</span>
                                            </div>
                                        </div>
                                    </div>
                                </header>

                                {/* Blog Content */}
                                <div className="prose prose-lg max-w-none mb-10">
                                    <div className="text-gray-700 leading-relaxed text-lg">
                                        {renderDetails(blog.details)}
                                    </div>
                                </div>

                            </div>
                        </article>
                    </div>

                    {/* Sidebar with Suggested Blogs */}
                    <div className="space-y-8">
                        {/* Suggested Blogs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900">Continue Reading</h3>
                                <p className="text-gray-600 text-sm mt-1">Discover more insights</p>
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
                                                {/* Thumbnail */}
                                                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                    <img
                                                        src={suggestedBlog.blogImage}
                                                        alt={suggestedBlog.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                                                        {suggestedBlog.title.length > 60
                                                            ? suggestedBlog.title.slice(0, 60) + "..."
                                                            : suggestedBlog.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <FaRegCalendarCheck />
                                                            {suggestedBlog.createdAt.slice(0, 10)}
                                                        </span>
                                                        <span>•</span>
                                                        <span>{suggestedBlog.author}</span>
                                                    </div>
                                                    <div className="mt-2 inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                                                        Read More
                                                        <FaArrowRightLong className="text-xs" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-600">No suggested blogs available</p>
                                    </div>
                                )}
                            </div>

                            {/* View All CTA */}
                            <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <NavLink
                                    to="/blogs"
                                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                                >
                                    View All Blogs
                                    <FaArrowRightLong />
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
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
                    >
                        <FaArrowLeftLong className="group-hover:-translate-x-1 transition-transform duration-300" />
                        All Articles
                    </NavLink>
                    {/* <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                        Next Article
                        <FaArrowRightLong />
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default OneBlog;