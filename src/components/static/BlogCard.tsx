/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaRegCalendarCheck } from "react-icons/fa";
import image from "../../assets/images/blog/blog.png";

interface iBlogCard {
    pic? : any;
    author?: string;
    title?: string;
    details?: string;
    date? : string;
}

const BlogCard:React.FC<iBlogCard> = (
    // {pic, author, title, details, date}
    ) => {
  return (
    <div className='w-[275px] h-[400px] bg-whit flex flex-col gap-2  mr-[6px ml-[6px shadow-m rounded-md overflow-hidden mb-[10px]'>
        <div className='w-full h-[50%] shadow-md rounded-md bg-[#fff]'>
            <img className='h-full w-full' src={image} alt="" />
        </div>

        <div className='p-4 flex flex-col gap-2 justify-between item'>
            {/* <h6 className='w-[150px] h-[23px] rounded-[15px] bg-blue-400 text-white text-[12px] flex items-center justify-center'>
                A.S.
                {/* {author} */}
            {/* </h6> */}

            <h5 className='text-[13px] font-bold  bg-[#3c3c3c] px-2 py-1 text-[#fff] rounded-md'>
                Building For Posterity
                {/* {title} */}
            </h5>

            <h6 className='text-[10px] text-justify text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis inventore repudiandae minima sint, itaque omnis unde dolores, alias illum ab optio aperiam cum rem nam.
                {/* {details}... */}
            </h6>

            <div className='flex items-center justify-between'>
                <h5 className='text-[10px] text-white flex items-center gap-1'>
                    {/* October 24, 2020 */}
                    <span><FaRegCalendarCheck /></span>
                    {/* {date} */}
                    September 22, 2024
                </h5>

                <NavLink to="/allblogs">
                    <h5 className='text-[10px] flex items-center gap-2 text-blue-400'>Read More <span><FaArrowRightLong /></span></h5>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default BlogCard