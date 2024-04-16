import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { firestore } from "../../lib/firebase";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { CardUser } from "../Cards/Card";
import Discover_Loading from "../Dynamic_Pages_Layout/Discover_Loading";
import { useRouter } from "next/router";

function Home_Logic() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(["user"]);
  const router = useRouter();

  useEffect(() => {
    async function Nftlogic() {
      setLoading(true);
      if (typeof window !== "undefined") {
        if (cookies.user != undefined) {
          const array = [];
          firestore
            .collection("NFTS")
            .orderBy("newItemid", "desc")
            .limit(4)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                array.push({ docid: doc.id, ...doc.data() });
              });
            })
            .then(() => {
              setData(array);
              setLoading(false);
            });
        }
      }
    }
    Nftlogic();
  }, [cookies.user]);

  return loading ? (
    <Discover_Loading />
  ) : (
    <div className=" w-[100%]  dark:bg-black bg-white flex flex-col justify-evenly sm:space-y-5 xxs:space-y-5 xs:space-y-5  ">
      <div className="dark:bg-black bg-white w-full absoulte top-0">
        <Navbar />
      </div>

      {/* HOMEPAGE */}
      <div className="rounded-lg  w-[95%] h-fit mx-auto flex flex-col-reverse   lg:flex-row xl:flex-row 2xl:flex-row border border-opacity-20 justify-between dark:border-gray-900 border-gray-200 px-12 py-10 shadow-md dark:shadow-gray-900 shadow-gray-600">
        <div className="flex flex-col my-auto w-full mx-auto py-14">
          <p className="text-6xl font-bold dark:text-white text-gray-600 ">
            0% fees
          </p>
          <div className="flex flex-col flex-1">
            <p className=" text-md lg:text-lg   xl:text-lg  2xl:text-lg  font-semibold dark:text-white text-gray-600 ">
              on aggregated listings + High rewards for{" "}
            </p>
            <p className=" text-md lg:text-lg xl:text-lg 2xl:text-lg font-semibold dark:text-white text-gray-600">
              trading NFTs from collections YOU choose.
            </p>
          </div>
        </div>
        <div className="mb-5 w-full h-full">
          <img src="./profile.png" alt="p" />
        </div>
      </div>
      {/* HOMEPAGE */}

      <div className="dark:bg-black bg-white">
        <br />
        <br />
      </div>

      {/* 2ndpart */}
      <div className=" py-32 rounded-lg shadow-md w-[95%] h-fit space-y-8 mx-auto  flex flex-col lg:flex-row xl:flex-row 2xl:flex-row border border-opacity-20  dark:shadow-gray-900 shadow-gray-600  dark:border-gray-900 border-gray-200 dark:bg-black bg-white">
        <div className="flex flex-col justify-start my-auto w-full px-8 dark:text-white text-gray-600  ">
          <p className="text-4xl font-bold">Create NFT`s</p>
          <p className="text-4xl font-bold">for Your</p>
          <p className="text-4xl font-bold">Community</p>
          <div className=" flex flex-row text-md items-center">
            <p>Powered by</p>{" "}
            <p className="font-bold text-transparent   bg-gradient-to-r from-fuchsia-500 via-violet-400 to-emerald-500 bg-clip-text px-2">
              NFTVERSE
            </p>
          </div>

          <button
            className="btn btn-outline w-1/3 mt-2 dark:bg-white bg-black border-gray-800 dark:text-black dark:hover:text-white  dark:hover:bg-gray-900 hover:text-black text-white hover:bg-gray-900"
            onClick={(e) => {
              router.push("/mint");
            }}
          >
            create
          </button>
        </div>

        <div className=" hidden lg:flex xl:flex 2xl:flex flex-row  ml-[25rem] space-x-1 w-full  xs:-ml-[15rem] sm:-ml-[15rem]   p-10 md:-ml-[15rem] lg:-ml-[15rem] xl:-ml-[10rem] 2xl:-ml-[1rem] dark:bg-black bg-white  xs:-mt-20 sm:-mt-20  justify-end items-end">
          {data.map((data) => (
            <div key={data.id}>
              <CardUser
                link={`/buy_nft/${data.docid}`}
                image={data.file}
                edition={"1"}
                name={data.name}
                eth={data.price}
                price={data.price * 12}
                type={data.type}
              />
            </div>
          ))}
        </div>
        <div className=" mx-auto grid grid-cols-2 space-y-4 lg:hidden xl:hidden 2xl:hidden  space-x-1 w-fit dark:bg-black bg-white  xs:-mt-20 sm:-mt-20  justify-center items-center">
          {data.map((data) => (
            <div key={data.id}>
              <CardUser
                link={`/buy_nft/${data.docid}`}
                image={data.file}
                edition={"1"}
                name={data.name}
                eth={data.price}
                price={data.price * 12}
                type={data.type}
              />
            </div>
          ))}
        </div>
      </div>
      {/* 2ndpartend */}

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Home_Logic;
