// import React from 'react'

import { NavLink, useParams } from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6"
import { useEffect, useState } from "react";
import { iBlog } from "../../types/interface";
import axios from "axios";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { url } from "../../utils/Api";


const OneBlog = () => {

    const { id } = useParams<{id: string}>();
    const [blog, setBlog] = useState<iBlog | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchBLog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${url}/blog/getoneblog/${id}`);

                setBlog(response.data);
                
                setLoading(false)

            } catch (error) {
                console.error("error getting one blog:", error)
 
                setLoading(false)
            }
        };

        fetchBLog();
    }, [id]);

    if (loading) {
        return 
        <div className="w-full flex justify-center items-center">
            <DatasIsaLoading />
        </div>;
    }

    if (!blog) {
        return 
            <div className="w-full justify-center items-center text-[25px] font-bold">
                Blog Not Found
            </div>
    }

    // Convert newlines (\n) to <br /> tags
  const renderDetails = (details: string) => {
    return details.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };


  return (
    <div className="w-full flex justify-center items-center bg-black py-[30px]">
        <div className="w-[90%] mt-[80px] md:mt-[100px] flex flex-col gap-4 relative bg-white p-6">
            <NavLink to="/blogs">
                <h6 className="bg-[#ec0e0e] p-1 px-2 text-white text-[13px] w-[100px] text-center flex items-center justify-center gap-2"><span><FaArrowLeftLong /></span>Blog</h6>
            </NavLink>

            <hr className="w-full border-[1px] border-gray-200 mb-[20px]" />

            <div className="w-full flex flex-col gap-3">
                <h5 className="font-bold text-[22px] md:text-[27px] lg:text-[33px] ">
                    {/* LEAN METHODOLOGY */}
                    {blog?.title.toUpperCase()}
                </h5>
                
                <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                    <h5 className="text-[#bab9c1]">BY <span className="text-blue-400 font-bold">
                        {blog?.author}
                        {/* Akeem Suara */}
                        </span></h5>

                    <h5 className="text-[#bab9c1] flex items-center gap-1"> <span className='text-[12px]'><FaRegCalendarCheck /></span> 
                        {blog?.createdAt.slice(0, 10)}  
                        {/* 28/09/2024 */}
                    <span className='text-[12px]'><IoTimeOutline /></span>
                         {blog?.createdAt.slice(11, 16)}
                        {/* 08:14AM */}
                    </h5>
                </div>

                <div className="w-full lg:w-[65%] border-[1px] border-gray-200 rounded-[6px]">
                    <img className="w-full" src={blog?.blogImage} alt={blog?.title} />
                    {/* <img className="w-full" src={lean} alt="" /> */}
                </div>

                <h5 className="text-[12px] md:text-[14px] lg:text-[16px] text-justify w-full lg:w-[70%]">
                    {blog?.details ? renderDetails(blog.details) : null} 
                    {/* {blog?.details} */}
                </h5>
            </div>

            <NavLink to="/blogs" >
                <div className="flex gap-2 items-center hover:text-orange-400 cursor-pointer animate-bounce text-[#28166f] text-[12px] md:text-[14px] mt-[10px]">
                    <h6 className="">Return to all Blogs</h6>
                    <div className="hidden md:block"><FaArrowRightLong /></div>
                </div>
            </NavLink>

            <hr className="w-full border-[1px] border-gray-200 mt-[20px]" />

            

        </div>

        
    </div>
  )
}

export default OneBlog