import React from 'react'

import { useState ,useEffect  } from 'react';
import { useRouter } from 'next/router';
import DarkModeButton from '../DarkModeButton';

export default function Load_mint ({Text,src}) {
   
    const [redirectSeconds,setRedirectSeconds] = useState(3);

    const [off , setOff]=useState(false);
    const router = useRouter()
   
    useEffect(() => {
      
              

        
            
                if (redirectSeconds === 0) {
                    router.push("/UserNft");
                   
                }
           
                setTimeout(() => {
                    console.log(redirectSeconds);
                    setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
                }, 2000)
            
            setOff(true)
            },[redirectSeconds]);
  

  
  return (
    <div  className=' flex  h-screen w-screen lg:w-[1279px] md:w-[1242px]   sm:w-[1242px] xs:w-[1242px]  xs:h-[3000px] sm:h-[3000px] md:h-[3000px]  xl:h-[3000px]  lg:h-[3000px]  xss:w-[1242px]  dark:bg-black z-50 bg-white '>

    <div className=' flex flex-col h-full w-full justify-center items-center space-y-5 '>
     
    
             <div className='flex flex-row text-2xl dark:text-white text-black space-x-5' > 
             <img className='' src={src} width={32}/>
             
            <p> {Text}</p>
            
            </div>

       
              
 
           

    </div>
    </div>
  
  )
    }
