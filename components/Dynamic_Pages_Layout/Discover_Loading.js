import React from 'react'

import Loader from '../loader/loader'
export default function Discover_Loading() {
  return (
    <div className='flex flex-col h-screen w-screen  lg:w-[1279px] md:w-[1242px]   sm:w-[1242px] xs:w-[1242px]  xs:h-[3000px] sm:h-[3000px] md:h-[3000px]  xl:h-[3000px]  lg:h-[3000px]  xss:w-[1242px]  dark:bg-black bg-white'>
    <div className='flex flex-row h-[4.5rem]  dark:bg-black md:w-[1240px] sm:w-[1240px] xs:w-[1240px] xss:w-[1240px] bg-white lg:w-[1279px] w-max  xl:w-screen 2xl:w-screen border dark:border-gray-900 border-gray-200  relative   '>
     <div className='flex flex-row w-40 h-full justify-center items-center'>
        <span className='flex flex-row rounded-full  w-8 h-8 animate-pulse dark:bg-gray-900  bg-gray-200 '></span>
     </div>
<div className='flex flex-row h-full w-full  justify-end '>
<div className='flex flex-row h-full w-1/4  items-center justify-around space-x-10'>
<span className='flex flex-col   w-48 h-8 animate-pulse dark:bg-gray-900 bg-gray-200 '></span>
<span className='flex flex-col rounded-2xl  w-20 h-8 animate-pulse dark:bg-gray-900 bg-gray-200'></span>
    
</div>
</div>
    </div>
   <div className='h-full w-full flex flex-col justify-center items-center'>{Loader()}</div>
    </div>
  )
}
