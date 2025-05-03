import React, { useState } from "react";
import HologramCanvas from "./canvas/earthCanvas";
import emailjs from "@emailjs/browser";
import {BeatLoader} from 'react-spinners';
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";

const Contact = () => {
  const inputStyle="bg-[#341846] p-3 rounded-md focus:ring-0  focus:outline-none form_input"
  const divStyle="flex flex-col gap-2 text-white my-4"
  const serviceId=import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey=import.meta.env.VITE_EMAILJS_USER_ID;
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  });
  const [error,setError]=useState(null);
  const [success,setSuccess]=useState(null);
  const handleChange=(e)=>{
   const {name,value}=e.target
   setFormData({
    ...formData,
    [name]:value
   })
  }
  const [loading,setLoading]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      emailjs.send(serviceId,templateId,{
        name:formData.name,
        to_name:"Ihssane En-najy",
        to_email:"najiihsane22@gmail.com",
        email:formData.email,
        message:formData.message,
      },publicKey);
      console.log(formData);
      setSuccess("Your email was sent successfully.");
      setError(null);
      setFormData({
        name:"",
        email:"",
        message:"",
      });
      
      console.log('email was sent successfully.');
    }
    catch(error){
      console.error('email could not be sent ',error);
      setError("Sorry your email could not be sent");
    }
    finally{
      setLoading(false);
    }

  }
  return (
    <div className=" overflow-hidden xl:gap-1 gap-24  flex xl:flex-row w-full py-24 flex-col-reverse ">
      
      <div className="flex flex-col gap-2 text-white z-10 ">
      <div className=" bg-[#10102C] xl:ml-14  font-poppins w-full rounded-2xl border-2 border-[#A18398] shadow-lg shadow-[#A18398]">
          <div className="m-4">
          <p className="text-secondary p-3 text-lg">GET IN TOUCH</p>
          <h3 className="text-6xl font-bold p-3 text-white">Contact</h3>
          </div>
        <form className=" lg:min-w-md max-w- m-8  " onSubmit={handleSubmit}>
          <div className={divStyle}>
            <label className=" "> Your Name</label>
            <input type="text" onChange={handleChange} className={inputStyle} placeholder="What's your name?" value={formData.name} name="name"/>
          </div>
          <div className={divStyle}>
            <label> Your Email</label>
            <input type="email" className={inputStyle} onChange={handleChange} placeholder="What's your email?" value={formData.email} name='email' />
          </div>
          <div className={divStyle}>
            <label> Your Message</label>
            <textarea className={inputStyle} onChange={handleChange}  rows={6} placeholder="What do you want to say ?" value={formData.message} name="message" />
          </div>
          <div className="my-8">
            <button disabled={loading?true:false} className="bg-[#341846] cursor-pointer  p-3 px-9 rounded-lg shadow-md shadow-neutral-950 hover:scale-120 transition-all ease-in-out duration-350">Send</button>
          </div>
          <div className="m-4">
            {loading?
          <BeatLoader color="white" />  :
          success?<span className="text-green-500 text-lg" >{success}</span>:
          error?<span className=" text-red-500 text-lg">{error}</span>:
          null
          }
          </div>

        </form>
      </div>
      </div>
        <motion.div variants={slideIn('right',3)} initial="hidden" whileInView="visible"  viewport={{ once: true }} className="  lg:w-full flex-[1]" >
     
        <HologramCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;