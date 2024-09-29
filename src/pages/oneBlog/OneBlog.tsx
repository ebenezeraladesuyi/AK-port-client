// import React from 'react'

import { NavLink } from "react-router-dom";
// import pic1 from "../../assets/blog/Jesus-is-Calling1-768x480.jpg";
import {FaArrowRightLong} from "react-icons/fa6"
// import { useEffect, useState } from "react";
// import { iBlog } from "../../types/interface";
// import axios from "axios";
// import { url } from "../../api/Api";
// import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import lean from "../../assets/images/blog/lean2.png";


const OneBlog = () => {

    // const { id } = useParams<{id: string}>();
    // const [blog, setBlog] = useState<iBlog | null>(null);
    // const [loading, setLoading] = useState(false);


    // useEffect(() => {
    //     const fetchBLog = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await axios.get(`${url}/blog/getoneblog/${id}`);

    //             setBlog(response.data);
                
    //             setLoading(false)

    //         } catch (error) {
    //             console.error("error getting one blog:", error)
 
    //             setLoading(false)
    //         }
    //     };

    //     fetchBLog();
    // }, [id]);

    // if (loading) {
    //     return 
    //     <div className="w-full flex justify-center items-center">
    //         <DatasIsaLoading />
    //     </div>;
    // }

    // if (!blog) {
    //     return 
    //         <div className="w-full justify-center items-center text-[25px] font-bold">
    //             Blog Not Found
    //         </div>
    // }


  return (
    <div className="w-full flex justify-center items-center bg-black py-[30px]">
        <div className="w-[90%] mt-[80px] md:mt-[100px] flex flex-col gap-4 relative bg-white p-6">
            <NavLink to="/blogs">
                <h6 className="bg-[#ec0e0e] p-1 px-2 text-white text-[13px] w-[100px] text-center flex items-center justify-center gap-2"><span><FaArrowLeftLong /></span>Blog</h6>
            </NavLink>

            <hr className="w-full border-[1px] border-gray-200 mb-[20px]" />

            <div className="w-full flex flex-col gap-3">
                <h5 className="font-bold text-[22px] md:text-[27px] lg:text-[33px] ">
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
                        28/09/2024
                    <span className='text-[12px]'><IoTimeOutline /></span>
                        {/* {blog?.createdAt.slice(11, 16)} */}
                        08:14AM
                    </h5>
                </div>

                <div className="w-full lg:w-[65%] border-[1px] border-gray-200 rounded-[6px]">
                    {/* <img className="w-full" src={blog?.blogImage} alt={blog?.title} /> */}
                    <img className="w-full" src={lean} alt="" />
                </div>

                <h5 className="text-[11px] md:text-[13px] lg:text-[14px] text-justify w-full lg:w-[70%]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, corrupti! Minima ab placeat provident inventore quidem rerum aliquid dolores debitis? Ratione, provident? Accusamus incidunt optio assumenda aut id aperiam veritatis, delectus itaque. Repellendus facere sunt modi, hic sapiente aspernatur aperiam. Fugiat in aspernatur officiis velit obcaecati minus dolores repudiandae illum, deserunt architecto aliquam commodi facilis, distinctio aliquid recusandae molestias non, iure esse ex unde dolorum nobis! Officiis sunt eaque, magnam ut optio natus rerum asperiores ea soluta, doloremque maiores odit, nesciunt ipsum suscipit voluptatum porro eligendi dignissimos perspiciatis assumenda nisi laudantium molestiae. Debitis sed maxime officia distinctio dolorum assumenda alias voluptatibus tenetur, corrupti ducimus. Dicta recusandae quam earum incidunt a dolorum, ratione odit? Ipsa ut culpa esse numquam saepe voluptatibus cum iure velit at! Iusto error obcaecati repellat quia aliquam atque, assumenda, unde non hic ratione veritatis? Architecto magni qui, dignissimos aliquid dolores ipsum repellendus odit culpa quia voluptas perspiciatis pariatur tempore modi, vitae in ad amet ea animi maxime quis rerum? Ea quae aspernatur possimus molestiae odio. Voluptatum accusamus obcaecati deleniti, dolores, aperiam voluptate velit eum nam natus iusto suscipit non quaerat assumenda quidem fugiat, nisi blanditiis consectetur odio maxime dicta! Enim incidunt nihil tempora laborum sit odit similique numquam dolore, quasi unde doloribus aspernatur ipsam at nobis distinctio veritatis nisi rerum perferendis eos! Dignissimos illo, assumenda quos magni, iusto, repellendus earum esse quas cupiditate eaque atque ea quibusdam nam fuga voluptate doloremque maiores commodi deserunt quasi neque odit ad delectus veniam animi! Esse asperiores minima aliquam at ab, voluptas recusandae soluta magnam totam dolores a delectus quisquam, possimus, animi ipsum aperiam quam laboriosam iusto exercitationem consectetur alias? Dicta ipsam fugit nobis sunt non atque adipisci aperiam laborum voluptas quisquam ut, sapiente dignissimos, obcaecati id esse, inventore beatae ea eaque repellendus culpa impedit exercitationem. Id hic non odio aspernatur.
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

            

            {/* <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-[172px] border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
                <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

                <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6>
                <h6 className="text-[14px] text-center flex flex-col">Sunday Service: <span className="text-[#b6f4d1]">10:00am - 12:00Noon</span></h6>
                <h6 className="text-[14px] text-center">Tuesday: Digging Deep/Faith Clinic: <span className="text-[#b6f4d1]">7:00pm - 9:00pm</span></h6>
            </div> */}

        </div>

        
    </div>
  )
}

export default OneBlog