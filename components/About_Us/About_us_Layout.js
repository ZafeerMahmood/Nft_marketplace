import React from "react"

import About_Us_Logic from "./About_Us_Logic"
import Navbar from "../Navbar/Navbar"
const  About_Us_Layout =  ({children}) =>
{
  
        return (
            <div className="z-10  flex flex-col max-h-fit w-screen  dark:bg-black bg-white absolute "  >
      
       <Navbar/>
            
         <About_Us_Logic/>


        
       
          
      
          
        <main className=" z-20 relative flex flex-col max-h-fit w-screen dark:bg-black bg-white  ">
        
            {children}
            
            
        </main> 

      
        </div> )
    
}
export default About_Us_Layout