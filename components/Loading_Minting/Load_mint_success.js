import React from 'react'
import Image from 'next/image'
import { useState ,useEffect   } from 'react';
import { useRouter } from 'next/router';

export default function Load_mint_success () {
    
    const [redirectSeconds,setRedirectSeconds] = useState(3);
    const [redirectSeconds1,setRedirectSeconds1] = useState(6);
    const [redirectSeconds2,setRedirectSeconds2] = useState(8);

    const [change ,setChange]=useState(false);
    const [change1 ,setChange1]=useState(false);
    const [change2 ,setChange2]=useState(false);
    const router = useRouter()
    let count = 0;
    const data = {
        id: 1
      };
    useEffect(() => {
      
              


        
           
            
         
        
     
            
                console.log("counter",count);
          setTimeout(() => {
                    console.log("ddd",redirectSeconds);
                    setRedirectSeconds((redirectSeconds) => redirectSeconds - 1); 
                     
                    setChange(true)
                  

                }, 2000)
            
        

            
                setTimeout(() => {
                    console.log("hello ji",redirectSeconds1);
                    setRedirectSeconds1((redirectSeconds1) => redirectSeconds1 - 1);
                    setChange1(true)
                    
                    
                }, 4000)

                setTimeout(() => {
                    console.log("hello ji2",redirectSeconds2);
                    setRedirectSeconds2((redirectSeconds2) => redirectSeconds2 - 2);
                    setChange2(true)
                    router.push("/UserNft")
                    
                }, 6000)

            
            
      
      
     }, [redirectSeconds,redirectSeconds1,redirectSeconds2]);
  

  
  return (
    <div  className=' flex  h-[100vh] w-screen dark:bg-black lg:w-[1279px] md:w-[1242px]   sm:w-[1242px] xs:w-[1242px]  xs:h-[3000px] sm:h-[3000px] md:h-[3000px]  xl:h-[3000px]  lg:h-[3000px]  xss:w-[1242px]    z-50 relative bg-white bg-opacity-95'>
       
    <div className=' flex flex-col h-full w-full justify-center items-center space-y-5 '>

         
          
         
    {change===false ?
         (
            <div className='flex flex-row text-black text-xl dark:text-white'><svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                  </svg><span class="sr-only text-black">Loading...</span> Uploading Ipfs On Ipfs</div>
             ) :(null)
         } 
    {change===true ?
             ( <div className='flex flex-row text-black text-xl dark:text-white space-x-2 '>
             <img className='' src="./accept.png" width={30}/><span class="sr-only">Loading...</span> <p>Nft Uploaded on Ipfs</p>
                 
              
                  </div> )   :
                  (null)
     
    }
         

        
         {change1===false ?
         (
            <div className='flex flex-row text-black text-xl dark:text-white'><svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                  </svg><span class="sr-only text-black">Loading...</span> Developing Smart Contract</div>
             ) :(null)
         } 
              
               {change1===true ?
             ( <div className='flex flex-row text-black text-xl dark:text-white space-x-2 '>
             <img className='' src="./accept.png" width={30}/><span class="sr-only">Loading...</span> <p>Smart Contract Developed</p>
                 
              
                  </div> )   :
                  (null)
     
    }
     {change2===false?
             (
                <div className='flex flex-row text-black text-xl dark:text-white'><svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg><span class="sr-only text-black">Loading...</span> Deploying Smart Contract</div>
             )
             :
             (null)  
             }
              {change2===true ?
             ( <div className='flex flex-row text-black text-xl dark:text-white space-x-2 '>
             <img className='' src="./accept.png" width={30}/><span class="sr-only">Loading...</span> <p>Smart Contract Deployed</p>
                 
              
                  </div> )   :
                  (null)
     
    }

    </div>
    </div>
  
  )
    }
