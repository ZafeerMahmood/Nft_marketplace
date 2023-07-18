import React from "react";
import Navbar from "../Navbar/Navbar";
const Dynamic_Layout = ({ children }) => {

    return (
        <div className="z-10 relative flex flex-col max-h-fit  bg-black" >

            <Navbar/>
   

            <main className=" z-20 relative flex flex-col max-h-fit w-screen bg-black" >

                {children}


            </main>


        </div>)

}
export default Dynamic_Layout