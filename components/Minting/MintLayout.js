import React from "react";

import MintingLogic from "./MintingLogic";
const MintLayout = ({ children }) => {

    return (
        <div className="" >

         <MintingLogic/>

            <main className=" " >

                {children}


            </main>


        </div>)

}
export default MintLayout