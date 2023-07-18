import React, { useEffect, useState } from 'react';
import Dynamic_Layout from "../components/Dynamic_Pages_Layout/Dynamic_Layout";
const buy_ui = () => {

    var array=[1,2,3,4,5]
  return (
    <div className="flex flex-col h-[70rem] w-screen absolute bg-black" >
            <Dynamic_Layout/>
            <div className="flex flex-col h-full w-full bg-black absolute  animate-pulse   " >
           
           <div className="flex flex-col h-full w-full items-center justify-center  ">
           <div className="flex flex-col h-full w-3/4  relative mt-6 ">
         
            <div className="flex flex-col h-1/2 w-full  mt-10 ">
                       
                       <div className="flex flex-row h-full w-full  justify-evenly mt-5">
                             
                             <div className="flex flex-row h-full rounded-md  w-3/5 mt-10  bg-slate-100">
                             {/* {<img src= height={100} width={500}/>} */}
                             </div>
                             

                             <div className="flex flex-row h-full w-full justify-center mt-8 ">

                                <div className="flex flex-col h-full w-4/5 " >
                                <div className="flex flex-col h-20 w-full  justify-center"> 
                                       <span className=" mt-1 text-3xl  font-mono text-white"></span>
                                       </div>
                                       <div className="flex flex-col h-20 w-full  justify-center">  
                                       <div class="h-3 w-60 bg-slate-100 rounded"></div>
                                      </div>

                                       <div className="flex flex-col h-32 w-full  justify-center">    
                                       <div class="h-3 w-60 bg-slate-100 rounded"></div>
                </div>
                <div className="flex flex-col h-20 w-full  justify-center">    
                <div class="h-3 w-60 bg-slate-100 rounded"></div>
                </div>
                <div className="flex flex-col h-32 w-full  justify-end">
                <div class="h-3 w-60 bg-slate-100 rounded"></div>
</div>
                                       </div>
                             </div>
                       </div>
                       
               
            </div>
                  
                    {/* <div className="flex flex-col h-1/3 w-full  items-center -mt-8">
                 <div className="flex flex-col w-11/12 h-full rounded-md ">
                  
                    <div className="flex flex-col h-1/4 w-full ml-6 justify-end  ">
                        <span className=" text-center text-2xl font-thin text-white">
                            NFT 
                        </span>
                        
                    </div>
                    <div className="flex flex-col h-fit w-full  ml-6 items-center bg-slate-900">
                        <div className="flex flex-col h-fit w-2/4  rounded-md items-center bg-slate-900  text-black">
                            <h6 className="font-semibold text-lg"> Name :</h6>
                    <span>{data.name}</span>
                    <h6 className="font-semibold text-lg"> Description :</h6>
                    <span>{data.description}</span>
                    <h6 className="font-semibold text-lg"> Type :</h6>
                    <span>{data.type}</span>
                    <h6 className="font-semibold text-lg"> Original Nft :</h6>
                     {<img src={data.file} height={100} width={200}/>}
                     <h6 className="font-semibold text-lg"> Original Nft :</h6>
                  
                        
                     console.log(data.history)
                    <div className="flex flex-col  h-fit w-full justify-center items-center bg-slate-900">
                    <h6 className="font-semibold text-lg text-center"> Price :</h6>
                    <input
                  type="text"
                  id="nft_name"
                  name="name_nft"
                 value={price}
                 onChange={Handle_Price}
                  className=" bg-[#2F2F2F] input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10 w-60 border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 text-white "
         

                />
                  <div className="flex flex-col h-24 w-full  justify-center items-center">

<button className="rounded-md  button  bg-[#2F2F2F]  hover:bg-[#ffffff]  w-52 h-10  btn hover:text-[#000000]  border border-double  border-white  outline-none   text-base font-semibold p-2 text-white " type="submit"> Sell <br /></button>
</div>
                 
                 </div>
             

                </div>
                </div>
                 </div>
                     </div> */}

                     <div className="flex flex-col h-[60rem] w-full justify-center   ">
                   <div className=" flex flex-col h-3/5 w-full rounded-lg  outline-1 outline  outline-slate-100 mt-10 justify-evenly">

                 
                 <div class=" h-3 w-60 bg-slate-100 rounded"></div>
                                      
                                     
                 {/* {array.map( user=> (
          <div class=" h-3 w-60 bg-slate-100 rounded">
            {user}
          </div>
        ))} */}
         <div class=" h-3 w-60 bg-slate-100 rounded">
         </div>
         <div class=" h-3 w-60 bg-slate-100 rounded"></div>
         <div class=" h-3 w-60 bg-slate-100 rounded"></div>
         <div class=" h-3 w-60 bg-slate-100 rounded"></div>
         <div class=" h-3 w-60 bg-slate-100 rounded"></div>
         
        
                                      
                                   
                                
                                     
                                    
                
                                       
                                      </div>
                                   
                   </div>
                     </div>
                </div>
           
           </div>
   
</div>
  );
};

export default buy_ui