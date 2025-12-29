import { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { iBlog, iSubscribe } from '../../types/interface';
import axios from 'axios';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { url } from '../../utils/Api';
import Swal from 'sweetalert2';

const AllBlogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [allBlog, setAllBlog] = useState<iBlog[]>([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [error, setError] = useState<string |  null>()

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${url}/blog/allblogs`);
                const sortedBlogs = response.data && response.data.sort((a: iBlog, b: iBlog) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });
                setAllBlog(sortedBlogs);
                setLoading(false)
            } catch (error) {
                console.error("error getting all blogs:", error)
                setLoading(false);
            }
        };
        fetchBlogs()
    }, []);

    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = allBlog && allBlog.slice(indexOfFirstBlog, indexOfLastBlog)

    const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
    }

    // subscribe for newsletter
    const [formData, setFormData] = useState<iSubscribe>({
        email:""
    })


    // To subscribe
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading2(true)
        try {
            const subscribe = await axios.post(`${url}/sub/createsubscription`, formData)

            console.log("subscription successfull", subscribe.data);

            // reset formData
            setFormData({
                email:""
            })
            setError(null)

            if (subscribe.data.message === "subscription successful") {
                Swal.fire({
                  title: "Subscription Successfull",
                //   text: "Thank You for registering. We will reach out to you via email or call.",
                  icon: "success",
                })
              } else {
                Swal.fire({
                    title: "Error while subscribing. Please, try again",
                    // text: "Thank You for registering. We will reach out to you via email or call.",
                    icon: "error",
                  })
              }

            // toast.success("Subscription Successfull")
        } catch (error) {
            console.error("Error while subscribing. Please, try again")

            // toast.error("Error while subscribing. Please, try again")
        } finally {
            setLoading2(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }


    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Latest Insights
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-200"
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
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </div>

                                            {/* Blog Content */}
                                            <div className="md:w-3/5 p-6 md:p-8">
                                                {/* Category/Tag */}
                                                {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4">
                                                    Technology
                                                </div> */}

                                                {/* Title */}
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {blog?.title}
                                                </h3>

                                                {/* Meta Info */}
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                                                            {blog?.author?.charAt(0) || 'A'}
                                                        </div>
                                                        <span className="text-sm font-medium">{blog?.author}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                                        <FaRegCalendarCheck className="text-gray-400" />
                                                        <span>{blog?.createdAt.slice(0, 10)}</span>
                                                        <IoTimeOutline className="text-gray-400 ml-2" />
                                                        <span>{blog?.createdAt.slice(11, 16)}</span>
                                                    </div>
                                                </div>

                                                {/* Excerpt */}
                                                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                                                    {blog?.details.slice(0, 250)}...
                                                </p>

                                                {/* Read More Button */}
                                                <NavLink 
                                                    to={`/blogs/oneblog/${blog?._id}`}
                                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/btn"
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
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Never Miss an Update</h3>
                                        <p className="text-blue-100 text-sm">Subscribe to our newsletter</p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />

                                        <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                                            {/* Subscribe Now */}
                                            { loading2 ? "Loading" : "Subscribe Now"}
                                        </button>

                                        {error && <p className='text-[7px]'>{error}</p>}
                                    </form>
                                </div>

                                {/* Popular Tags */}
                                {/* <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'TypeScript', 'Web Dev', 'AI', 'Cloud', 'Security'].map((tag) => (
                                            <span 
                                                key={tag}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div> */}

                                {/* Stats Card */}
                                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
                                    <h4 className="text-lg font-bold mb-4">Community Stats</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-emerald-100">Total Articles</span>
                                            <span className="font-bold text-xl">{allBlog?.length || 0}</span>
                                        </div>
                                        {/* <div className="flex justify-between items-center">
                                            <span className="text-emerald-100">This Month</span>
                                            <span className="font-bold text-xl">12</span>
                                        </div> */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-emerald-100">Weekly Reads</span>
                                            <span className="font-bold text-xl">1K+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }

                {/* Pagination */}
                {!loading && allBlog?.length > itemsPerPage && (
                    <div className='flex justify-center items-center mt-12'>
                        <div className="bg-white rounded-xl shadow-lg p-4">
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
                                        },
                                        '& .Mui-selected': {
                                            backgroundColor: '#2563eb !important',
                                            color: 'white',
                                        }
                                    }}
                                />
                            </Stack>
                        </div>
                    </div>
                )}

                {/* Footer Note */}
                <div className="text-center mt-12 pt-8 border-t border-gray-200">
                    <p className="text-gray-600">
                        Showing {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, allBlog?.length || 0)} of {allBlog?.length || 0} articles
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs;