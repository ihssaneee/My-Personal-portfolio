import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ParticlesBackground from "./ParticlesBackground";
export default function Hero(){


    return(
        <div className="lg:p-9 p-4 lg:flex-row flex flex-col gap-24   justify-between  ">
         
            
           <div className="flex flex-col gap-3 ">
         
           <h1 className="text-white lg:text-7xl text-5xl font-bold ">Hi, I'm <span className="text-[#915EFF]">Ihssane En-Najy</span> </h1>
            <p className="text-white lg:text-4xl text-3xl " >Full Stack Developer</p>
            <p className="text-white lg:text-4xl typing  lg:pb-1 text-[21px] " >Building innovative digital experiences</p>
           </div>
           <div className=" -mt-14 ">
            <img src="src/assets/TP1_56_94_copie-removebg-preview.png" className="h-auto max-w-lg  shadow-purple-950 shadow-md outline-2 border-2 border-t-0 rounded-4xl  px-3   -translate-x-2.5 border-purple-950  mix-blend-screen  " alt="personal_picture"/>
           </div>
        </div>
    )
}