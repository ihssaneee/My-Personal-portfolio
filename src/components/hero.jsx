import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Hero(){


    return(
        <div className="lg:p-9 p-4 lg:flex-row flex flex-col  justify-between ">
         
            
           <div className="flex flex-col gap-3 ">
           <h1 className="text-white lg:text-7xl text-5xl font-bold ">Hi, I'm <span className="text-[#915EFF]">Ihssane En-Najy</span> </h1>
            <p className="text-white lg:text-4xl text-3xl " >Full Stack Developer</p>
            <p className="text-white lg:text-4xl typing  lg:pb-1 text-2xl " >Building innovative digital experiences</p>
           </div>
           <div className=" border">
            <img src="src\assets\my_picture.png" className="h-auto max-w-lg borer" alt="personal_picture"/>
           </div>
        </div>
    )
}