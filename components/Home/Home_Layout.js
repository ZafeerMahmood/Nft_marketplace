import React, { Suspense } from "react";

const Home_logic =React.lazy(()=>import("./Home_Logic"))

 
const   Home_Layout =({children}) =>
{
  
        return (
            <div className="overflow-x-hidden" >
                
         <Home_logic/>
       
        <main className="  " >
        
            {children}
            
            
        </main> 
    
      
        </div> )
    
}
export default Home_Layout