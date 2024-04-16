import React from "react";
import DarkModeButton from "../DarkModeButton";
import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../../lib/firebase";
import { useCookies } from "react-cookie";
import { Cardv1 } from "../Cards/cardv1";
import Footer from "../Footer/Footer";
// import Loader from '../components/loader/loader';
import Discover_Loading from "../Dynamic_Pages_Layout/Discover_Loading";
import { useRouter } from "next/router";
import Link from "next/link";

let address;
function Search_logic() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(["user"]);
  const [search, setSearch] = useState("");
  const [tempdata, setTempdata] = useState([]);
  const options = [
    "From A to Z",
    "From Z to A",
    "Price: High to Low",
    "Price: low to high",
  ];
  const route = useRouter();
  const [open, SetOpen] = useState("false");
  const [drop, setDrop] = useState(true);
  const [noresults, noResults] = useState(false);

  async function click() {
    // add code to disconnect the wallet
    SetOpen(false);
  }
  const routes = () => {
    route.push("/GoogleAuth");
  };

  const discover = () => {
    route.push("/Discover");
  };

  const home = () => {
    route.push("/home");
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
              setTempdata(array);
              setLoading(false);
            });
        }
      }
    }
    Nftlogic();
  }, []);

  useEffect(() => {
    async function Clicker() {
      if (typeof window !== "undefined") {
        if (cookies.user != undefined) {
          SetOpen(true);
          const str = cookies.user;
          address = str.substring(0, 9);
          address = address + ".....";
        } else {
          SetOpen(false);
        }
      }
      // SetOpen(!open)
    }
    Clicker();
  }, [open]);

  const searchProducts = (e) => {
    var searchedProducts = data.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    if (searchedProducts.length == 0) {
      noResults(true);
    } else {
      noResults((prev) => !prev);
    }
    setTempdata(searchedProducts);
  };

  return loading ? (
    <Discover_Loading />
  ) : (
    <div className="overflow-x-hidden w-screen h-screen ">
      <div className="dark:bg-black w-full px-30 justify-center">
        <div className="h-[4.5rem]  dark:bg-black flex bg-white border dark:border-gray-900 border-gray-200  relative ">
          <div className="flex w-44 flex-row justify-end   xs:p-5">
            <button
              className=" flex flex-row text-2xl font-bold text-transparent   bg-gradient-to-r from-fuchsia-500 via-violet-400 to-emerald-500 bg-clip-text   items-center"
              onClick={home}
            >
              NFTVERSE
            </button>
          </div>
          <div className="text-white lg:mx-4  w-[700px]  flex flex-col justify-center items-end ">
            <div className=" text-white  flex flex-col w-[500px] h-[35px]  dark:bg-[#070707] bg-[#ffffff] rounded-xl border border-gray-200 dark:border-gray-800 dark:hover:border-gray-900 hover:border-gray-400 xs:hidden">
              <svg
                class=" -my-1 mx-3 w-6 h-11  dark:text-white text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <input
                class=" flex  text-sm mx-12 -my-9 h-[33px] w-[450px] text-gray-600 dark:text-white dark:bg-[#070707] bg-[#ffffff]  rounded-2xl border border-transparent outline-none  placeholder:text-gray-600 dark:placeholder:text-white placeholder:text-start items-center justify-start "
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  searchProducts();
                  if (e.target.value === "") {
                    setTempdata(data);
                  }
                }}
                placeholder="Search by Collection , NFT or User"
              ></input>
            </div>
          </div>
          <div className="flex flex-row  justify-evenly items-center w-3/5 lg:-ml-4   ">
            <button
              className=" w-20  h-[30px] items-center justify-center bg-transparent dark:text-white text-gray-600 font-secondary text-base hover:font-bold hover:animate-pulse xs:hidden"
              onClick={home}
            >
              Home
            </button>
            <button
              className=" w-20  h-[30px] items-center justify-center bg-transparent dark:text-white text-gray-600 font-secondary text-base hover:font-bold hover:animate-pulse xs:hidden"
              onClick={discover}
            >
              Discover
            </button>

            {open === false ? (
              <button
                className="  w-28 h-[30px]  dark:bg-gray-900 dark:border-gray-800  border-2 items-center justify-center rounded-xl  dark:text-white  bg-[#000000] text-white border-gray-400 text-sm font-secondary hover:animate-pulse xs:hidden "
                onClick={routes}
              >
                Connect
              </button>
            ) : (
              // <button className="  w-28 h-[30px]  dark:bg-gray-900 dark:border-gray-800  border-2 items-center justify-center rounded-xl  dark:text-white  bg-[#000000] text-white border-gray-400 text-sm font-secondary hover:animate-pulse placeholder:text-white" onClick={click} >{address}</button>

              <div className="dropdown dropdown-bottom xs:hidden ">
                <button
                  tabIndex={0}
                  className="  w-28 h-[30px]  dark:bg-gray-900 dark:border-gray-800  border-2 items-center justify-center rounded-xl  dark:text-white  bg-[#000000] text-white border-gray-400 text-sm font-secondary  placeholder:text-white"
                >
                  {address}
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-1   rounded-box w-28 dark:bg-slate-900 bg-[#000000] "
                >
                  <li>
                    <button
                      className=" dark:bg-gray-900 dark:border-gray-800    dark:text-white  bg-[#000000]  text-white  border border-gray-800 hover:animate-pulse text-sm"
                      onClick={(e) => {
                        route.push("/accounts_detail");
                      }}
                    >
                      Account
                    </button>
                  </li>
                  <li>
                    <button
                      className=" dark:bg-gray-900 dark:border-gray-800    dark:text-white  bg-[#000000]  text-white  border border-gray-800 hover:animate-pulse text-sm"
                      onClick={(e) => {
                        route.push("/mint");
                      }}
                    >
                      Mint
                    </button>
                  </li>
                  <li>
                    <button
                      className="dark:bg-gray-900 dark:border-gray-800   dark:text-white  bg-[#000000]  text-white border border-gray-800  hover:animate-pulse text-sm"
                      onClick={(e) => {
                        route.push("/UserNft");
                      }}
                    >
                      Nfts
                    </button>
                  </li>
                  <li>
                    <button
                      className="dark:bg-gray-900 dark:border-gray-800   dark:text-white  bg-[#000000]  text-white border border-gray-800  hover:animate-pulse text-sm"
                      onClick={() => {
                        route.push("/GoogleAuth");
                      }}
                    >
                      Disconnect
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <div className="dropdown dropdown-bottom sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden  ">
              <button
                tabIndex={0}
                className="  w-16   hover:animate-pulse lg:-ml-2 "
                onClick={() => setDrop(!drop)}
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                  className="dark:fill-slate-900 fill-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="75"
                    height="60"
                    className="dark:fill-white fill-gray-600"
                    fill-opacity="0.01"
                  />
                  <path
                    d="M40 28L24 40L8 28"
                    stroke="#333"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 10H40"
                    stroke="#333"
                    stroke-width="1"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8 18H40"
                    stroke="#333"
                    stroke-width="1"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content menu p-1   rounded-box w-28 dark:bg-slate-900 bg-[#000000] "
              >
                <li>
                  <button
                    className=" dark:bg-gray-900 dark:border-gray-800    dark:text-white  bg-[#000000]  text-white  border border-gray-800 hover:animate-pulse text-sm"
                    onClick={(e) => {
                      route.push("/home");
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className=" dark:bg-gray-900 dark:border-gray-800    dark:text-white  bg-[#000000]  text-white  border border-gray-800 hover:animate-pulse text-sm"
                    onClick={(e) => {
                      route.push("/Discover");
                    }}
                  >
                    Discover
                  </button>
                </li>
                <li>
                  <button
                    className="dark:bg-gray-900 dark:border-gray-800   dark:text-white  bg-[#000000]  text-white border border-gray-800  hover:animate-pulse text-sm"
                    onClick={(e) => {
                      route.push("/Search_Page");
                    }}
                  >
                    Search
                  </button>
                </li>
                <li>
                  <button
                    className="dark:bg-gray-900 dark:border-gray-800   dark:text-white  bg-[#000000]  text-white border border-gray-800  hover:animate-pulse text-sm"
                    onClick={(e) => {
                      route.push("/UserNft");
                    }}
                  >
                    Nfts
                  </button>
                </li>

                <li>
                  <button
                    className="dark:bg-gray-900 dark:border-gray-800   dark:text-white  bg-[#000000]  text-white border border-gray-800  hover:animate-pulse text-sm"
                    onClick={(e) => {
                      route.push("/accounts_detail");
                    }}
                  >
                    Account
                  </button>
                </li>
                <li>
                  <button
                    className="dark:bg-gray-900 dark:border-gray-800   dark:text-white  bg-[#000000]  text-white border border-gray-800  hover:animate-pulse text-sm"
                    onClick={(e) => {
                      route.push("/mint");
                    }}
                  >
                    Mint
                  </button>
                </li>
                <li>
                  <button
                    className="dark:bg-gray-900 dark:border-gray-800   dark:text-white  bg-[#000000]  text-white border border-gray-800  hover:animate-pulse text-sm"
                    onClick={() => {
                      route.push("/GoogleAuth");
                    }}
                  >
                    Disconnect
                  </button>
                </li>
              </ul>
            </div>

            <DarkModeButton />
          </div>
        </div>

        {noresults && (
          <h1 className="p-20 h-full w-full font-bold dark:text-white text-black text-7xl"></h1>
        )}
        <div className="p-1 flex mt-auto h-full w-full items-center justify-center space-x-1 space-y-1 dark:bg-black bg-white  ">
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 dark:bg-black bg-white">
            {tempdata.map((data, index) => (
              <div className="mt-6" key={data.id}>
                {
                  <Cardv1
                    link={`/buy_nft/${data.docid}`}
                    image={data.file}
                    edition={"1"}
                    name={data.name}
                    eth={data.price}
                    price={data.price * 12}
                    type={data.type}
                  />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dark:bg-black w-full bg-white">
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Search_logic;
