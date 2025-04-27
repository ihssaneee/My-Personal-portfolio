import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
export default function Header({scrollToSection,aboutRef,skillsRef,projectsRef}){
 const listItemStyle="hover:text-white cursor-pointer hover:underline lg:p-0 px-3 py-2 border-b-0.5 ";
const [isToggled,setIsToggled]=useState(false);
    const handleClick=()=>{
        setIsToggled(!isToggled);
    }
   
    return(
      
        <nav className="flex bg-gradient-custom justify-between font-poppins gap-7 text-lg p-7 mb-4 relative z-[9999] ">
            
                <div className="lg:ml-14 text-wrap ml-3 ">
                    <h2 className="font-medium text-white text-xl ">Ihssane | Full Stack Developer</h2>
                </div>
                <div className={`${isToggled?"block":""} text-white lg:hidden relative mr-1 `}>
                    <MenuIcon className="" fontSize="large" onClick={handleClick} />
                </div>
                <ul className={`list-none text-neutral-300 lg:gap-7 lg:flex-row lg:flex ${isToggled?"flex pb-2 flex-col bg-gradient-custom border-b-2 border-t-1 rounded-b-4xl   bg-opacity-90 z-10  w-full absolute top-20 left-0 right-0":"hidden"} `}>
               {/* <ul className="list-none lg:flex-row  gap-7 text-neutral-300 flex-col top-14 hidden lg:flex  "> */}


                <li className={listItemStyle} onClick={()=>scrollToSection(aboutRef)} >About</li>
                    <li className={listItemStyle} onClick={()=>scrollToSection(skillsRef)}>Skills</li>
                    <li className={listItemStyle} onClick={()=>scrollToSection(projectsRef)}>Projects</li>
                    <li className={listItemStyle}>Contact</li>
                    <li className={listItemStyle}>Resume</li>
               </ul>
               
            </nav>
        
    )
}