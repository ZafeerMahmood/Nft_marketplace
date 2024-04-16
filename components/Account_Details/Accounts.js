import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
const projectId = "2LBwhhN75SAeKHK0tKDY2eEaFtk";
const projectSecretKey = "dca85dffb42c250d07ed506bfea2b305";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3 from "web3";
import { auth, firestore } from "../../lib/firebase";
let counter = 0;
import Discover_Loading from "../Dynamic_Pages_Layout/Discover_Loading";

const authorization =
  "Basic " + Buffer.from(projectId + ":" + projectSecretKey).toString("base64");
let ipfs;

export default function Accounts({}) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Country, setCountry] = useState("");
  const [open, setOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const Handle_Name = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setName(e.target.value);
    }
  };

  const Handle_Country = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setCountry(e.target.value);
    }
  };

  const Handle_Email = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setEmail(e.target.value);
    }
  };

  ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });

  const [Prev, setPreview] = useState("img11.jfif");
  const [cookies] = useCookies(["user"]);
  const [selectedFile, setSelectedFile] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    if (!selectedFile) {
      setPreview("img11.jfif");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const copy = async () => {
    await navigator.clipboard.writeText(cookies.user);
    alert("Text copied");
  };
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }
    console.log(ipfsHttpClient);

    const file = files[0];
    console.log("file check", file);

    const result = await ipfs.add(file);
    console.log("the", result);

    console.log("Path= " + result.path, " Cid=" + result.cid.toString());
    const cid_1 = result.path;

    let url = "http://localhost:3000/mint/" + cid_1;

    url = url.toLowerCase();

    console.log(url);

    getData(ipfs, cid_1);
    setUploadedImages([
      ...uploadedImages,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    let Image = "".concat("https://Alpha.infura-ipfs.io/ipfs/", cid_1);
    console.log("Concatenate ", Image);

    let Account_Data = {
      Name: Name,
      Email: Email,
      Country: Country,
      Image: Image,
    };

    let metadata_compile = await ipfs.add({
      content: JSON.stringify(Account_Data),
    });
    console.log("Metadata", metadata_compile);
    let Image_1 = "".concat(
      "https://Alpha.infura-ipfs.io/ipfs/",
      metadata_compile.path
    );
    console.log("Link", Image_1);

    if (typeof window !== "undefined") {
      const web3 = new Web3(window?.ethereum);
      const accounts = await web3.eth.getAccounts();
      let str = accounts[0];
      // const user_account = firestore.doc(`metamask/${str.toLowerCase()}`).get();
      // console.log(user_account)
      firestore.doc(`metamask/${str.toLowerCase()}`).set({
        name: Name,
        email: Email,
        country: Country,
        file: Image,
        metametadata: Image_1,
      });
    }

    setOpen(true);

    setTimeout(() => {
      setOpen(false);
      setName("");
      setEmail("");
      setCountry("");
      setPreview("img11.jfif");
    }, 5000);
  };
  async function getData(ipfs, cid_1) {
    let alph = await ipfs.get(cid_1);
    let alpha = await ipfs.get();
    console.log("new alpha", alpha);
    console.log("alpha", alph);

    if (alph) {
      console.log("present");
    } else {
      console.log("not present");
    }
    for await (const iteration of alph) {
      console.log("Yess", iteration);
    }
  }
  return (
    // (isLoading) ? (<Discover_Loading/>) :
    <div className=" flex flex-col h-screen w-screen overflow-x-hidden">
      {open === false ? (
        <div className="">
          <Navbar />
          {ipfs ? (
            <div className="flex flex-col h-fit w-full  dark:bg-black bg-white justify-center items-center  ">
              <div className="flex flex-col h-fit w-full rounded-xl my-10 ">
                <form
                  onSubmit={onSubmitHandler}
                  className="flex-col flex items-center justify-center "
                >
                  <div className="flex flex-col h-full space-y-2 ">
                    <label className="flex  flex-row font-normal text-2xl dark:text-white text-gray-600 py-5 ">
                      My Accounts
                    </label>
                    <label className="flex dark:text-white text-gray-600 ">
                      Avatar
                    </label>

                    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  lg:space-x-5 xl:space-x-5 2xl:space-x-5 h-fit w-full items-center ">
                      <div className="flex flex-row object-fill h-60 w-60">
                        <img className="image rounded-lg  " src={Prev} />
                      </div>
                      <div className="flex flex-col  h-1/2 pt-5 ">
                        <input
                          type="file"
                          accept=".png , .jpg , .jfif"
                          onChange={onSelectFile}
                          className="file-input file-input-bordered file-input-sm w-full  flex rounded-2xl border-2  dark:text-white  bg-black text-white border-gray-400  dark:bg-gray-900 dark:border-gray-800  hover:dark:bg-gray-600 hover:bg-gray-200 justify-center items-center  font-medium "
                        />
                      </div>
                    </div>

                    <label className="flex dark:text-white text-gray-600">
                      Your Wallet Address
                    </label>
                    <div className="flex flex-row h-fit w-full dark:bg-slate-600 bg-white outline-none  rounded-md border dark:border-gray-900 border-gray-200  ">
                      <input
                        className=" h-8 w-11/12  dark:bg-slate-600 border-gray-200  dark:text-white rounded-md  outline-none  text-gray-600 "
                        value={cookies.user}
                        readOnly
                      />
                      <button onClick={copy}>
                        <img src="cp.png" width={20} height={10} />
                      </button>
                    </div>
                    <label className="flex dark:text-white text-gray-600">
                      Username
                    </label>
                    <input
                      type="text"
                      onChange={Handle_Name}
                      value={Name}
                      className="flex flex-row h-8 dark:text-white text-gray-600 w-5/6 dark:bg-black bg-white outline-none border-gray-200 rounded-md border dark:border-gray-900 "
                    ></input>
                    <label className="flex dark:text-white text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={Handle_Email}
                      value={Email}
                      className="flex flex-row h-8 dark:text-white text-gray-600 w-5/6 dark:bg-black bg-white outline-none border-gray-200 rounded-md border dark:border-gray-900 "
                    ></input>
                    <label className="flex dark:text-white text-gray-600">
                      Country
                    </label>
                    <input
                      type="text"
                      onChange={Handle_Country}
                      value={Country}
                      className="flex flex-row h-8 dark:text-white text-gray-600 w-5/6 dark:bg-black bg-white outline-none border-gray-200 rounded-md border dark:border-gray-900 "
                    ></input>
                    <button className=" flex h-[3.3rem] w-4/5 mt-24 rounded-2xl dark:bg-white hover:dark:text-white hover:text-black    bg-black dark:text-black text-white hover:dark:bg-gray-900 hover:bg-gray-200 justify-center items-center  font-medium">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
          <Footer />
        </div>
      ) : (
        <div className="flex flex-row w-screen h-[58rem] justify-center items-center dark:bg-black bg-white">
          <div class="flex w-full max-w-sm h-fit overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-center w-12 bg-emerald-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-emerald-500 dark:text-emerald-400">
                  Success
                </span>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Your account was registered!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
