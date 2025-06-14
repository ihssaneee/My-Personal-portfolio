import React from "react";

export default function Hero(){


    return(
        <div className="lg:p-9 p-4 lg:flex-row  flex flex-col gap-24     ">
         
            
           <div className="flex flex-col gap-4  ">
         
           <h1 className="text-white lg:text-7xl text-5xl font-bold ">Hi, I'm <span className="text-[#915EFF]">Ihssane En-Najy</span> </h1>
            <p className="text-white lg:text-4xl text-3xl " >Full Stack Developer</p>
            <p className="text-white xl:text-4xl typing md:text-[24px] lg:pb-1 text-[19px]  " >Building innovative digital experiences</p>
           </div>
           <div className=" -mt-14 ">
            <img src="/assets/personalPicture.png" className="h-auto xl:max-w-lg max-w-xs mx-auto  shadow-purple-950 shadow-md  border-b-2 border-l-2 border-r-1 relative  border-t-0 rounded-4xl  px-3 lg:outline-2  xl:-translate-x-2.5 border-purple-950  mix-blend-screen z-3 " alt="personal_picture"/>
           </div>
        </div>
    )
}