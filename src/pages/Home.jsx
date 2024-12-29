import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import HomeOutdoorCard from '../components/Home&OutdoorCard'
import Electroniccard from '../components/electroniccard'

const Home = () => {
  return (
    <>
    <Navbar />

    {/* section for big screens */}
    <section className='w-[100%] bg-slate-100 h-[40vh] py-3 px-12'>
    <div className='w-[100%] bg-white h-[100%] flex p-3 gap-3 rounded'>
    
    <div className='h-[100%] w-[25%] justify-center items-start p-3 overflow-auto'>
      <ul className='flex items-start justify-center px-2 py-1 flex-col gap-3 '>
        <li>Automobiles</li>
        <li>Automobiles</li>
        <li>Automobiles</li>
        <li>Automobiles</li>
        <li>Automobiles</li>
        <li>Automobiles</li>
        <li>Automobiles</li>
        <li>Automobiles</li>
        
      </ul>
    </div>
    <div className='object-cover h-[100%] w-[50%] flex  '>
      <img className='' src="src\assets\Banner-board-800x420 2.svg" alt="" />
    </div>
    <div className=' h-[100%] w-[25%] flex items-start justify-center gap-2 flex-col rounded'>
      <div className='w-[100%] h-[35%] flex items-center justify-center gap-2 rounded bg-gray-400 flex-col'>
        <div className=''>
          <div><img src="src\assets\Avatar.svg" alt="" /></div>
          <div></div>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <button className='w-[180px] h-8 text-right bg-blue-500'>Join Now</button>
          <button className='w-[180px] h-8 text-right bg-blue-500'>Login</button>
        </div>
        
      </div>
      <div className='w-[100%] h-[32%] flex items-start justify-center gap-2 rounded bg-orange-600'></div>
      <div className='w-[100%] h-[32%] flex items-start justify-center gap-2 rounded bg-cyan-400'></div>
    </div>
    
    </div>
    </section>

    {/* section above for mobile view */}
    <section></section>

    {/* Deal & Offers Section big screen */}
    <section className='w-[100vw] h-[35vh] py-3 px-12 m-auto  overflow-x-scroll'>
      <div className='w-[100%] h-[100%] m-auto flex items-center  justify-start '>
        <div className='w-[270px] h-[100%]'><h1 className='w-[270px] h-[100%]'>Deals & Offers</h1></div>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
        
      </div>
    </section>
    {/* Home & Outdoor Section big screen */}
   
    <section className='w-[100vw] h-max py-3 px-12 flex  '>
        <div className='w-[270px] h-[100%] relative'>
          <img src="src\assets\image92.svg" alt="" className='w-[280px] h-[260px] object-cover' />
          <h1 className=' absolute top-7 left-5'>Home & Outdoor</h1>
          </div>
        <div className='w-[100%] flex items-start justify-start flex-col'>
        <div className=' flex items-start  justify-start'>
        <div><HomeOutdoorCard /></div>
        <div><HomeOutdoorCard /></div>
        <div><HomeOutdoorCard /></div>
        <div><HomeOutdoorCard /></div>
        </div>
        <div className=' flex items-start  justify-start'>
        <div><HomeOutdoorCard /></div>
        <div><HomeOutdoorCard /></div>
        <div><HomeOutdoorCard /></div>
        <div><HomeOutdoorCard /></div>
        </div>
   
      </div>
    </section>
    {/* Consumer $ Electronics Section big screen */}
   
    <section className='w-[100vw] h-max py-3 px-12 flex  '>
        <div className='w-[270px] h-[100%] relative'>
          <img src="src\assets\image98.svg" alt="" className='w-[280px] h-[260px] object-cover' />
          <h1 className=' absolute top-7 left-5'>Consumer $ Electronics </h1>
          </div>
        <div className='w-[100%] flex items-start justify-start flex-col'>
        <div className=' flex items-start  justify-start'>
        <div><Electroniccard /></div>
        <div><Electroniccard /></div>
        <div><Electroniccard /></div>
        <div><Electroniccard /></div>
        </div>
        <div className=' flex items-start  justify-start'>
        <div><Electroniccard /></div>
        <div><Electroniccard /></div>
        <div><Electroniccard /></div>
        <div><Electroniccard /></div>
        </div>
   
      </div>
    </section>
    </>
  )
}

export default Home