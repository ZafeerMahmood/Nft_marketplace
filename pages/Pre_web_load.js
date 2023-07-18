import React, { useState } from 'react'
import DarkModeButton from '../components/DarkModeButton'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Pre_web_load() {
  const router = useRouter();
  const [redirectSeconds,setRedirectSeconds] = useState(5);
  useEffect(() => {
    
        if (redirectSeconds == 0) {
            router.push("/Redirect_page");
            return;
        }
   
        setTimeout(() => {
            console.log(redirectSeconds);
            setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
        }, 2000)
    
   }, [redirectSeconds]);
  
  return (
    
    <div className='flex flex-col h-screen w-screen  bg-white  dark:bg-black   '>
     <DarkModeButton />
     
<div className='flex flex-col justify-center items-center h-full w-full'>
      <div className='flex animate-pulse'>
          <div className='mx-5 flex flex-row text-3xl font-bold text-transparent   bg-gradient-to-r from-fuchsia-500 via-violet-400 to-emerald-500 bg-clip-text   items-center'>
                         NFTVERSE
                        
                        
                    </div>
                    </div>
    </div>
    </div>
  )
}
