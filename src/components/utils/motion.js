import { duration } from "@mui/material";
import { delay } from "framer-motion";

export const slideIn = (direction,duration) => {
  return {
    hidden: {
      x: direction==="right"?'100%':direction==="left"?"-100%":0, // Start off-screen
      opacity: 0, // Start fully transparent
    },
    visible: {
      x: 0, // Slide into view
      opacity: 1, // Fade in
      transition: {
        duration: duration, // Animation duration
      },
    },
    viewport:{
      once:true
    }
  };
};
export const fadeDown=()=>{
  return{
    hidden:{
      opacity:0,
      y:'-23px'
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:'spring',
        duration:2
      }
    },
   
  }
}