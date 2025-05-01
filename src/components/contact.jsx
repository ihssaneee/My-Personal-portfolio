import React from "react";
import HologramCanvas from "./canvas/earthCanvas";
import Tilt from 'react-parallax-tilt';
const Contact = () => {
  const inputStyle="bg-[#341846] p-3 rounded-md focus:ring-0  focus:outline-none"
  const divStyle="flex flex-col gap-2 text-white my-4"
  return (
    <div className=" overflow-hidden   flex lg:flex-row w-full py-8 flex-col-reverse ">
      <div className="flex flex-col gap-2 text-white">
      <div className=" bg-[#10102C] lg:ml-14 font-poppins w-full rounded-2xl border-2 border-[#A18398] shadow-lg shadow-[#A18398]">
          <div className="m-4">
          <p className="text-secondary p-3 text-lg">GET IN TOUCH</p>
          <h3 className="text-6xl font-bold p-3 text-white">Contact</h3>
          </div>
        <form className=" lg:min-w-md max-w- m-8  ">
          <div className={divStyle}>
            <label className=" "> Your Name</label>
            <input type="text" className={inputStyle} placeholder="What's your name?"/>
          </div>
          <div className={divStyle}>
            <label> Your Email</label>
            <input type="email" className={inputStyle} placeholder="What's your email?" />
          </div>
          <div className={divStyle}>
            <label> Your Message</label>
            <textarea className={inputStyle}  rows={6} placeholder="What do you want to say ?" />
          </div>
          <div className="my-8">
            <button className="bg-[#341846] cursor-pointer  p-3 px-9 rounded-lg shadow-md shadow-neutral-950 hover:scale-120 transition-all ease-in-out duration-350">Send</button>
          </div>

        </form>
      </div>
      </div>

      <div className=" w-full flex-[1]">
        <HologramCanvas />
      </div>
    </div>
  );
};

export default Contact;