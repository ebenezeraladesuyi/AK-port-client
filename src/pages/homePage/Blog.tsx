// import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
// import img1 from "../../assets/blog/Joseph_PotipharsWife-1.jpg";
// import img2 from "../../assets/blog/Beautiful_woman_prayer.jpg";
// import img3 from "../../assets/blog/PeoplePraying-768x420.jpg";
// import img4 from "../../assets/blog/Jesus-is-Calling1-768x480.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogCard } from "../../components";
// import { iBlog } from '../../types/interface';
// import axios from 'axios';
// import { url } from '../../api/Api';
// import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const BlogHome = () => {
    
     
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        // rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 1,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    // const [allBlogs, setAllBlogs] = React.useState<iBlog[]>([]);

    // const [isLoading, setIsLoading] = React.useState(false);


    // fetch all blogs
    // useEffect(() => {
    //     const fetchBlogs = async () => {
    //         setIsLoading(true);
    //         try {
    //             const response = await axios.get(`${url}/blog/allblogs`);
    //             const sortedBlogs = response.data && response.data.sort((a: iBlog, b: iBlog) => {
    //                 return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    //             });

    //             setAllBlogs(sortedBlogs);

    //             setIsLoading(false)
    //         } catch (error) {
    //             console.error("error getting all blogs:", error)

    //             setIsLoading(false);
    //         }
    //     };

    //     fetchBlogs()
    // }, []);

    // if (isLoading) {
    //     return 
    //         <div className='w-full flex justify-center items-center'>
    //             <DatasIsaLoading />
    //         </div>
    // }

    // const firstFiveBlogs = allBlogs.slice(0, 5);

  return (
    <div className="w-full bg-white bg-blog-bg bg-cover bg-center flex justify-center items-center py-[30px] overflow-hidden">
        <div className="w-[90%] flex flex-col gap-5">

            <div className="w-full text-[10px] md:text-[12px] flex items-center justify-between  text-blue-400">
                <h5 className="font-bold text-[14px] md:text-[18px] lg:text-[22px] ">Blogs</h5>

                <NavLink to="/blogs" >
                    <div className="flex gap-2 items-center text-orange-400 cursor-pointer animate-bounce ">
                        <h6 className="">See all Blogs</h6>
                        <div className="hidden md:block"><FaArrowRightLong /></div>
                    </div>
                </NavLink>
            </div>

           <div className="w-full fle justify-between items-center"> 
                {/* {isLoading ? ( 
                    <div className='w-full flex justify-center items-center'>
                        <DatasIsaLoading />
                    </div>
                ) : ( */}
                    <Slider {...settings}>
                    
                    {/* {firstFiveBlogs && firstFiveBlogs.map((blog: iBlog) => ( */}
                        {/* <div 
                            key={blog._id} 
                            className=" shadow-m rounded-m overflow-hidde "> */}
                            <BlogCard 
                                // pic={blog.blogImage}
                                // author={blog.author}
                                // title={blog.title.toUpperCase()}
                                // details={blog.details.slice(0, 174)}
                                // date={blog.createdAt.slice(0, 10)}
                            />

                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                        {/* </div> */}
                    {/* ))} */}

                    </Slider>
                {/* )} */}
            </div>

        </div>
    </div>
  )
}

export default BlogHome