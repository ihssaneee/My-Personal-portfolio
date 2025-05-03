import { useRef, useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import ParticlesBackground from './components/ParticlesBackground'
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import { Stars } from '@react-three/drei';
import StarsBackground from './components/starsbg';

function App() {
    const navRef=useRef(null);
    const aboutRef=useRef(null);
    const skillsRef=useRef(null);
    const projectsRef=useRef(null);
    const contactRef=useRef(null);
    const scrollToSection=(ref)=>{
      ref.current.scrollIntoView({
        behavior:'smooth',
        block:'start'
      })
    }

  return (
    <div className=' '>
    
     <div className='fixed w-full z-[9999]  ' >
      <Header scrollToSection={scrollToSection}  aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
     </div>
     <div className='-z-50' >
     <ParticlesBackground />
     </div>
   <div className='relative top-32 overflow-hidden    ' >
    <Hero />
   </div>
   <div className='relative top-44' ref={aboutRef}>
    <About />
   </div>
   <div className='relative top-44' ref={skillsRef}>
    <Skills />
   </div>
   <div className='relative top-44 z-5' ref={projectsRef} >
    <Projects />
   </div>
   <div className='relative  top-36 xl:top-54 md:top-38 overflow-hidden w-full' ref={contactRef} >
   
    <div className=' absolute inset-0'>
      <StarsBackground />
    </div>
 
    <Contact />
   </div>
   
 
</div>
  )
}

export default App
