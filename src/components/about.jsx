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
        As a driven and detail-oriented aspiring full-stack developer, I'm
        passionate about crafting innovative web applications that deliver
        seamless user experiences. With a solid foundation in HTML, CSS, and
        JavaScript, I've expanded my skill set to include frameworks like React
        and Laravel, as well as databases like SQL and MongoDB. I'm also
        proficient in Tailwind CSS, which I've used to build responsive and
        visually appealing interfaces. I'm excited to apply my skills to build
        scalable, efficient, and user-friendly web applications, and I'm looking
        forward to collaborating with a team of like-minded professionals to
        drive project success.
      </div>
    </motion.div>
  );
}
