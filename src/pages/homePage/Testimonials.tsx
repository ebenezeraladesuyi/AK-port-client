
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaUser } from "react-icons/fa6";
import { TestiCard } from "../../components";
// import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";
// import SlideInComponent from "../../components/static/onScroll/SlideIn";
import ts1 from "../../assets/images/testimonials/ts1.jpeg";
import ts2 from "../../assets/images/testimonials/ts2.jpeg";
import ts3 from "../../assets/images/testimonials/ts3.jpeg";
import ts4 from "../../assets/images/testimonials/ts4.jpeg";
import ts5 from "../../assets/images/testimonials/ts5.jpeg";


const Testimonials = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
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

                    <img className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] absolute rounded-full top-[20px] left-[20px]" src={ts2} alt="" />
                    <img className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] absolute rounded-full top-[20px] right-[20px]" src={ts3} alt="" />
                    <img className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] absolute rounded-full bottom-[0px] left-[40px]" src={ts5} alt="" />
                    <img className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] absolute rounded-full bottom-[0px] right-[40px]" src={ts4} alt="" />
                </div>

                <Slider {...settings} className="w-[95%] px-10 mt-[10px] ml-[6px] md:w-[50%] lg:w-[60%]" >


                    <TestiCard 
                      details="Akeem Suara is one of the fastest learners I’ve had the pleasure of working with. His natural leadership shines in any technical team setting, driven by his remarkable ability to tackle challenges head-on. One of Akeem's standout strengths is his commitment to knowledge sharing—he thrives on brainstorming and collaborative learning experiences. Above all, Akeem is not only an exceptional engineer but also a dependable colleague and friend you can always count on."
                      person="Magezi Arthur"
                      post="Senior Specialist, Applications Development and Support, Bank of Kuwait"
                    />

                    <TestiCard 
                      details="I want to take a moment to express my heartfelt gratitude for the little time we’ve spent together. Your Lectures and has been truly thought-provoking and impactful. Each session has motivated me to strive for excellence, think critically, and be different. Your ability to simplify complex ideas and make them relatable has been incredibly inspiring. Beyond the knowledge you've shared, your encouragement has boosted my confidence and fueled my ambition to achieve my goals. Thank you for being such an exceptional mentor. The lessons I’ve learned from you will undoubtedly shape my journey in meaningful ways."
                      person="Oluwabukunmi Ogunremi"
                      post="Federal University, Oye-Ekiti, Nigeria"
                    />

                    <TestiCard 
                      details="'Mentor with difference Learning under Mr Akeem was one of the  best things  that happened to me in 2024 he gave the confidence and motivation I needed to excel in my tech career the way he breaks down problems  and make example of things around me to teach me he’s an amazing teacher now I’m better very good in JavaScript both backend and frontend all thanks to you sir i bless the name of the lord the I texted you on adplist. Thank you God bless you sir"
                      person="Eliphus Godsave"
                      post="Software Engineer"
                    />

                    <TestiCard 
                      details="Akeem is an exceptionally skilled and experienced Software Engineer. His attentiveness and ability to grasp project requirements during initial meetings are remarkable. From my experience, he quickly understands and envisions the desired outcomes, providing valuable professional advice on the best approaches to achieve them. He is highly accessible for follow-ups and additional requirements, ensuring a seamless collaboration process. Akeem recently consulted on automating complex datasets that had been challenging for months. In no time, he delivered a comprehensive solution, complete with straightforward instructions for implementation. His expertise and efficiency are truly commendable—Akeem is a rare talent and a great asset."
                      person="Temitope Okunlola"
                      post="Telecoms Consultant"
                    />

                    <TestiCard 
                      details="I have had the privilege of working alongside Akeem Suara on the Wellness Management System as a Service for several months. Akeem's leadership and mastery of system architecture and design patterns has been truly inspiring, significantly enhancing Livwell's system functionality and scalability. His comprehensive understanding of core system lifecycles is exemplary, and I continue to learn valuable lessons about code implementation and best practices from him. Akeem possesses the kind of technical expertise and leadership qualities that every software engineer should aspire to develop."
                      person="Peter Abraham"
                      post="Backend Engineer, GoLivWell"
                    />

                    <TestiCard 
                      details="Mr. Akeem Suara is an exceptional mentor and leader whose guidance has profoundly impacted my career journey. His ability to break down complex technical concepts into actionable insights reflects his deep expertise and passion for seeing the younger ones grow. Beyond technical knowledge, Mr. Akeem fosters a growth mindset, encouraging innovation, resilience, and excellence in every aspect of work. He creates an environment where learning thrives, consistently inspiring those he mentors to aim higher and achieve their goals. His dedication to empowering individuals and making a positive impact is truly admirable. I am incredibly grateful for his mentorship, which has not only enhanced my skills but also instilled in me the confidence to tackle challenges and embrace opportunities."
                      person="Aladesuyi Ebenezer"
                      post="Volatic Academy"
                    />

                </Slider>
            </div>
        </div>
          
      </div>
    // </SlideInComponent>
  )
}

export default Testimonials