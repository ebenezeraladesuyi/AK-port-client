import React from 'react'

import contact from "../../assets/images/contact/contact.svg";
import { iMail } from "../../types/interface";
import axios from 'axios';
import { url } from '../../utils/Api';
import { DatasIsaLoading } from '../../pages/isLoading/DataIsLoading';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = React.useState<iMail>({
      name:"",
      email:"",
      content:"",
    })

    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>()

  // To subscribe
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const mail = await axios.post(`${url}/mail/createmail`, formData)

            console.log("mail sent", mail.data);

            // reset formData
            setFormData({
              name:"",
              email:"",
              content:"",
            })
            setError(null)

            if (mail.data.message === "Message sent successfully") {
                Swal.fire({
                  title: "Email sent successfully",
                //   text: "Thank You for registering. We will reach out to you via email or call.",
                  icon: "success",
                })
              } else {
                Swal.fire({
                    title: "Error while send email. Please, try again",
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }



  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-hero-bg bg-cover bg-center py-[30px]">
      <div className="w-[90%] flex flex-col md:flex-row md:justify-between justify-center items-cente mt-[110px] gap-6">

        <div className="w-full md:w-[50%] lg:w-[45%] bg-white p-1 flex justify-center items-center lg:p-3  h-[250px] md:h-[350px] lg:h-[420px] rounded-[10px]">
          <img className="" src={contact} alt="" />
        </div>

        <div className="flex flex-col gap-4 w-full  md:w-[50%] lg:w-[50%]">
          <h1 className="text-[20px] font-bold text-white text-center md:text-left">Contact Us</h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 text-white">
            <input className="w-full h-[45px] pl-4 border-white border-[1px] rounded-[7px] bg-transparent" type="text" placeholder="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            />

            <input className="w-full h-[45px] pl-4 border-white border-[1px] rounded-[7px] bg-transparent"  type="email" placeholder="Email"  
            name="email"
            value={formData.email}
            onChange={handleChange}
            />

            <textarea className="w-full h-[100px] pl-4 border-white border-[1px] rounded-[7px] bg-transparent pt-3"  placeholder="Your Content"  
            name="content"
            value={formData.content}
            onChange={handleChange}
            />

            { loading? (
                <div className="flex justify-center items-center">
                    <DatasIsaLoading />
                </div>
            ) : (
                <button type='submit' className="animate-pulse text-blue-400">Submit</button>
            )}

            {error && <p className='text-[7px]'>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact