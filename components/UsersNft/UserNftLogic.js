

import React from "react";
import Web3 from "web3";
import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../../lib/firebase";
import Image from "next/image";
import { cache } from 'react';

import { useCookies } from 'react-cookie';
import { CardUser as Card } from "../Cards/Card";
let alph
let alph1;
import Footer from "../Footer/Footer";
import Discover_Loading from "../Dynamic_Pages_Layout/Discover_Loading";
import Navbar from "../Navbar/Navbar";
export const getNft = (async (cacheName, url, id) => {








    if (typeof window !== 'undefined') {
        const web3 = new Web3(window?.ethereum);
        const accounts = await web3.eth.getAccounts();
        console.log("Account Check", accounts);
        let str = accounts[0]
        const folder_data = await firestore.doc(`metamask/${str.toLowerCase()}`).collection('mynfts').doc(`/${id.tokenid}`).get();
        console.log("dasd", folder_data.data())
        const cache_data = folder_data.data()
        const data = new Response(JSON.stringify(cache_data));
        console.log("data check", data)
        if ('caches' in window) {

            caches.open(cacheName).then((cache) => {
                cache.put(url, data);
                //   alert('Data Added into cache!')
                console.log("ok")
            });
        }
        return data




    }

})











const UserNftLogic = ({ }) => {
    const [cookies] = useCookies(["user"]);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        async function Nftlogic() {
            if (typeof window !== 'undefined') {

                const web3 = new Web3(window?.ethereum);
                const accounts = await web3.eth.getAccounts();
                console.log("Account Check", accounts);

                const folder_data = await firestore.doc(`metamask/${cookies.user}`).collection('mynfts').get();
                console.log("Folder Data1", folder_data.docs);

                const data1 = folder_data.docs

                setData1(data1)

                const data = folder_data.docs.map((doc) => doc.data());

                console.log("Individual Data", data)
                setData(data)
                //getNft(data,data1)
                const folder_data_4 = await firestore.doc(`metamask/${cookies.user}`).get().then((folder_data_4) => {
                    const data_1 = folder_data_4.data()
                    alph = data_1.file
                    setData2(alph)
                    alph1 = data_1.name
                    setData3(alph1)
                    setLoading(false)

                })






            }

        }

        Nftlogic();



    }, [])




    return (
        (isLoading) ? <Discover_Loading /> :
            (
                <div className="flex flex-col  w-screen overflow-x-hidden max-h-fit dark:bg-black bg-white  " >
                    <Navbar />
                    <div className="flex flex-col h-96 w-full bg-zinc-800">
                        <div className="flex flex-row h-full w-full object-contain ">
                            <img src="./Back.jpg" className="w-full" />

                        </div>
                        <div className="flex flex-row h-28 w-full px-5 justify-start rounded-full -my-32 ">
                            <img src={alph} className="w-32 rounded-full border-2 dark:border-gray-600 bg-slate-900 border-gray-600 "/>
                        </div>
                    </div>
                    <div className="flex flex-col h-24 w-2/4  space-y-4">
                        <input className=' h-8 w-full ml-5 dark:text-white text-gray-900 bg-transparent font-bold text-xl  ' value={data3} readOnly />
                        <input className=' h-8 w-full ml-5 bg-transparent text-gray-600 ' value={cookies.user} readOnly />
                    </div>
                    <div className=" flex flex-wrap h-full w-full  items-center justify-center mt-5 space-x-2 space-y-2" >


                        {data.map((nft, index) => (

                            <div>
                                <Card key={index} link={`/sell_nft/${data1[index].id}`} image={nft.file} edition={'1'} name={nft.name} Discription={nft.description} type={nft.type}></Card>
                            </div>
                        ))}


                    </div>
                    <div className="h-fit w-full mt-10">
                        <Footer />
                    </div>

                </div>))

}
export default UserNftLogic










