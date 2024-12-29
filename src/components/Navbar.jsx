import React from 'react'

const Navbar = () => {
  return ( <>
    <nav className='hidden md:flex md:items-center md:justify-between md:px-3 md:p-6'>
        <div><img src="src\assets\Layout\Brand\logo-colored.svg" alt="brand logo" /></div>
        <div className='flex items-center justify-center  h-10 '>
            <input className='h-10 md:w-60 lg:w-96 border-2 rounded-l-lg p-2  border-[#0D6EFD]' type="search" placeholder='Search' />
            <select className='border-y-2  border-[#0D6EFD] h-10 p-1 lg:p-2' name="" id="">
                <option value="All Categories">All Categories</option>
                <option value="Electronics">Electronics</option>
            </select>
            <input className='p-2 w-24 border-x-2 h-10 rounded bg-[#0D6EFD] border-[#0D6EFD] text-white' type="button" value="Search" />
        </div>
        <ul className='flex gap-3'>
            <li><img src="src\assets\Layout\Profile.svg" alt="" /></li>
            <li><img src="src\assets\Layout\Orders.svg" alt="" /></li>
            <li><img src="src\assets\Layout\Message.svg" alt="" /></li>
            <li><img src="src\assets\Layout\Cart.svg" alt="" /></li>
        </ul>
    

    </nav>
    <div className='hidden md:flex md:p-2 lg:p-6 md:items-center md:justify-between'>
      <div className=''>
        <ul className='flex items-center justify-center md:gap-3 lg:gap-6'>
        <li className='flex gap-2'><img src="src\assets\Layout\Icon\control\menu.svg" alt="" />All Categories</li>
        <li>Hot Offers</li>
        <li>Gift Boxes</li>
        <li>Projects</li>
        <li>Menu Item</li>
        <li className='flex'>Help <img src="src\assets\Layout\Icon\control\expand_more.svg" alt="" /></li>
        </ul>
        </div>
        <div>
          <ul className='flex justify-center items-center md:gap-4 lg:gap-6'>
            <li className='flex'>English,USD <img src="src\assets\Layout\Icon\control\expand_more.svg" alt="" /></li>
            <li className='flex gap-2'>Ship To <img src="src\assets\Layout\Image\flags\icon.svg" alt="" /><img src="src\assets\Layout\Icon\control\expand_more.svg" alt="" /></li>
          </ul>
        </div>
    </div>



 {/* Mobile navbar code */}


    <nav className=' flex p-4 items-center justify-between md:hidden'>
      <div className='flex gap-5 items-center justify-center'><img src="src\assets\Layout\Icon\control\menu.svg" alt="" /><div><img src="src\assets\Layout\Brand\logo-colored.svg" alt="brand logo" /></div></div>
      <div className='flex justify-center items-center gap-5'><img src="src\assets\Mobile\Icon\Vector.svg" alt="" /><img src="src\assets\Mobile\Icon\control\person.svg" alt="" /></div>
    </nav>

    <div className='w-[96vw] h-10 m-auto md:hidden'>
      <div className='flex items-center justify-center gap-3 h-9 border-2 p-3 rounded border-gray-400'>
       <img className='' src="src\assets\Form\Icon\control\Vector.svg" alt="" /> 
      <input className='h-7 border-none bg-none w-[90vw]' type="search" placeholder='Search' />
      </div>
    </div>


    <div className='md:hidden '>
    <ul className='flex items-center justify-start overflow-auto gap-3 p-2 '>
      <li className='bg-gray-300 text-blue-600 rounded px-3'>Categories</li>
      <li className='bg-gray-300 text-blue-600 rounded px-3'>Tablet</li>
      <li className='bg-gray-300 text-blue-600 rounded px-3'>Accecrioes</li>
      <li className='bg-gray-300 text-blue-600 rounded px-3'>Phones</li>
      <li className='bg-gray-300 text-blue-600 rounded px-3'>Clothes</li>
      <li className='bg-gray-300 text-blue-600 rounded px-3'>Gadgets</li>
      <li className='bg-gray-300 text-blue-600 rounded px-3'>Furniture</li>
      
    </ul>
</div>



      </>
  )
}

export default Navbar