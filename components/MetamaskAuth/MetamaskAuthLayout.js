import React from "react";
import MAuth from "./MetamakAuth";
const MetamaskAuthLayout = ({ children }) => {

    return (
        <div className="z-10 relative flex flex-col max-h-fit  " >
            <MAuth />
            <main className=" z-20 relative flex flex-col max-h-fit w-screen" >

                {children}


            </main>


        </div>)

}
export default MetamaskAuthLayout