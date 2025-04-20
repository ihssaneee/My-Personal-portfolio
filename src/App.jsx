import { useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'

function App() {
  

  return (
    <>
     
         <div className='fixed w-full z-50 '>
          <Header />
         </div>
       <div className='relative top-32 overflow-hidden '>
        <Hero />
       </div>
       
     
    </>
  )
}

export default App
