
import React, { useRef } from "react";
import Web3 from "web3";
import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../../lib/firebase";
import Navbar from "../../components/Navbar/Navbar";
// import countapi, { set } from 'countapi-js'
import { tradingAbi, tradingAddress } from "../../contracts/tradingInfo/info";
import { useRouter } from "next/router";

import Discover_Loading from "../../components/Dynamic_Pages_Layout/Discover_Loading";
import Load_mint from "../../components/Loading_Minting/Load_mint";
import { useCookies } from "react-cookie";
import { Cardv1 } from "../../components/Cards/cardv1";

// import axios from 'axios'
const Buy = ({ token }) => {

  const [cookies1, setCookie] = useCookies(['ip']);
  const [cookies] = useCookies(["user"]);
  const [data, setData] = useState({});
  const [price, setPrice] = useState("");
  const [ac, setAc] = useState("")
  const [ti, setTi] = useState("")
  const [open, setOpen] = useState(undefined)
  const router = useRouter();
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [check, setCheck] = useState(1)
  const [like, setLikes] = useState({})
  const [similar, setSimilar] = useState([])
  let type = ''
  let owner = ''
  let tokenids = ''
  function change() {

    read()
    if (click === true && count2 < 1) {

      setCount2(count2 + 1)
      let counter = Number(like.likes);
      console.log("counter", counter)
      counter = counter + 1
      firestore.collection("NFTS").doc(`${token.tokenid}`).update({
        likes: counter,

      }


      )
      setCheck(check - 1)
      read()
    }
    else if (check === 0 && count2 >= 1) {
      read()
      setCount2(count2 - 1)
      console.log("count2", count2)
      let counter = Number(like.likes);
      counter = counter - 1
      firestore.collection("NFTS").doc(`${token.tokenid}`).update({
        likes: counter,
      })
      setCheck(check + 1)

    }
    setClick(!click)

  }
  const [click, setClick] = useState(false)

  const Handle_Price = (e) => {
    e.preventDefault();
    if (e != undefined) {
      (setPrice(e.target.value));
    }
  }
  // let alpha
  useEffect(() => {
    async function Nftlogic() {
      if (typeof window !== 'undefined') {
        setLoading(true)
        const token_idd = token.tokenid
        setTi(token_idd)
        setAc(cookies.user)
        const folder_data = await firestore.collection('NFTS').doc(`${token_idd}`).get().then((folder_data) => {
          const display = folder_data.data();
          console.log(display)
          type = display.type
          owner = display.owner
          setData(display)
          setHistory(display.history)
          setLoading(false)
        });
        const array = []
        const similarynfts = await firestore.collection('NFTS').where("type", "==", type).where('owner', '==', owner).limit(5).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            array.push({ docid: doc.id, ...doc.data() })
          })
        }).then(() => {
          setSimilar(array)
          console.log("simi ", array)
        })
      }

    }
    Nftlogic();

  }, [])

  async function read() {
    const folder_data = await firestore.collection('NFTS').doc(`${token.tokenid}`).get().then((folder_data) => {
      const display = folder_data.data();
      console.log(display)
      setLikes(display)
      console.log("likes", like)
    });




  }


  const BuyNft = async () => {
    setLoading(true)
    console.log(data)
    const appendHistory = data.history
    console.log(appendHistory)
    if (typeof window !== 'undefined') {

      const web3 = new Web3(window?.ethereum);
      const accounts = await web3.eth.getAccounts();
      const MarketContract = new web3.eth.Contract(tradingAbi, tradingAddress);
      const pr = data.price
      const wei = web3.utils.toWei(pr.toString(), "ether")
      console.log(wei)
      MarketContract.methods.buyItem(data.newItemid).send({ from: accounts[0], value: wei })
        .then((result) => {
          console.log(result)
          appendHistory.push({
            "event": "Buy",
            "time": new Date().toLocaleString(),
            "tx": result.transactionHash,
          })
          const ref = firestore.collection('metamask').doc(`${cookies.user}`).collection("mynfts").doc();
          ref.set({
            name: data.name,
            description: data.description,
            type: data.type,
            file: data.file,
            metametadata: data.metametadata,
            tx: result.transactionHash,
            tokenid: data.tokenid,
            event: "Buy",
            gasused: result.gasUsed,
            owner: result.from,
            to: result.to,
            block: result.blockNumber,
            history: appendHistory,
            price: pr
          }).then((res) => {
            firestore.collection('NFTS').doc(`${token.tokenid}`).delete().then((res) => {
              console.log(res)
              setLoading(false)
              setOpen(true)
            }).catch((error) => {
              setOpen(false)
              console.log(error)
            })

          }).catch((error) => {
            console.log(error)
          })
        }).catch((error) => { console.log(error) })
    }
  }




  // convert eth to wei 

  return (

    (loading) ? (<Discover_Loading />) :
      (

        (open === true) ? (<Load_mint Text={"Nft Bought"} src={"/accept.png"} />) : (open === false) ? (<Load_mint Text={"Nft Buying Failed"} src={"/delete.png"} />) :

          <div className="flex flex-col w-full overflow-x-hidden dark:bg-black bg-white" >

            <Navbar />

            <div className="flex flex-col h-auto w-full dark:bg-black  bg-white items-center mt-10" >
              <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row  h-[32rem] w-2/3  mt-10 justify-evenly">
                <div className="flex h-full  w-full lg:w-2/5 2xl:w-2/5 xl:2/5 dark:border-gray-600 border-gray-200 ">
                  {data.type === 'Video' ? (
                    < video controls src={data.file} className="h-full w-full rounded-3xl"></video>
                  ) : (data.type === 'Art' || data.type === 'Gif') ? (<img src={data.file} className="h-full w-full rounded-3xl"></img>) : (data.type === 'Music') ? (< video controls src={data.file} className="h-full w-full rounded-3xl"></video>) : (null)}

                </div>
                <div className="flex flex-col h-full mt-5 w-2/5 dark:border-gray-600 border-gray-200 items-start space-y-3">
                  <span className="font-bold  text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl dark:text-white text-gray-600">{data.name}</span>
                  <span className="font-semibold  text- base lg:text-lg xl:text-lg 2xl:text-lg dark:text-white text-gray-600">{data.type}</span>
                  <label className="font-semibold text- base lg:text-lg xl:text-lg 2xl:text-lg dark:text-white text-gray-600">Price :</label>
                  <span className="font-semibold text- base lg:text-lg xl:text-lg 2xl:text-lg dark:text-white text-gray-600">{data.price}</span>
                  <label className="font-semibold text- base lg:text-lg xl:text-lg 2xl:text-lg dark:text-white text-gray-600">Wallet id :</label>
                  <span className="font-semibold text- base lg:text-lg xl:text-lg 2xl:text-lg dark:text-white text-gray-600">{data.owner}</span>
                  <div>

                  </div>


                  <button className=' flex h-[3.3rem] w-40 rounded-2xl dark:bg-white dark:text-black    bg-black  text-white hover:text-black hover:dark:text-white hover:dark:bg-slate-900 hover:bg-gray-900 justify-center items-center  font-medium' type="submit" onClick={BuyNft}>Buy</button>




                </div>
              </div>
              <div className="mt-10 w-full ">

                <div className="flex flex-row w-full justify-center   mt-10 dark:text-white text-gray-600 text-lg font-bold my-10">

                  <h1 className="text-3xl text-white font-bold p-4 text-center mb-3">history </h1>


                </div>



                <div class="flex flex-col xs:w-full xxs:w-full sm:w-full md:w-full w-3/4 mx-auto">
                  <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
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
                <h1 className="text-3xl text-white font-bold p-4 text-center mb-3">Similary Nfts  </h1>
                <div className="flex flex-wrap gap-2 w-full items-start justify-center">
                  {similar.length === 0 ? <>
                  </> : <>
                    {similar.map((similar, index) => (
                      <div key={index}>
                        {similar.tokenid === data.tokenid ? (<div></div>) : (<div>
                          <Cardv1 link={`/buy_nft/${similar.docid}`} image={similar.file} edition={'1'} name={similar.name} eth={similar.price} price={similar.price * 12} type={similar.type} />
                        </div>)}
                      </div>
                    ))}
                  </>}
                </div >

              </div>
            </div>
          </div>
      )

  )

}

export default Buy



export async function getServerSideProps({ params: token }) {

  console.log(token)
  return {
    props: { token },
  }
}