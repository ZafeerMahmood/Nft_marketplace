import React from "react";
import { useState } from 'react';
import { useRouter } from "next/router";
import { authUserContext } from "../../context/AuthUserContext";
import { useContext } from "react";
import { auth ,googleAuthProvider} from "../../lib/firebase";
import DarkModeButton from "../DarkModeButton";

const GAuth = ({ }) => {
    const [isAuth, setIsAuth] = useState(false)
    const {Auth,setAuth} = useContext(authUserContext);
    const router = useRouter();
      const [error , setError]=useState(false)
    async function clicker() {
        if (isAuth == true)
            router.push('/MetamaskAuth')
        else {
            alert("Please Login to Continue")
        }
    }

    async function GAuthProvider() {
        await auth.signInWithPopup(googleAuthProvider).then((result) => {
            setAuth({authUser: result.user.uid, account: result.user.email});
            setIsAuth(true)
            console.log(Auth)
        })
        .catch((error) => {
          setError(error.message)
        });
    }


    return (
      

        <div className="flex flex-row w-screen h-screen dark:bg-black    ">
        <DarkModeButton /> 
                          <div className="flex flex-col h-full w-3/5  justify-center  ">
                              <div className="flex flex-col  w-full h-60 items-center  justify-between ">
                                  
                                      <div className="flex flex-col h-fit w-fit xs:mt-14 sm:mt-14" >
                                          <button className=" input rounded-md h-10 w-80 min   border border-double bg-[#4285F4] hover:bg-[#5893f1]   text-sm font-semibold  text-white items-center p-2 xs:h-8 xs:w-40 xs:text-xs xs:text-right  xs:mt-5 " onClick={GAuthProvider}> Continue with Google</button>
                                          
                                          <span className="flex flex-row max-h-fit max-w-fit  -my-9 mx-8 xs:mx-1 xs:-my-7  "><img src="./G.png" className="w-[32px] xs:w-[24px]"   ></img></span>
                                      </div>
                                 
                                  <div className="flex flex-col my-24 xs:mt-16">
                                      <button onClick={clicker} className=" input rounded-md h-10 w-40 border border-double bg-[#000000] text-white hover:bg-gray-900 hover:text-[#000000] dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-slate-900 text-sm font-semibold items-center p-2  xs:w-20  xs:h-8 text-center"  > Next</button>
                                  </div>
                              </div>
                          </div>
                          <div className="flex flex-col w-2/5   h-full   ">
                          <div className="flex flex-row xs:flex-1 w-full h-full   ">
                                  <img src="./alphyo.png"  className=" xs:object-scale-down xs: sm:object-scale-down" />
                              </div>
                          </div>
                          
      
                      </div>
           

        


    )
}
export default GAuth