import { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { iBlog, iSubscribe } from '../../types/interface';
import axios from 'axios';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { FaRegCalendarCheck, FaHeart, FaRegComment } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { url } from '../../utils/Api';
import Swal from 'sweetalert2';

interface BlogStats {
    [key: string]: {
        likeCount: number;
        commentCount: number;
    };
}

const AllBlogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [allBlog, setAllBlog] = useState<iBlog[]>([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [blogStats, setBlogStats] = useState<BlogStats>({});

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${url}/blog/allblogs`);
                const sortedBlogs = response.data && response.data.sort((a: iBlog, b: iBlog) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });
                setAllBlog(sortedBlogs);
                
                // Fetch stats for each blog
                const stats: BlogStats = {};
                await Promise.all(
                    sortedBlogs.map(async (blog: iBlog) => {
                        try {
                            // Fetch likes count
                            const likesResponse = await axios.get(`${url}/action/blogs/${blog._id}/like-count`);
                            // Fetch comments count
                            const commentsResponse = await axios.get(`${url}/action/blogs/${blog._id}/getcomments`);
                            
                            stats[blog._id] = {
                                likeCount: likesResponse.data?.count || 0,
                                commentCount: commentsResponse.data?.length || 0
                            };
                        } catch (error) {
                            console.error(`Error fetching stats for blog ${blog._id}:`, error);
                            stats[blog._id] = {
                                likeCount: 0,
                                commentCount: 0
                            };
                        }
                    })
                );
                setBlogStats(stats);
                setLoading(false);
            } catch (error) {
                console.error("Error getting all blogs:", error);
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = allBlog && allBlog.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    // subscribe for newsletter
    const [formData, setFormData] = useState<iSubscribe>({
        email: ""
    });

    // To subscribe
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading2(true);
        try {
            const subscribe = await axios.post(`${url}/sub/createsubscription`, formData);

            console.log("subscription successful", subscribe.data);

            // reset formData
            setFormData({
                email: ""
            });
            setError(null);

            if (subscribe.data.message === "subscription successful") {
                Swal.fire({
                    title: "Subscription Successful",
                    text: "Thank you for subscribing to our newsletter!",
                    icon: "success",
                    background: "#1f2937",
                    color: "#ffffff",
                    confirmButtonColor: "#2563eb"
                });
            } else {
                Swal.fire({
                    title: "Subscription Failed",
                    text: "Please try again later.",
                    icon: "error",
                    background: "#1f2937",
                    color: "#ffffff",
                    confirmButtonColor: "#dc2626"
                });
            }
        } catch (error) {
            console.error("Error while subscribing:", error);
            setError("Error while subscribing. Please, try again");
            Swal.fire({
                title: "Subscription Error",
                text: "An error occurred. Please try again.",
                icon: "error",
                background: "#1f2937",
                color: "#ffffff",
                confirmButtonColor: "#dc2626"
            });
        } finally {
            setLoading2(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 pt-[80px] lg:pt-[100px]">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] bg-clip-text text-transparent">
                        Latest Insights
                    </h1>
                    <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
                        Discover our latest articles and industry insights
                    </p>
                </div>

                {loading ? 
                    <div className='flex justify-center items-center py-20'>
                        <DatasIsaLoading />
                    </div>
                :
                    <>
                        {/* Blog Posts Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {/* Main Blog Posts Column */}
                            <div className="lg:col-span-2 space-y-8">
                                {currentBlogs && currentBlogs.map((blog: iBlog) => (
                                    <div 
                                        key={blog._id} 
                                        className="group bg-[#ffffff] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#e5e7eb] hover:border-[#bfdbfe]"
                                    >
                                        <div className="flex flex-col md:flex-row">
                                            {/* Blog Image */}
                                            <div className="md:w-2/5 relative overflow-hidden">
                                                <div className="h-48 md:h-full">
                                                    <img 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                                        src={blog?.blogImage} 
                                                        alt={blog?.title} 
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </div>

                                            {/* Blog Content */}
                                            <div className="md:w-3/5 p-6 md:p-8">
                                                {/* Title */}
                                                <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#2563eb] transition-colors">
                                                    {blog?.title}
                                                </h3>

                                                {/* Meta Info */}
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-[#4b5563]">
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#4f46e5] flex items-center justify-center text-[#ffffff] text-xs font-bold">
                                                                {blog?.author?.charAt(0) || 'A'}
                                                            </div>
                                                            <span className="text-sm font-medium">{blog?.author}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[#6b7280] text-sm">
                                                            <FaRegCalendarCheck className="text-[#9ca3af]" />
                                                            <span>{blog?.createdAt.slice(0, 10)}</span>
                                                            <IoTimeOutline className="text-[#9ca3af] ml-2" />
                                                            <span>{blog?.createdAt.slice(11, 16)}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Likes & Comments Stats */}
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-[#6b7280] text-sm">
                                                            <FaHeart className="text-[#ef4444]" />
                                                            <span className="font-semibold">
                                                                {blogStats[blog._id]?.likeCount || 0}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[#6b7280] text-sm">
                                                            <FaRegComment className="text-[#3b82f6]" />
                                                            <span className="font-semibold">
                                                                {blogStats[blog._id]?.commentCount || 0}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Excerpt */}
                                                <p className="text-[#4b5563] mb-6 leading-relaxed line-clamp-3">
                                                    {blog?.details.slice(0, 250)}...
                                                </p>

                                                {/* Read More Button */}
                                                <NavLink 
                                                    to={`/blogs/oneblog/${blog?._id}`}
                                                    className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] font-semibold group/btn"
                                                >
                                                    <span>Continue Reading</span>
                                                    <FaArrowRightLong className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                {/* Newsletter Card */}
                                <div className="bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-2xl p-6 text-[#ffffff] shadow-lg">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-[#ffffff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Never Miss an Update</h3>
                                        <p className="text-[#93c5fd] text-sm">Subscribe to our newsletter</p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            className="w-full px-4 py-3 rounded-lg bg-[#ffffff]/10 border border-[#ffffff]/20 placeholder-[#93c5fd] text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]/30"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                        <button 
                                            type="submit"
                                            disabled={loading2}
                                            className="w-full bg-[#ffffff] text-[#2563eb] font-semibold py-3 rounded-lg hover:bg-[#f0f9ff] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                                        >
                                            {loading2 ? "Subscribing..." : "Subscribe Now"}
                                        </button>

                                        {error && <p className='text-[12px] text-[#fca5a5] text-center'>{error}</p>}
                                    </form>
                                </div>

                                {/* Stats Card */}
                                <div className="bg-gradient-to-br from-[#10b981] to-[#0d9488] rounded-2xl p-6 text-[#ffffff] shadow-lg">
                                    <h4 className="text-lg font-bold mb-4">Community Stats</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#a7f3d0]">Total Articles</span>
                                            <span className="font-bold text-xl">{allBlog?.length || 0}</span>
                                        </div>
                                        {/* <div className="flex justify-between items-center">
                                            <span className="text-[#a7f3d0]">Total Likes</span>
                                            <span className="font-bold text-xl">
                                                {Object.values(blogStats).reduce((sum, stats) => sum + (stats?.likeCount || 0), 0)}
                                            </span>
                                        </div> */}
                                        {/* <div className="flex justify-between items-center">
                                            <span className="text-[#a7f3d0]">Total Comments</span>
                                            <span className="font-bold text-xl">
                                                {Object.values(blogStats).reduce((sum, stats) => sum + (stats?.commentCount || 0), 0)}
                                            </span>
                                        </div> */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#a7f3d0]">Weekly Reads</span>
                                            <span className="font-bold text-xl">1K+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Most Popular Blog */}
                                {allBlog.length > 0 && (
                                    <div className="bg-[#ffffff] rounded-2xl shadow-lg overflow-hidden">
                                        <div className="p-6 border-b border-[#f3f4f6]">
                                            <h3 className="text-lg font-bold text-[#111827] mb-2">Most Popular</h3>
                                            <p className="text-[#6b7280] text-sm">Most liked article</p>
                                        </div>
                                        <div className="p-6">
                                            {(() => {
                                                const blogsWithStats = allBlog.map(blog => ({
                                                    ...blog,
                                                    stats: blogStats[blog._id] || { likeCount: 0, commentCount: 0 }
                                                }));
                                                const mostPopular = blogsWithStats.sort((a, b) => 
                                                    b.stats.likeCount - a.stats.likeCount
                                                )[0];
                                                
                                                return (
                                                    <div 
                                                        className="group cursor-pointer"
                                                        onClick={() => window.location.href = `/blogs/oneblog/${mostPopular._id}`}
                                                    >
                                                        <div className="mb-4 rounded-lg overflow-hidden">
                                                            <img 
                                                                src={mostPopular.blogImage} 
                                                                alt={mostPopular.title}
                                                                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <h4 className="font-bold text-[#111827] group-hover:text-[#2563eb] transition-colors line-clamp-2 mb-2">
                                                            {mostPopular.title}
                                                        </h4>
                                                        <div className="flex items-center justify-between text-sm text-[#6b7280]">
                                                            <div className="flex items-center gap-3">
                                                                <span className="flex items-center gap-1">
                                                                    <FaHeart className="text-[#ef4444]" />
                                                                    {mostPopular.stats.likeCount}
                                                                </span>
                                                                <span className="flex items-center gap-1">
                                                                    <FaRegComment className="text-[#3b82f6]" />
                                                                    {mostPopular.stats.commentCount}
                                                                </span>
                                                            </div>
                                                            <span className="text-[#2563eb] font-semibold group-hover:underline">
                                                                Read →
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                }

                {/* Pagination */}
                {!loading && allBlog?.length > itemsPerPage && (
                    <div className='flex justify-center items-center mt-12'>
                        <div className="bg-[#ffffff] rounded-xl shadow-lg p-4">
                            <Stack>
                                <Pagination 
                                    count={Math.ceil(allBlog && allBlog.length / itemsPerPage)}
                                    page={currentPage}
                                    onChange={handleChangePage}
                                    color='primary'
                                    size="large"
                                    sx={{
                                        '& .MuiPaginationItem-root': {
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: '#374151',
                                        },
                                        '& .MuiPaginationItem-root:hover': {
                                            backgroundColor: '#f3f4f6',
                                        },
                                        '& .Mui-selected': {
                                            backgroundColor: '#2563eb !important',
                                            color: '#ffffff',
                                        },
                                        '& .MuiPaginationItem-root.Mui-selected:hover': {
                                            backgroundColor: '#1d4ed8 !important',
                                        }
                                    }}
                                />
                            </Stack>
                        </div>
                    </div>
                )}

                {/* Footer Note */}
                <div className="text-center mt-12 pt-8 border-t border-[#e5e7eb]">
                    <p className="text-[#6b7280]">
                        Showing {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, allBlog?.length || 0)} of {allBlog?.length || 0} articles
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;