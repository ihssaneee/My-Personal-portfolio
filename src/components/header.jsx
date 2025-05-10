import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import logo from "/assets/logo1.webp";
import github from "/assets/github.png";
import linkedin from "/assets/linkedin.svg";

export default function Header({scrollToSection,...refs}){
 const listItemStyle="hover:text-white cursor-pointer hover:underline lg:p-0 px-3 py-2 border-b-0.5 ";
const [isToggled,setIsToggled]=useState(false);
    const handleClick=()=>{
        setIsToggled(!isToggled);
    }
   
    return(
      
        <nav className="flex bg-gradient-custom  justify-between font-poppins gap-7 text-lg p-7 mb-4 relative z-[9999] ">
            
                <div className="lg:ml-14  ml-3 flex items-center justify-center gap-7 " >
                   <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={()=>window.scrollTo({ top:0,behavior:'smooth'})}>
                   <img src={logo} className="w-9 h-9" />
                   <h2 className="font-medium text-white text-xl text-wrap">Ihssane  <span className="lg:inline hidden">| Full Stack Developer</span></h2>
                   </div>
                   <div className="flex gap-4 items-center justify-center">
                 <a href="https://www.linkedin.com/in/ihsane-naji-aa1397199/" target="_blank"><img src={linkedin} al="linkedin" className="w-9 h-9" /></a>  
                  <a href="https://github.com/ihssaneee" target="_blank" ><img src={github} alt="github" className="w-9 h-9" /></a> 
                    
                </div>
                </div>
                
                <div className={`${isToggled?"block":""} text-white lg:hidden relative mr-1 `}>
                    <MenuIcon className="" fontSize="large" onClick={handleClick} />
                </div>
                <ul className={`list-none text-neutral-300 lg:gap-7 lg:flex-row lg:flex ${isToggled?"flex pb-2 flex-col bg-gradient-custom border-b-2  pl-6 pt-4 rounded-b-4xl   bg-opacity-90 z-10  w-full absolute top-20 left-0 right-0":"hidden"} `}>
               {/* <ul className="list-none lg:flex-row  gap-7 text-neutral-300 flex-col top-14 hidden lg:flex  "> */}


                <li className={listItemStyle} onClick={()=>scrollToSection(refs.aboutRef)} >About</li>
                    <li className={listItemStyle} onClick={()=>scrollToSection(refs.skillsRef)}>Skills</li>
                    <li className={listItemStyle} onClick={()=>scrollToSection(refs.projectsRef)}>Projects</li>
                    <li className={listItemStyle} onClick={()=>scrollToSection(refs.contactRef)}>Contact</li>
                   
               </ul>
               
            </nav>
        
    )
}