
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaUser } from "react-icons/fa6";
import { TestiCard } from "../../components";
// import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";
// import SlideInComponent from "../../components/static/onScroll/SlideIn";
import ts1 from "../../assets/images/testimonials/ts1.jpg";
import ts2 from "../../assets/images/testimonials/ts2.jpg";
import ts3 from "../../assets/images/testimonials/ts3.jpg";
import ts4 from "../../assets/images/testimonials/ts4.jpg";
import ts5 from "../../assets/images/testimonials/ts5.jpg";


const Testimonials = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 770,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidestoShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    }


  return (
    // <SlideInComponent>
    <div id="testimonies" className="w-full min-h-[65vh] bg-testi-bg bg-cover bg-cente overflow-hidden text-white flex justify-center items-cente  py-[30px]">

        <div className="w-[90%] flex flex-col gap-5">
          <h5 className="text-[20px] md:text-[30px] text-blue-400 font-bold  text-center  mb-[25px]">TESTIMONIES</h5>

          {/* <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What People Say About Us..</h3> */}
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between gap-5">
                <div className="relative w-full md:w-[40%] lg:w-[30%] flex justify-center items-center ">
                    <div className="h-[150px] lg:w-[230px] lg:h-[230px] w-[150px] border-[2px]  rounded-full mt-[20px overflow-hidden">
                        <img src={ts1} className="w-full overflow-hidden" alt="" />
                    </div>

                    <img className="w-[30px] h-[30px] absolute rounded-full top-[20px] left-[20px]" src={ts2} alt="" />
                    <img className="w-[30px] h-[30px] absolute rounded-full top-[20px] right-[20px]" src={ts3} alt="" />
                    <img className="w-[30px] h-[30px] absolute rounded-full bottom-[0px] left-[40px]" src={ts5} alt="" />
                    <img className="w-[30px] h-[30px] absolute rounded-full bottom-[0px] right-[40px]" src={ts4} alt="" />
                </div>

                <Slider {...settings} className="w-[95%] px-10 mt-[10px] ml-[6px] md:w-[50%] lg:w-[60%]" >

                    {/* <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">"Remarkable experience! I got a Sitting Room Chairs from Divine Great last year, and it was dope. No stress, No hypertension. I was home, and my products got delivered to me. Highly recommended!" <br /><span className="font-bold mt-[30px] text-[#3e4095]">- ADEOLA MICHEAL</span></h2> */}

                    {/* <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">"They have this strong sense of customer connection. You just feel like you are transacting with your long-time partner. I've done several business with them and all turned out well. A reliable brand to do business with." <br /><span className="font-bold text-[#3e4095] mt-[30px]">- UCHE COLLIN</span></h2> */}

                    {/* <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center w-[90%] md:w-[70%] lg:w-[60%]">"Incredible business brand! First time I did business with Divine Great, I thought they were like my previous business people. After I purchased my first house, they delivered all my interior decoration products, and now, after more business transaction, I can say, you can trust Divine Great." <br /><span className="font-bold mt-[30px] text-[#3e4095]">- IBRAHIM ABDULLAHI</span></h2> */}

                    <TestiCard />
                    <TestiCard />
                    <TestiCard />

                </Slider>
            </div>
        </div>
          
      </div>
    // </SlideInComponent>
  )
}

export default Testimonials