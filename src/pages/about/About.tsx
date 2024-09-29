// import React from 'react'

import akeem from "../../assets/images/hero/AkeenSuaraHero.png";

const About = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-cente items-center flex-col">
      <div className="w-full bg-testi-bg bg-cover bg-center h-[45vh] text-white font-bold flex justify-center items-center text-[30px]">
        ABOUT
      </div>

      <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between gap-5 bg-white py-[30px] mt-[20px]">
        <div className="w-full md:w-[40%]">
          <img src={akeem} className="w-full" alt="" />
        </div>

        <div className="text-[15px] md:text-[18px] lg:text-[21px] text-justify w-full md:w-[55%]">
          <p className="mb-[10px]">
            <span className="font-bold ">AKEEM SUARA</span> is lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et animi architecto, quasi blanditiis veritatis, impedit, nam magnam debitis ipsum tenetur. Dicta facere commodi rerum reiciendis iusto minima! Alias eius adipisci sapiente ad eum laudantium earum ex delectus corporis doloremque iste eaque error, reiciendis omnis eveniet laboriosam vel labore corrupti, maiores, porro repellat? Veniam esse modi a rerum illum expedita. Illum officia quam porro sint quod harum sunt corrupti, nesciunt nulla dolorem temporibus dignissimos laborum iusto dolorum quas itaque cumque error neque atque maiores veniam architecto totam asperiores sequi? Dicta, doloribus porro dolor voluptates repudiandae ex minima libero numquam eius?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et autem expedita! Temporibus perspiciatis dignissimos, omnis aliquid corporis iure voluptatum! Harum suscipit quam enim laudantium ex reprehenderit, fugiat ipsam mollitia nam architecto error explicabo nemo velit obcaecati dolorem quaerat. Consectetur eaque quia suscipit magnam sit pariatur et aperiam sapiente, neque, laboriosam optio, nemo temporibus. Deserunt distinctio a officia perspiciatis id itaque voluptatum quidem dolorum similique, et tenetur earum reprehenderit vero consequatur, hic vitae nisi architecto, ullam accusantium ipsa deleniti fugit nulla? Ullam, laborum eos est officiis quod fugiat sequi? Expedita ad autem fugit nulla esse optio ipsam exercitationem voluptas magnam.
          </p>

          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam quibusdam, omnis cupiditate iure tempore porro veritatis mollitia quo dolores! Iste mollitia amet cum explicabo laborum quidem in quis impedit minima incidunt eos obcaecati, enim est illo eum eius libero nihil modi commodi fugit quibusdam. Modi dicta numquam quo sed mollitia quam laudantium maiores, assumenda nam. Reiciendis odio amet et deserunt molestias voluptatum sunt error, similique beatae accusamus minima, blanditiis quidem corporis a vel nulla mollitia est veniam soluta. Amet, harum iure. Nemo sunt deserunt magnam adipisci quis voluptatibus blanditiis et! Officia, ea aliquid! Non ullam ipsum dicta quisquam dolorem?
          </p> */}
          
        </div>
      </div>

      <hr className="w-[90%] border-[1px] border-gray-200 mt-[20px] mb-[30px]" />
    </div>
  )
}

export default About