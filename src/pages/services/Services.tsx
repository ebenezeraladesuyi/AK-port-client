// import React from 'react'

import ServicesCard from "../../components/static/ServicesCard"
import software from "../../assets/images/services/software.png";
import mentor from "../../assets/images/services/mentorship.png";
import ted from "../../assets/images/services/tedTalk.png";
import consult from "../../assets/images/services/consult.png";
import ServicesCard2 from "../../components/static/ServiceCard2";

const Services = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-cente items-center flex-col">
      <div className="w-full bg-testi-bg bg-cover bg-center h-[45vh] text-white font-bold flex justify-center items-center text-[30px]">
        SERVICES
      </div>

      <div className="py-[30px] w-[90%] flex flex-col gap-6 justfy-center items-center">
        <ServicesCard 
          icon={software}
          title="SOFTWARE ENGINEERING"
          details="As a dedicated software engineer, I am passionate about creating reliable, scalable, and innovative software solutions that address real-world challenges. With expertise in various programming languages, frameworks, and modern technologies, I strive to build high-performance applications that deliver both functionality and user satisfaction. My work focuses on clean, maintainable code, user-centric design, and a commitment to delivering software that not only meets client expectations but also contributes to their overall business goals. Whether it’s front-end development, back-end architecture, or full-stack solutions, I take pride in crafting software that drives efficiency and fosters growth."
        />

        <hr className="border-[1px] w-full border-gray-300 mt-[20px] mb-[20px]" />

        
        <ServicesCard2 
          icon={mentor}
          title="MENTORSHIP"
          details="I am deeply committed to nurturing the next generation of tech talent. Through mentorship, I offer guidance, support, and practical advice to aspiring developers and entrepreneurs. I help them navigate their career paths, overcome technical challenges, and build the confidence they need to succeed in the industry.."
        />

        <hr className="border-[1px] w-full border-gray-300 mt-[20px] mb-[20px]" />
        
        <ServicesCard 
          icon={consult}
          title="CONSULTANCY"
          details="With a strong background in tech and business, I provide strategic consultancy services that help businesses maximize their use of technology. I work closely with organizations to understand their unique challenges and opportunities, offering tailored insights and practical solutions. Whether optimizing existing systems or developing new digital strategies, my goal is to enhance operational efficiency, streamline processes, and drive innovation. By staying ahead of industry trends, I help companies adapt to the fast-evolving tech landscape and remain competitive."
        />

        <hr className="border-[1px] w-full border-gray-300 mt-[20px] mb-[20px]" />

      
        <ServicesCard2 
          icon={ted}
          title="TEDx TALK"
          details="As a speaker, I have delivered TED Talks focused on the intersection of technology, innovation, and human potential. I believe that technology, when used thoughtfully, can be a powerful tool for solving global challenges and improving lives. My talks are designed to inspire audiences to think creatively and embrace the possibilities of the digital world, while also encouraging a deeper understanding of the ethical and social implications of technological advancement."
        />
        
        <hr className="border-[1px] w-full border-gray-300 mt-[20px] mb-[20px]" />
      </div>
    </div>
  )
}

export default Services