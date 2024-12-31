// import React from 'react'

interface iTestiCard {
  details: string,
  person: string,
}

const TestiCard:React.FC<iTestiCard> = ({details, person}) => {
  return (
    <div>
        <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">{details} <br /><span className="font-bold mt-[30px] text-blue-400">- {person}</span></h2>
    </div>
  )
}

export default TestiCard
