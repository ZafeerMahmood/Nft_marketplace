import React from 'react';
import Discover_Loading from '../Dynamic_Pages_Layout/Discover_Loading';
const MintingPageSkeleton = () => {
  return (
    <div className='flex flex-col  h-screen lg:h-[2000px] md:h-[2400px] sm:h-[2750px] xs:h-[5000px] xss:h-[6000px] md:w-[1240px] sm:w-[1240px] xs:w-[1240px] xss:w-[1240px]  lg:w-[1279px] w-max  xl:w-screen 2xl:w-screen dark:bg-black bg-white'>
      <Discover_Loading />
      <div className='flex flex-row h-full w-full justify-around items-center'>
        <div className='flex flex-row h-4/6 w-1/3 bg-gray-200 dark:bg-gray-900 animate-pulse  rounded-3xl'></div>
        <div className='flex flex-col h-2/5 w-2/5   justify-center items-start  space-y-10'>
          <p className='flex flex-row h-6 w-4/5 dark:bg-gray-900 bg-gray-200 animate-pulse rounded-2xl'></p>
          <p className='flex flex-row h-6 w-3/4 animate-pulse bg-gray-200 dark:bg-gray-900 rounded-2xl'></p>
          <p className='flex flex-row h-6 w-4/5 animate-pulse bg-gray-200 dark:bg-gray-900 rounded-2xl'></p>
          <p className='flex flex-row h-6 w-3/4 animate-pulse bg-gray-200 dark:bg-gray-900 rounded-2xl'></p>
          <p className='flex flex-row h-6 w-4/5 animate-pulse bg-gray-200 dark:bg-gray-900 rounded-2xl'></p>
        </div>
      
      </div>

      
    </div>
  )
};

export default MintingPageSkeleton;
