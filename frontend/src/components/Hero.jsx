import React from 'react'
import hand_icon from "./assets/hand_icon.png";
import arrow_icon from "./assets/arrow.png";
import hero_img from "./assets/hero_image.png";
// import arrow_icon from "./assets/arrow.png";
// import hero_image from "./assets/hero_img.png"


const Hero = () => {
  return (
    <div className='flex h-screen bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22]'>
      <div className='flex flex-1 justify-center flex-col gap-5 pl-44'>
        <h2 className=''>NEW ARRIVALS ONLY</h2>
        <div>
            <p>new</p>
            <img src={hand_icon}/>
        </div>
        <p>collections</p>
        <p>for everyone</p>

      </div>
      <div>
        <img src={hero_img}/>
      </div>
    </div>
  )
}

export default Hero
