import React from 'react'

function Card() {
  return (
    
    <div className='w-[180px] h-[235px] p-2 flex flex-col justify-center items-center border-2 gap-2 border-gray-400 rounded'>
        <div><img src="src\assets\Image\tech\8.svg" alt="" /></div>
        <h3>Watches</h3>
        <span className='bg-red-300 text-red-600 px-4 py-1 rounded-full'>-25%</span>
    </div>
    
  )
}

export default Card