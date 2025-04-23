import { useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import ParticlesBackground from './components/ParticlesBackground'
import About from './components/about';
import Skills from './components/skills';
function App() {
  

  return (
    <div className=''>
    
     <div className='fixed w-full z-[9999]  '>
      <Header />
     </div>
     <div className='-z-50' >
     <ParticlesBackground />
     </div>
   <div className='relative top-32 overflow-hidden    '>
    <Hero />
   </div>
   <div className='relative top-44'>
    <About />
   </div>
   <div className='relative top-44'>
    <Skills />
   </div>
   
 
</div>
  )
}

export default App
