import React from 'react'
import HologramCanvas from './canvas/hologramCanvas';
const Contact = () => {
  return (
    <div className=' overflow-hidden borer  flex lg:flex-row flex-col p-8'>
        
        <form className='bg-[#10102C] lg:min-w-md max-w- mx-10' >
            <div className=''>
                <label>Name</label>
                <input type="text" className='' />
            </div>
        </form>
        <div className='h-[350px] lg:h-[550px] flex-[1]' >
            <HologramCanvas />
        </div>
    </div>
  )
}

export default Contact;