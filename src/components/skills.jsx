import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeDown } from "./utils/motion";
const Skills = () => {
  const skills = [
    { label: "HTML", icon: "src/assets/skills/html.svg" },
    { label: "Laravel", icon: "src/assets/skills/laravel.svg" },
    { label: "Javascript", icon: "src/assets/skills/javascript.svg" },
    { label: "Css", icon: "src/assets/skills/css.svg" },
    { label: "Tailwind", icon: "src/assets/skills/tailwind-css.svg" },
    { label: "React", icon: "src/assets/skills/react.svg" },
    { label: "Sql", icon: "src/assets/skills/sql-database.svg" },
    { label: "Git", icon: "src/assets/skills/git.svg" },
    { label: "MongoDb", icon: "src/assets/skills/mongodb.svg" },
    { label: "Python", icon: "src/assets/skills/python.svg" },
  ];
  const skillsRef = useRef([]);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsRef.current.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove("opacity-0");
              el.classList.add("opacity-100");
            }, i * 400);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  });
  return (
    <div className="font-poppins p-4  ">
      <motion.div
       variants={fadeDown()} initial='hidden' whileInView='visible' viewport={{once:true,amount:0.5}}
      >
        <div className="lg:p-9">
          <h3 className="text-white text-5xl font-poppins font-bold">Skills</h3>
        </div>
      </motion.div>

      <div
        className="flex  flex-wrap lg:gap-0 gap-9 items-center mx-3  lg:m-0 my-7 "
        ref={containerRef}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="opacity-0 w-[60px] h-[40px] lg:w-[105px]  transition-[opacity] duration-500"
            ref={(el) => (skillsRef.current[i] = el)}
          >
            <Card label={skill.label} icon={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
export const Card = ({ label, icon }) => {
  return (
    <div className="group w-full h-full  perspective-[3000]  ">
      <div className="card   cursor-pointer  w-full h-full transition-[transform] duration-1000  transform-3d   group-hover:rotate-y-180 relative  ">
        <div className="front-page backface-hidden flex items-center justify-center h-full w-full absolute  ">
          <img
            src={icon}
            className="w-14 h-14 flex items-center justify-center back "
          />
        </div>
        <div className="backface-hidden bg-[#11142E]  rotate-y-180  absolute text-white border-2 border-purple-950 shadow-purple-950 shadow-lg h-full w-full items-center rounded-md px-4 flex justify-center ">
          <h3 className="text-white text-lg ">{label}</h3>
        </div>
      </div>
    </div>
  );
};
