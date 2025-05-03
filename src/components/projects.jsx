import Tilt from 'react-parallax-tilt';
import React from 'react';

import { projects } from '../constants';
import github from "/assets/github.png";
import { motion } from 'framer-motion';
import { fadeDown } from './utils/motion';
const Projects = () => {
  return (
    <div className='p-4 flex flex-col gap-8 lg:justify-normal lg:flex-wrap lg:items-start justify-center items-center'>
      <motion.div  variants={fadeDown()} initial='hidden' whileInView='visible' viewport={{once:true,amount:0.5}}  className="lg:pt-4 lg:px-9 px-2.5 py-3 font-poppins flex flex-col gap-5  my-6">
        <h3 className="text-white font-bold text-5xl font-poppins">Projects</h3>
        <div className='text-secondary max-w-3xl'>
        Below, you'll find a selection of projects that demonstrate my skills and experience in web development. Each project includes a brief overview, links to the code repository, and a live demo. These projects showcase my ability to tackle complex challenges, work with a range of technologies, and deliver high-quality results."
        </div>
        
      </motion.div>

        <div className='lg:w-[400px] max-w-[400px]  h-auto xl:flex-row  px-3 flex flex-col  gap-4 lg:mx-24 ' >
          {projects.map((project,index)=>(
              <ProjectCard key={index} image={project.image} description={project.description} name={project.name} source_code_link={project.source_code_link} tags={project.tags} index={index} />
          ))}
        </div>
     
    </div>
  );
};

const ProjectCard=({image,description,name,tags,source_code_link,index})=>{

  return(
    <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: index * 0.8,duration:0.75}} viewport={{once:true}} className='w-full' >
      <Tilt className="w-full "
      >
         <div className='w-full h-full flex flex-col bg-[#10102C] shadow-lg  relative  p-3 rounded-2xl  sm:w-[360px] font-poppins'>
              <div className=' w-[320px] h-[240px] mx-auto mt-2'>
                <img src={image} className='w-full h-full mx-auto object-contain rounded-2xl' alt="project"/>
                
              </div>
              <div className=' absolute black-gradient  rounded-full flex items-center justify-center  right-6 top-8   w-10 h-10 '>
                <a href={source_code_link} className='' target="_blank"><img src={github} className='w-6 h-6 rounded-2xl  '  /></a>
                </div>
              <div className='mt-3 mx-3' >
              <h3 className="text-white font-medium text-2xl">{name}</h3>
              </div>
              <div className="m-3">
                  <p className='text-sm text-secondary'>{description}</p>
              </div>
              <div className='flex gap-2  '>
                {tags.map(tag=>(
                  <p className={`text-sm`} style={{ color: tag.color }} key={`${name}-${tag.name}`} >#{tag.name}</p>
                ))}
              </div>
          </div>
      </Tilt>
    </motion.div>
    
    
  )


}









export default Projects;

