import React from "react";
import User_redirect_logic from "./User_redirect_logic";
const User_redirect_Layout= ({ children }) => {

    return (
        <div className="z-10 relative flex flex-col max-h-fit w-screen   " >

          <User_redirect_logic/>
           
         
            <main className=" z-20 relative flex flex-col max-h-fit w-screen " >

                {children}


            </main>
  
 


        </div>)

}
export default User_redirect_Layout