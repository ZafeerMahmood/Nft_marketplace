

import React, { useRef } from "react";
import Web3 from "web3";
import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../../lib/firebase";
import Navbar from "../../components/Navbar/Navbar";
import { tradingAbi, tradingAddress } from "../../contracts/tradingInfo/info";
import { mintinContractAddress, mintingContractAbi } from "../../contracts/mintingInfo/info";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Discover_Loading from "../../components/Dynamic_Pages_Layout/Discover_Loading";
import Load_mint from "../../components/Loading_Minting/Load_mint";
const Sell = ({ token }) => {
    const [cookies] = useCookies(["user"]);
    const [data, setData] = useState({});
    const [price, setPrice] = useState("");
    const [history, setHistory] = useState([])
    const [ac, setAc] = useState("")
    const [ti, setTi] = useState("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(undefined)
    const router = useRouter();


    const Handle_Price = (e) => {
        e.preventDefault();
        if (e != undefined) {
            (setPrice(e.target.value));
        }
    }

    useEffect(() => {
        async function Nftlogic() {
            if (typeof window !== 'undefined') {
                setLoading(true)

                const token_idd = token.tokenid
                setTi(token_idd)
                setAc(cookies.user)
                const folder_data = await firestore.doc(`metamask/${cookies.user}`).collection('mynfts').doc(`${token_idd}`).get().then((folder_data) => {
                    const display = folder_data.data();
                    console.log(display)
                    setData(display)
                    setHistory(display.history)
                    setLoading(false)
                });

            }

        }
        Nftlogic();

    }, [])

    const addToMarket = async () => {
        console.log(data)
        setLoading(true)
        const appendHistory = data.history
        console.log(appendHistory)
        console.log(data.tokenid, 'id')
        await marketApprove(data.tokenid)
        if (typeof window !== 'undefined') {

            const web3 = new Web3(window?.ethereum);
            const accounts = await web3.eth.getAccounts();
            const MarketContract = new web3.eth.Contract(tradingAbi, tradingAddress);
            const pr = price * 0.00067 //(price =1 * 0.00067)
            const wei = web3.utils.toWei(pr.toString(), "ether")
            console.log(wei)
            await marketApprove(data.tokenid)
            MarketContract.methods.addItemToMaket(data.tokenid, mintinContractAddress, wei).send({ from: accounts[0] })
                .then((result) => {
                    console.log(result)
                    appendHistory.push({
                        "event": "Add to Market",
                        "time": new Date().toLocaleString(),
                        "tx": result.transactionHash,
                    })
                    const newItemid = result.events.itemAdded.returnValues.id
                    console.log(newItemid)
                    const ref = firestore.collection("NFTS").doc();
                    ref.set({
                        name: data.name,
                        description: data.description,
                        type: data.type,
                        file: data.file,
                        metametadata: data.metametadata,
                        tx: result.transactionHash,
                        tokenid: data.tokenid,
                        event: "Add to Market",
                        likes: 0,
                        gasused: result.gasUsed,
                        owner: result.from,
                        to: result.to,
                        block: result.blockNumber,
                        history: appendHistory,

                        price: pr,
                        newItemid: newItemid
                    }).then((res) => {
                        firestore.doc(`metamask/${ac}`).collection('mynfts').doc(`${token.tokenid}`).delete().then((res) => {
                            setLoading(false)
                            setOpen(true)
                        }).catch((error) => {
                            console.log(error)
                            setOpen(false)
                        })

                    }).catch((error) => {
                        console.log(error)
                    })
                }).catch((error) => { console.log(error) })

        }
        setOpen(true)
    }


    const marketApprove = async (id) => {
        if (typeof window !== 'undefined') {
            console.log("id", id)
            const web3 = new Web3(window?.ethereum);
            const accounts = await web3.eth.getAccounts();
            const contract = new web3.eth.Contract(mintingContractAbi, mintinContractAddress);
            console.log(id)
            const approvedAddress = await contract.methods.getApproved(id).call({ from: accounts[0] })
            console.log(approvedAddress)
            if (approvedAddress != tradingAddress) {
                await contract.methods.approve(tradingAddress, id).send({ from: accounts[0] })
            }
        }
    }

    // convert eth to wei 

    return (
        (loading) ? (<Discover_Loading />) :
            (
                (open === true) ? (<Load_mint Text={"Nft Up for Buying"} src={"/accept.png"} />) : (open === false) ? (<Load_mint Text={"Nft Price not Set"} src={"/delete.png"} />) :

                    <div className="flex flex-col w-full overflow-x-hidden dark:bg-black bg-white">



                        <div className="" >
                            <Navbar />

                            <div className="flex flex-col h-auto w-full dark:bg-black  bg-white items-center mt-10" >

                                <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row  h-[32rem] w-2/3  mt-10 justify-evenly">

                                    <div className="flex h-full  w-full lg:w-2/5 2xl:w-2/5 xl:2/5 dark:border-gray-600 border-gray-200 ">

                                        {data.type === 'Video' ? (
                                            < video controls src={data.file} className="h-full w-full rounded-3xl"></video>
                                        ) : (data.type === 'Art' || data.type === 'Gif') ? (<img src={data.file} className="h-full w-full rounded-3xl"></img>) : (data.type === 'Music') ? (< video controls src={data.file} className="h-full w-full rounded-3xl"></video>) : (null)}
                                    </div>
                                    <div className="flex flex-col h-full w-2/5 dark:border-gray-600 border-gray-200 items-start space-y-3">
                                        <span className="font-bold text-2xl dark:text-white text-gray-600" >{data.name}</span>
                                        <span className="font-semibold text-lg dark:text-white text-gray-600">{data.type}</span>
                                        <label className="font-semibold text-lg dark:text-white text-gray-600 ">Price :</label>

                                        <input type='text' onChange={Handle_Price} value={price} className='flex flex-row h-8 dark:text-white text-gray-600 w-3/4 lg:w-2/5 xl:w-2/5 2xl:w-2/5 dark:bg-black bg-white outline-none border-gray-200 rounded-md border dark:border-gray-900 pl-2'></input>

                                        <label className="font-semibold text-lg dark:text-white text-gray-600 ">Price in eth :</label>
                                        <span className="font-semibold text-lg dark:text-white text-gray-600">{price * 0.00067} in eth</span>

                                        <button className=' flex h-[3.3rem] w-40 rounded-2xl dark:bg-white dark:text-black    bg-black  text-white hover:text-black hover:dark:text-white hover:dark:bg-slate-900 hover:bg-gray-900 justify-center items-center  font-medium' type="submit" onClick={addToMarket}>Sell</button>
                                    </div>
                                </div>
                                <div >




                                    <div class="flex flex-col my-20 ">
                                        <div class="-m-1.5 overflow-x-auto">
                                            <div class="p-1.5 w-full inline-block align-middle">
                                                <div class="border rounded-lg overflow-hidden dark:border-gray-900 border-gray-200 shadow-md dark:shadow-gray-900 shadow-gray-600 ">
                                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                        <thead>
                                                            <tr className="flex flex-row  items-center">

                                                                <th class="px-7 py-3 text-left text-xs font-medium text-gray-600 uppercase">Event</th>


                                                                <th class="px-20 text-left text-xs font-medium text-gray-600 uppercase">Time</th>

                                                                <th class=" px-64 py-3 text-left text-xs font-medium text-gray-600 uppercase">Link</th>

                                                            </tr>

                                                        </thead>
                                                        <tbody class="divide-y divide-gray-200 dark:divide-gray-900">
                                                            <tr>

                                                                {history.map((history, index) => (



                                                                    <div key={index}>

                                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{history.event}</td>
                                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{history.time}</td>
                                                                        <td><a class="text-blue-500 hover:text-blue-700" href={`https://goerli.etherscan.io/tx/${history.tx}`}>{history.tx}</a></td>

                                                                    </div>

                                                                ))}


                                                            </tr>



                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>)

    )

}

export default Sell



export async function getServerSideProps({ params: token }) {

    console.log(token)
    return {
        props: { token },
    }
}