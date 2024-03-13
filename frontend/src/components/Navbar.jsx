import React, { useState } from 'react'

import logo from "./assets/logo.png";
import cart_logo from "./assets/cart_icon.png"
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [activeMenu,setActiveMenu] = useState("shop")

  
  return (
    <div className='flex justify-around p-4 shadow'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='logo-img'/>
        <p className='text-logo text-3xl font-semibold'>Shoppers Shop</p>
      </div>
    
        <ul className='text-nav-items flex items-center gap-12 text-xl font-medium'>
            <li onClick={()=>setActiveMenu("shop")} className='cursor-pointer'><Link to='/'> Shop</Link> {activeMenu==="shop"?<hr className='h-1 rounded-xl bg-[#FF4141]'/>:<></>} </li>
            <li  onClick={()=>setActiveMenu("men")}  className='cursor-pointer' ><Link to='/mens'>  Men </Link>{activeMenu==="men"?<hr className='h-1 rounded-xl bg-[#FF4141]'/>:<></>} </li>
            <li  onClick={()=>setActiveMenu("women")} className='cursor-pointer'><Link to='/womens'>  Women </Link>{activeMenu==="women"?<hr className='h-1 rounded-xl bg-[#FF4141]'/>:<></>} </li>
            <li  onClick={()=>setActiveMenu("kids")} className='cursor-pointer'><Link to='/kids'> Kids</Link>  {activeMenu==="kids"?<hr className=' h-1 rounded-xl bg-[#FF4141]'/>:<></>} </li>
        </ul>
     
      <div className='flex items-center gap-11'>
        <button className='border-solid border-2 border-border rounded-full w-32 h-14  '>Login</button>
        <img src={cart_logo} alt='cart-icon-img' />
        <div className='bg-[#f83636] text-[#FFFFFF] w-6 h-6 flex justify-center items-center mt-[-35px] ml-[-55px] rounded-lg text-sm'>0</div>
      </div>
    </div>
  )
}

export default Navbar
