import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../../lib/firebase";
import { useCookies } from "react-cookie";
import { Cardv1 } from "../Cards/cardv1";
import Loader from "../loader/loader";
import Discover_Loading from "../Dynamic_Pages_Layout/Discover_Loading";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Discover() {
  function change() {
    setClick(!click);
  }
  const [click, setClick] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(["user"]);
  const options = [
    "From A to Z",
    "From Z to A",
    "Price: High to Low",
    "Price: low to high",
  ];

  const onOptionChangeHandler = (event) => {
    if (event.target.value === "From A to Z") {
      const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setData(sorted);
    } else if (event.target.value === "From Z to A") {
      const sorted = [...data].sort((a, b) => b.name.localeCompare(a.name));
      setData(sorted);
    } else if (event.target.value === "Price: High to Low") {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setData(sorted);
    } else if (event.target.value === "Price: low to high") {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setData(sorted);
    }
  };

  useEffect(() => {
    async function Nftlogic() {
      setLoading(true);
      if (typeof window !== "undefined") {
        if (cookies.user != undefined) {
          const array = [];
          firestore
            .collection("NFTS")
            .where("owner", "!=", cookies.user)
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
  }, []);

  return loading ? (
    <Discover_Loading />
  ) : (
    <div className="overflow-x-hidden h-screen">
      <Navbar />

      <div className="dark:bg-black flex bg-white flex-col px-30 justify-center">
        <div className="w-4/5 mx-auto ">
          <div className="flex flex-1 flex-row mt-5">
            <select
              className="select select-ghost w-full max-w-xs ring-0  dark:border-gray-900 border-gray-200 outline-none border rounded-md dark:bg-black bg-white text-gray-600 dark:text-white"
              onChange={onOptionChangeHandler}
            >
              <option className="outline-none">Sort</option>
              {options.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="p-1 flex mt-auto h-full w-full items-center justify-center space-x-1 space-y-1 dark:bg-black bg-white ">
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 dark:bg-black bg-white">
            {data.map((data, index) => (
              <div className="" key={data.id}>
                {
                  <div className="mt-4">
                    <Cardv1
                      link={`/buy_nft/${data.docid}`}
                      image={data.file}
                      edition={"1"}
                      name={data.name}
                      eth={data.price}
                      price={data.price * 12}
                      type={data.type}
                    />
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dark:bg-black  bg-white ">
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Discover;
