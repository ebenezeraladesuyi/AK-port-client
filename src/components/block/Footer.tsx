import React from 'react'


import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSlack } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { iSubscribe } from '../../types/interface';
import axios from 'axios';
import { url } from '../../utils/Api';
// import { toast } from 'react-toastify';
import { DatasIsaLoading } from '../../pages/isLoading/DataIsLoading';
import Swal from 'sweetalert2';

const Footer = () => {

    const [formData, setFormData] = React.useState<iSubscribe>({
        email:""
    })

    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState<string |  null>()

    // To subscribe
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
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
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }


  return (
    <div className="w-full bg-footer-bg bg-center bg-cover min-h-[50vh] md:min-h-[40vh] flex flex-col justify-center items-center gap-6 py-[30px]">
        <div className="w-[90%] flex flex-col gap-5 md:gap-6">
            <h1 className="text-[25px] font-bold text-white text-center">SIGN UP FOR MY MONTHLY NEWSLETTER</h1>
            
            <form onSubmit={handleSubmit} className=" flex flex-col md:flex-row gap-3 justify-center">
                {/* <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-bold text-white">Email</h2> */}
                    <input type="email" className=" rounded-md bg-[#353535] h-[45px] w-[]full md:w-[350px] outline-none text-white pl-[10px]" placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                {/* </div> */}

                { loading? (
                    <div className="flex justify-center items-center">
                        <DatasIsaLoading />
                    </div>
                ) : (
                    <button type="submit" className="h-[45px] animate-pulse text-blue-400">Subscribe</button>     
                )}

                

                {error && <p className='text-[7px]'>{error}</p>}
            </form>
        </div>

        <hr className="border-[1px] border-[#e4e4e4bc] w-[70%]" />

        <div className="flex flex-wrap w-[70%] justify-center gap-3">
            <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaLinkedinIn />
            </a> 
            
            <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaStackOverflow />
            </a>
            <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaTwitter />
            </a>
            <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaSlack />
            </a>
            <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaThreads />
            </a>
            <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaFacebook />
            </a>
            <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaInstagram />
            </a>
        </div>

        <div className=" w-full flex items-center justify-center z-20">
            <h5 className="text-[12px] md:text-[15px] text-white w-[90%] text-center">
            Copyright &#169; 2024 Akeem Suara
            </h5>
        </div>
    </div>
  )
}

export default Footer;