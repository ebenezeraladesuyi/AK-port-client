// import React from 'react'

import akeem from "../../assets/images/hero/AkeenSuaraHero.png";

const About = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-cente items-center flex-col">
      <div className="w-full bg-testi-bg bg-cover bg-center h-[45vh] text-white font-bold flex justify-center items-center text-[30px]">
        ABOUT
      </div>

      <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between gap-5 bg-white text-black py-[30px] mt-[20px]">
        <div className="w-full md:w-[40%]">
          <img src={akeem} className="w-full" alt="" />
        </div>

        <div className="text-[15px] md:text-[18px] lg:text-[21px] text-justify w-full md:w-[55%]">
          <p className="mb-[10px]">
            <span className="font-bold ">AKEEM SUARA,</span> a Senior Software Engineer with over six years of experience crafting world-class software solutions in FinTech, banking, and beyond. Currently leading the Banking Team at top FinTech cmpany as an Engineering Manager, I specialize in designing scalable systems that drive efficiency and growth.
          </p>

          <p className="mb-[10px]">
            My journey began with a Bachelor’s degree in Computer Science from the Federal University of Technology Akure, followed by hands-on experience at industry-leading firms like TeamApt and Digicore. Over the years, I’ve honed my skills in software engineering, ethical hacking, and mentorship, achieving milestones like completing 3,000 mentorship minutes and hosting over 50 mentorship sessions with ADPList. Beyond my technical acumen, I’m passionate about sharing knowledge. As a TEDx speaker and global mentor, I’ve inspired aspiring technologists to reach their potential. My dedication to innovation and coaching has earned me recognition in the tech community as a leader and mentor.
          </p>

          <p>
            This portfolio showcases my work, projects, and achievements. Whether you’re here to explore my services or learn more about my contributions to the tech world, I invite you to connect and join me in building impactful solutions for a better tomorrow.
          </p>
          
        </div>
      </div>

      <hr className="w-[90%] border-[1px] border-gray-200 mt-[20px] mb-[30px]" />
    </div>
  )
}

export default About