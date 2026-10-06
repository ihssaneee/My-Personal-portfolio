import React from "react";
import { motion } from "framer-motion";
import { fadeDown } from "./utils/motion";

export default function About() {
  return (
    <motion.div variants={fadeDown()} initial="hidden" whileInView="visible" viewport={{ once: true,amount:0.5 }} className="lg:p-9 p-4 font-poppins flex flex-col justify-between gap-7">
      <div className="">
        <h3 className="text-5xl font-bold text-white">About</h3>
      </div>
      <div   className="text-lg text-neutral-300 max-w-4xl ">
  I'm a full-stack developer with professional experience building and maintaining web applications using Laravel, React, PostgreSQL, and REST APIs.

I've worked on business applications covering purchasing, inventory, HR, payments, document management, and approval workflows, with a focus on maintainable code, data integrity, validation, and API development.

I'm currently expanding my expertise in C#, ASP.NET Core, Angular, TypeScript, and Docker, building applications that strengthen my understanding of modern backend architecture, authentication, APIs, databases, frontend development, and containerized environments.

I enjoy understanding how systems work beyond simply implementing features, and I'm focused on becoming a well-rounded full-stack developer capable of contributing effectively to real-world applications.

      </div>
      <div className="">
        <a className="text-white text-[20px] font-bold cursor-pointer" href="https://drive.google.com/file/d/1YxT1oqXUAPlvUyO1yUJ9LwlVdleU6g7C/view?usp=sharing" target="_blank">Download Resume</a>
      </div>
    </motion.div>
  );
}
