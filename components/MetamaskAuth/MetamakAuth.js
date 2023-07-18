import React from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { firestore } from "../../lib/firebase";
import { useCookies } from "react-cookie";
import DarkModeButton from "../DarkModeButton";
const MAuth = ({ }) => {

    const [cookies, setCookie] = useCookies(['account']);
    const router = useRouter();
    const userRef =useRef(0)
    async function clicker() {
    
        router.push("./home")
    }

    const firebaseAuth = async () => {
        const ref = firestore.collection("metamask").doc(`${userRef.current}`);
        const { exists } = await ref.get();
        console.log(exists)

        if (exists === false) {
            const metamaskDoc = firestore.doc(`metamask/${userRef.current}`)
            const account={'account':cookies?.user}
            await metamaskDoc.set(account)
        }
       
    }

    async function metamaskAuth() {
        try {
            if (window?.ethereum?.isMetaMask) {
                // Desktop browser
                   const permissions= await ethereum.request({
                    method: 'wallet_requestPermissions',
                    params: [{
                        eth_accounts: {},
                    }]})
    
                setCookie('user',permissions[0].caveats[0].value[0],{path:'/'} )
                userRef.current=permissions[0].caveats[0].value[0]
                firebaseAuth()
            }

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div className="flex flex-row w-screen h-screen dark:bg-black    ">
        <DarkModeButton /> 
                          <div className="flex flex-col h-full w-3/5  justify-center  ">
                              <div className="flex flex-col  w-full h-60 items-center  justify-between ">
                                  
                                      <div className="flex flex-col h-fit w-fit xs:mt-14 sm:mt-14" >
                                          <button className=" input rounded-md h-10 w-80 min   border border-double bg-[#4285F4] hover:bg-[#5893f1]   text-sm font-semibold  text-white items-center p-2 xs:h-8 xs:w-[164px] xs:text-xs xs:text-right xs:mt-5   " onClick={metamaskAuth}> Continue with Metamask</button>
                                          
                                          <span className="flex flex-row max-h-fit max-w-fit  -my-9 mx-8 xs:-ml-[0.20rem] xs:-my-7  "><img src="./M.png" className="w-[32px] xs:w-[24px]"   ></img></span>
                                      </div>
                                 
                                  <div className="flex flex-col my-24 xs:mt-16">
                                      <button onClick={clicker} className=" input rounded-md h-10 w-40 border border-double bg-[#000000] text-white hover:bg-gray-900 hover:text-[#000000] dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-slate-900 text-sm font-semibold items-center p-2  xs:w-20  xs:h-8 text-center"  > Next</button>
                                  </div>
                              </div>
                          </div>
                          <div className="flex flex-col w-2/5   h-full    ">
                          <div className="flex flex-row xs:flex-1 w-full h-full   ">
                                  <img src="./Alpha_ex.png"  className=" xs:object-scale-down xs: sm:object-scale-down" />
                              </div>
                          </div>
                          
      
                      </div>


    )
}
export default MAuth