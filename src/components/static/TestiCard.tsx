// import React from 'react'

interface iTestiCard {
  details: string,
  person: string,
  post: string,
}

const TestiCard:React.FC<iTestiCard> = ({details, person, post}) => {
  return (
    <div>
        <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">{details} <br /><span className="font-bold mt-[30px] text-blue-400">- {person}</span> <br /><span className="font-bold mt-[30px] text-[11px] md:text-[13px] lg:text-[15px] text-white"> {post}</span></h2>
    </div>
  )
}

export default TestiCard
