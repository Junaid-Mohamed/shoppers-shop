import React from 'react'
import hand_icon from "./assets/hand_icon.png";
import arrow_icon from "./assets/arrow.png";
import hero_img from "./assets/hero_image.png";



const Hero = () => {
  return (
    <div className='flex h-screen bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22]'>
      <div className='flex flex-1 justify-center flex-col gap-5 pl-44 leading-11'>
        <h2 className='text-[#171717]  text-26 font-semibold'>NEW ARRIVALS ONLY</h2>
        <div className='flex items-center gap-5'> 
            <p className='text-[#171717] text-8xl font-bold'>new</p>
            <img className='w-[105px]' src={hand_icon}/>
        </div>
        <p className='text-[#171717] text-8xl font-bold'>collections</p>
        <p className='text-[#171717] text-8xl font-bold'>for everyone</p>
        <div className='flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-full mt-[30px] bg-[#ff4141] text-[#FFFFFF] text-[22px] font-medium'>
        <div>Latest Collection</div>
        <img src={arrow_icon} />
      </div>
      </div>
      
      <div className='flex flex-1 justify-center items-center'>
        <img src={hero_img}/>
      </div>
    </div>
  )
}

export default Hero
