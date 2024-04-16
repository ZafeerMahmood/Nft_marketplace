import React from "react";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  return (
    <div>
      <div className="h-[12rem] dark:bg-black flex flex-col bg-white w-[100%]  border dark:border-gray-900 border-gray-200    ">
        <div className="flex flex-row h-4/5  dark:bg-black bg-white  border border-gray-200 dark:border-gray-900 justify-center items-center ">
          <div className="flex h-5/6 flex-row w-full  justify-around ">
            <div className="flex flex-col h-full w-1/4 justify-center items-start space-y-2 ">
              <button className=" flex flex-row text-lg font-bold text-transparent   bg-gradient-to-r from-fuchsia-500 via-violet-400 to-emerald-500 bg-clip-text   items-center">
                NFTVERSE
              </button>
              <p className="flex flex-col dark:text-white text-gray-600 font-normal ">
                Fuel the rise of Digital Pakistan.{" "}
              </p>
            </div>
            <div className="flex flex-col h-full w-1/4  justify-center items-start space-y-2 ">
              <p className="flex flex-col  dark:text-white text-gray-600 text-lg font-semibold">
                About Us{" "}
              </p>
              <button
                className="flex flex-col  dark:text-white text-gray-600 font-normal placeholder:dark:text-white placeholder:text-gray-600 "
                onClick={(e) => {
                  router.push("/About_Us");
                }}
              >
                About
              </button>
              <button
                className="flex flex-col dark:text-white text-gray-600 font-normal placeholder:dark:text-white placeholder:text-gray-600"
                onClick={(e) => {
                  router.push("/Terms_Service");
                }}
              >
                Terms of Service
              </button>
            </div>
            <div className="flex flex-col h-full w-1/4  justify-center items-start space-y-2 ">
              <p className="flex flex-col  dark:text-white text-gray-600 text-lg font-semibold  ">
                Contact Us{" "}
              </p>
              {/* <button className='flex flex-col dark:text-white text-gray-600 font-normal placeholder:dark:text-white placeholder:text-gray-600' href="mailto:wasieurrahman24@gmail.com" placeholder='Email info@nftverse.com'/> */}
              <button
                className="flex flex-col dark:text-white text-gray-600 font-normal placeholder:dark:text-white placeholder:text-gray-600"
                onClick={(e) => {
                  router.push("/policies");
                }}
              >
                Policies
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-1/5 w-full dark:bg-black bg-white  justify-center items-center dark:text-white text-gray-600 font-normal ">
          © Copyright NFTVERSE. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
