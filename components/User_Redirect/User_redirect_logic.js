import React from 'react'
import DarkModeButton from '../DarkModeButton'
import { useRouter } from 'next/router'
export default function User_redirect_logic() {
    const router = useRouter()
  return (
    <div className="flex flex-row w-screen h-screen dark:bg-black    ">
    <DarkModeButton /> 
                      <div className="flex flex-col h-full w-3/5  justify-center  ">
                          <div className="flex flex-col  w-full h-60 items-center  justify-between ">
                              
                                  <div className="flex flex-col h-fit w-fit xs:mt-14 sm:mt-14 mt-24"  >
                                  
                                      <button onClick={()=>{router.push("/GoogleAuth")}} className=" input rounded-md h-10 w-40 border border-double  bg-gray-900 text-[#000000]  hover:bg-[#000000] hover:text-white dark:text-white dark:bg-slate-900 dark:hover:text-black dark:hover:bg-white text-sm font-semibold items-center p-2  xs:w-32  xs:h-8 xs:mt-5   text-center"  >Nft Minter</button>
                                      <span className="flex flex-row max-h-fit max-w-fit  -my-9 mx-8 xs:mx-1 xs:-my-7  "></span>
                                  </div>
                             
                              {/* <div className="flex flex-col my-24 xs:mt-20">
                                  <button onClick={()=>{router.push("/home")}} className=" input rounded-md h-10 w-40 border border-double bg-[#000000] text-white hover:bg-gray-900 hover:text-[#000000] dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-slate-900 text-sm font-semibold items-center p-2  xs:w-32 xs:h-8
                                   text-center"  >Just a Wanderer</button>
                              </div> */}
                          </div>
                      </div>
                      <div className="flex flex-col w-2/5   h-full    ">
                      <div className="flex flex-row xs:flex-1 w-full h-full   ">
                              <img src="./Alphar.jpg"  className=" xs:object-scale-down xs: sm:object-scale-down" />
                          </div>
                      </div>
                      
  
                  </div>
  )
}
