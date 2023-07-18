import React from 'react'
import Navbar from '../Navbar/Navbar'
import Terms_Service_logic from './Terms_Service_logic'
export default function Terms_Service_Layout({children}) {
  return (
    <div className="z-10 relative flex flex-col max-h-fit w-screen   " >

    <Navbar/>

     
   <Terms_Service_logic/>
      <main className=" z-20 relative flex flex-col max-h-fit w-screen " >

          {children}


      </main>




  </div>
  )
}
