import React from "react";


import GAuth from "./GoogleAuth";

const G_Auth_Layout = ({ children }) => {

    return (
        <div className="z-10 relative flex flex-col max-h-fit  " >
        
            <GAuth/>
           
            <main className=" z-20 relative flex flex-col max-h-fit w-screen" >
                {children}
            </main>
         
        </div>)

}
export default G_Auth_Layout