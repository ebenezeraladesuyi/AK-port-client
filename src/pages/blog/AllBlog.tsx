// import React from 'react'


// import { useEffect, useState } from 'react';
// import pic1 from "../../assets/blog/Jesus-is-Calling1-768x480.jpg";
// import pic2 from "../../assets/blog/PeoplePraying-768x420.jpg";
// import pic3 from "../../assets/blog/Beautiful_woman_prayer.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import { iBlog } from '../../types/interface';
// import axios from 'axios';
// import { url } from '../../api/Api';
// import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import lean from "../../assets/images/blog/lean2.png";
import blog from "../../assets/images/blog/blog.png";


const AllBlogs = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 5; // Number of images per page
    // const [allBlog, setAllBlog] = useState<iBlog[]>([]);
    // const [loading, setLoading] = useState(false);

    // get all blogs
    // useEffect(() => {
    //     const fetchBlogs = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await axios.get(`${url}/blog/allblogs`);
    //             const sortedBlogs = response.data && response.data.sort((a: iBlog, b: iBlog) => {
    //                 return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    //             });

    //             setAllBlog(sortedBlogs);

    //             setLoading(false)
    //         } catch (error) {
    //             console.error("error getting all blogs:", error)

    //             setLoading(false);
    //         }
    //     };

    //     fetchBlogs()
    // }, []);

    // cal idexes of blogs per page
    // const indexOfLastBlog = currentPage * itemsPerPage;
    // const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    // const currentBlogs = allBlog && allBlog.slice(indexOfFirstBlog, indexOfLastBlog)

    // handle per change
    // const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    //     setCurrentPage(value)
    // }



  return (
    <div className="w-full h-[100%] py-[30px] flex justify-center items-center bg-black">
        <div className="w-[90%] mt-[80px] md:mt-[90px] flex flex-col items-cente bg-white p-6">
            <h6 className="text-[18px] md:text-[25px] font-bold mb-[10px] text-blue-400">Blogs</h6>

            <hr className="w-full border-[1px] border-gray-200 mb-[20px]" />

            {/* { loading ? 
                <div className='w-full flex justify-center items-center'>
                    <DatasIsaLoading />
                </div>
            : */}

                <div className="w-full flex flex-col gap-4 relative mb-[20px]">
                    {/* {currentBlogs && currentBlogs.map((blog: iBlog) => ( */}
                        <div 
                          // key={blog._id} 
                          className="w-full lg:w-[70%] py-[10px] flex flex-col md:flex-row gap-3 bg-white">
                            <div className="w-full md:w-[40%] border-[1px] border-gray-200 rounded-[6px]">
                                {/* <img className="w-full" src={blog?.blogImage} alt={blog?.title} /> */}
                                <img className="w-full" src={lean} alt="" />
                            </div>

                            <div className="md:w-[58%] p-3 flex flex-col gap-2">
                                <h5 className="text-[16px] lg:text-[20px] capitalize font-bold">
                                    LEAN METHODOLOGY
                                    {/* {blog?.title.toUpperCase()} */}
                                </h5>

                                <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                                    <h5 className="text-[#bab9c1]">BY <span className="text-blue-400 font-bold">
                                      {/* {blog?.author} */}
                                      Akeem Suara
                                      </span></h5>

                                    <h5 className="text-[#bab9c1] flex items-center gap-1"> <span className='text-[12px]'><FaRegCalendarCheck /></span> 
                                    {/* {blog?.createdAt.slice(0, 10)}  */}
                                    28/09/24
                                    <span className='text-[12px]'><IoTimeOutline /></span>
                                    {/* {blog?.createdAt.slice(11, 16)} */}
                                    08:48AM
                                    </h5>
                                </div>

                                <h5 className="text-justify text-[11px] lg:text-[13px]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ipsa totam excepturi qui tempora sapiente neque. Eaque provident dolore accusamus aliquam sapiente debitis obcaecati eos...
                                    {/* {blog?.details.slice(0, 250)} */}
                                    ...
                                </h5>

                                <NavLink 
                                  // to={`/allblogs/oneblog/${blog?._id}`}
                                  to="/blogs/oneblog"
                                >
                                    <h5 className="text-[12px] text-blue-400 flex gap-1 items-center cursor-pointer">Continue Reading <FaArrowRightLong /></h5>
                                </NavLink>
                            </div>
                        </div>
                    {/* // ))} */}

                    {/* <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-0 border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
                        <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

                        <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6>
                        <h6 className="text-[14px] text-center flex flex-col">Sunday Service: <span className="text-[#b6f4d1]">10:00am - 12:00Noon</span></h6>
                        <h6 className="text-[14px] text-center">Tuesday: Digging Deep/Faith Clinic: <span className="text-[#b6f4d1]">7:00pm - 9:00pm</span></h6>
                    </div> */}

                </div>

<div className="w-full flex flex-col gap-4 relative mb-[20px]">
    {/* {currentBlogs && currentBlogs.map((blog: iBlog) => ( */}
        <div 
          // key={blog._id} 
          className="w-full lg:w-[70%] py-[10px] flex flex-col md:flex-row gap-3 bg-white">
            <div className="w-full md:w-[40%] border-[1px] border-gray-200 rounded-[6px]">
                {/* <img className="w-full" src={blog?.blogImage} alt={blog?.title} /> */}
                <img className="w-full" src={blog} alt="" />
            </div>

            <div className="md:w-[58%] p-3 flex flex-col gap-2">
                <h5 className="text-[16px] lg:text-[20px] capitalize font-bold">
                    TEAMWORK IN DEVELOPMENT
                    {/* {blog?.title.toUpperCase()} */}
                </h5>

                <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                    <h5 className="text-[#bab9c1]">BY <span className="text-blue-400 font-bold">
                      {/* {blog?.author} */}
                      Akeem Suara
                      </span></h5>

                    <h5 className="text-[#bab9c1] flex items-center gap-1"> <span className='text-[12px]'><FaRegCalendarCheck /></span> 
                    {/* {blog?.createdAt.slice(0, 10)}  */}
                    28/09/24
                    <span className='text-[12px]'><IoTimeOutline /></span>
                    {/* {blog?.createdAt.slice(11, 16)} */}
                    08:48AM
                    </h5>
                </div>

                <h5 className="text-justify text-[11px] lg:text-[13px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ipsa totam excepturi qui tempora sapiente neque. Eaque provident dolore accusamus aliquam sapiente debitis obcaecati eos...
                    {/* {blog?.details.slice(0, 250)} */}
                    ...
                </h5>

                <NavLink 
                  // to={`/allblogs/oneblog/${blog?._id}`}
                  to="/blogs/oneblog"
                >
                    <h5 className="text-[12px] text-blue-400 flex gap-1 items-center cursor-pointer">Continue Reading <FaArrowRightLong /></h5>
                </NavLink>
            </div>
        </div>
    {/* // ))} */}

    {/* <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-0 border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
        <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

        <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6>
        <h6 className="text-[14px] text-center flex flex-col">Sunday Service: <span className="text-[#b6f4d1]">10:00am - 12:00Noon</span></h6>
        <h6 className="text-[14px] text-center">Tuesday: Digging Deep/Faith Clinic: <span className="text-[#b6f4d1]">7:00pm - 9:00pm</span></h6>
    </div> */}

</div>

<div className="w-full flex flex-col gap-4 relative mb-[20px]">
    {/* {currentBlogs && currentBlogs.map((blog: iBlog) => ( */}
        <div 
          // key={blog._id} 
          className="w-full lg:w-[70%] py-[10px] flex flex-col md:flex-row gap-3 bg-white">
            <div className="w-full md:w-[40%] border-[1px] border-gray-200 rounded-[6px]">
                {/* <img className="w-full" src={blog?.blogImage} alt={blog?.title} /> */}
                <img className="w-full" src={lean} alt="" />
            </div>

            <div className="md:w-[58%] p-3 flex flex-col gap-2">
                <h5 className="text-[16px] lg:text-[20px] capitalize font-bold">
                    LEAN METHODOLOGY
                    {/* {blog?.title.toUpperCase()} */}
                </h5>

                <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                    <h5 className="text-[#bab9c1]">BY <span className="text-blue-400 font-bold">
                      {/* {blog?.author} */}
                      Akeem Suara
                      </span></h5>

                    <h5 className="text-[#bab9c1] flex items-center gap-1"> <span className='text-[12px]'><FaRegCalendarCheck /></span> 
                    {/* {blog?.createdAt.slice(0, 10)}  */}
                    28/09/24
                    <span className='text-[12px]'><IoTimeOutline /></span>
                    {/* {blog?.createdAt.slice(11, 16)} */}
                    08:48AM
                    </h5>
                </div>

                <h5 className="text-justify text-[11px] lg:text-[13px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ipsa totam excepturi qui tempora sapiente neque. Eaque provident dolore accusamus aliquam sapiente debitis obcaecati eos...
                    {/* {blog?.details.slice(0, 250)} */}
                    ...
                </h5>

                <NavLink 
                  // to={`/allblogs/oneblog/${blog?._id}`}
                  to="/oneblog"
                >
                    <h5 className="text-[12px] text-blue-400 flex gap-1 items-center cursor-pointer">Continue Reading <FaArrowRightLong /></h5>
                </NavLink>
            </div>
        </div>
    {/* // ))} */}

    {/* <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-0 border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
        <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

        <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6>
        <h6 className="text-[14px] text-center flex flex-col">Sunday Service: <span className="text-[#b6f4d1]">10:00am - 12:00Noon</span></h6>
        <h6 className="text-[14px] text-center">Tuesday: Digging Deep/Faith Clinic: <span className="text-[#b6f4d1]">7:00pm - 9:00pm</span></h6>
    </div> */}

</div>



            {/* } */}

            {/* pagination */}
            <div className='w-full flex justify-center items-center'>
                <Stack>
                    <Pagination 
                        // count={Math.ceil(allBlog && allBlog.length / itemsPerPage)}
                        // page={currentPage}
                        // onChange={handleChangePage}
                        // color='primary'
                    />
                </Stack>
            </div>
            

            <hr className="w-full border-[1px] border-gray-200 mt-[20px]" />

        </div>
    </div>
  )
}

export default AllBlogs;