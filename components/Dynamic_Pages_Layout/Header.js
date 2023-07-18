import React from "react";
import { useState } from 'react';

const Header = ({ }) => {
     return (
          <div className="flex flex-col h-20 w-full justify-center">


               <div className="flex flex-row  bg-[#131212] h-full w-full justify-evenly items-center  ">

                    <button className='mx-5 flex flex-row text-2xl font-bold text-transparent   bg-gradient-to-r from-fuchsia-500 via-violet-400 to-emerald-500 bg-clip-text   items-center'>
                         NFTVERSE
                    </button>


                    <div className=' text-white mx-20 flex flex-col w-[500px] h-[35px]  bg-[#333232] rounded-xl border border-transparent hover:border-gray-800 '>

                         <svg class=" -my-1 mx-3 w-6 h-11 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>


                         <input type="text" class=" text-sm mx-12 -my-9 h-[33px] w-[450px] text-white bg-[#333232] rounded-2xl border border-transparent outline-none placeholder:text-white placeholder:text-start" placeholder="Search by Collection , NFT or User" />

                    </div>
                    <button className=" flex flex-row w-[450px] h-[30px] bg-transparent text-white font-medium text-base hover:animate-pulse">Explore</button>
                    <button className=" flex flex-row w-[450px] h-[30px] bg-transparent text-white font-medium text-base hover:animate-pulse">Drops</button>
                    <button className=" flex flex-row w-[450px] h-[30px] bg-transparent text-white font-medium text-base hover:animate-pulse">Stats</button>
                    <button className=" flex flex-row w-[450px] h-[30px] bg-transparent text-white font-medium text-base hover:animate-pulse">Resource</button>
                    <button className=" flex felx-row hover:animate-pulse">
                         <img src="/Frame Cart.svg" height={130} width={130} />
                    </button>
                    <button className=" -my-2 mx-20  relative flex flex-row w-[250px] h-[30px]  bg-transparent border border-white items-center justify-center rounded-xl  text-white font-medium text-base ">Connect</button>
                    <button className=" mx-8 flex flex-row hover:animate-pulse">
                         <img src="/Profile.svg" height={100} width={130} />
                    </button>
               </div>
          </div>


     )
}
export default Header