import React from 'react'
import data_product from "./assets/data"
import Item from './Item'



const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-2 h-screen'>
      <h1 className='text-[#171717] text-5xl font-semibold' >POPULAR IN WOMEN</h1>
      <hr/>
      <div>
        {data_product.map((item)=>{
           return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
