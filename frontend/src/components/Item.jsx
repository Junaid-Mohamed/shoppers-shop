import React from 'react'

const Item = (props) => {
    const {name,image,new_price,old_price} = props;
  return (
    <div className='w-[350px] transform hover:scale-105 transition duration-600'>
        <img src={image}/>
        <p className='my-1.5 mx-0'>{name}</p>
        <div className='flex gap-5'>
            <div className='text-[#374151] text-xl font-semibold'>
                {new_price}
            </div>
            <div className='text-[#374151] text-xl font-medium line-through'>
                {old_price}
            </div>
        </div>
    </div>
  )
}

export default Item
