import { create as ipfsHttpClient } from "ipfs-http-client";
import { useEffect, useState, useContext } from "react";
import {
  mintinContractAddress,
  mintingContractAbi,
} from "../../contracts/mintingInfo/info";
import Web3 from "web3";
import { auth, firestore } from "../../lib/firebase";
import Load_mint from "../Loading_Minting/Load_mint";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_SECRET_KEY;
import Discover_Loading from "../Dynamic_Pages_Layout/Discover_Loading";
import Load_mint_success from "../Loading_Minting/Load_mint_success";
// import { Media } from 'reactstrap';
let counter = 0;
const authorization =
  "Basic " + Buffer.from(projectId + ":" + projectSecretKey).toString("base64");

let ipfs;
let carrier;

function MintingLogic() {
  const router = useRouter();

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");

  const [Type, setType] = useState("");
  const [cache_data, setCacheData] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [open, setOpen] = useState(undefined);
  let [Prev, setPreview] = useState("img11.jfif");

  const Handle_Name = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setName(e.target.value);
    }
  };

  const Handle_Description = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setDescription(e.target.value);
    }
  };

  const Handle_Type = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setType(e.target.value);
    }
  };

  async function Submit(Name, Type, Description) {
    console.log("Name", Name, "Type ", Type, "Description", Description);
  }

  ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });

  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview("img11.jfif");

      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

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
    console.log("lpc", cid_1);

    const ref = firestore.collection("Nft_Auth");
    console.log(
      "arr",
      (await firestore.collection("Nft_Auth").get()).docs[0].data()
    );
    const length = (await firestore.collection("Nft_Auth").get()).docs.length;
    let comapre = (await firestore.collection("Nft_Auth").get()).docs;

    let compare1 = comapre.map((idata) => {
      idata.data();
      let comparison = idata.data().cid_1;

      if (comparison === cid_1) {
        console.log("Already Exist");
        counter++;
      } else {
        console.log("Not Exist");
      }
    });

    console.log(comapre, "compare1");

    console.log(length);

    let url = "http://localhost:3000/mint/" + cid_1;

    url = url.toLowerCase();

    console.log(url);

    const getNft = async (cacheName, url) => {
      const data = new Response(JSON.stringify(cid_1));
      console.log("data check", data);
      if ("caches" in window) {
        caches.open(cacheName).then((cache) => {
          cache.put(url, data);

          console.log("ok");
        });
      }
      return data;
    };
    let teller = await getNft("Nfts", url);
    console.log("Dataaa", teller);

    const getSingleCacheData = async (cacheName, url) => {
      if (typeof caches === "undefined") return false;

      const cacheStorage = await caches.open(cacheName);
      console.log(cacheStorage);
      const cachedResponse = await cacheStorage.match(url);
      console.log("response", cachedResponse);
      // If no cache exists
      if (!cachedResponse || !cachedResponse.ok) {
        setCacheData("Fetched failed!");
        console.log("caaa", cache_data);
      } else {
        setCacheData("Fetched successfully!");
        console.log("xaaaa", cache_data);
        counter++;
      }
    };
    getSingleCacheData("Nfts", url);

    //  for (let index = 0; index < length; index++) {
    //   let compare=(await firestore.collection("Nft_Auth").get()).docs[index].data()
    //   compare = compare.cid_1;
    //   console.log("compare",compare)
    //   if(cid_1===compare)
    //   {
    //     console.log("Already Exist")
    //   event.target.reset()
    //        counter++;

    //   }

    //   }

    if (counter === 0) {
      getData(ipfs, cid_1);
      setUploadedImages([
        ...uploadedImages,
        {
          cid: result.cid,
          path: result.path,
        },
      ]);
      console.log("doesnot exist");
      ref.add({ cid_1 });
      console.log("image_data", uploadedImages);

      let Image = "".concat("https://Alpha.infura-ipfs.io/ipfs/", cid_1);
      console.log("Concatenate ", Image);

      Submit(Name, Type, Description);

      let Nft_MetaData = {
        name: Name,
        description: Description,
        image: Image,
      };
      let metadata_compile = await ipfs.add({
        content: JSON.stringify(Nft_MetaData),
      });
      console.log("Metadata", metadata_compile);
      let Image_1 = "".concat(
        "https://Alpha.infura-ipfs.io/ipfs/",
        metadata_compile.path
      );
      console.log("Link", Image_1);

      //call minting function here

      if (typeof window !== "undefined") {
        const web3 = new Web3(window?.ethereum);
        const accounts = await web3.eth.getAccounts();
        const tokenContract = new web3.eth.Contract(
          mintingContractAbi,
          mintinContractAddress
        );

        await tokenContract.methods
          .createItem(Image_1)
          .send({ from: accounts[0] })
          .then((result) => {
            let str = accounts[0];
            const metamaskDoc = firestore
              .doc(`metamask/${str.toLowerCase()}`)
              .collection("mynfts");
            metamaskDoc
              .doc()
              .set({
                name: Name,
                description: Description,
                type: Type,
                file: Image,
                metametadata: Image_1,
                tx: result.transactionHash,
                tokenid: result.events.Transfer.returnValues.tokenId,
                event: "Minted",
                gasused: result.gasUsed,
                from: result.events.Transfer.returnValues.from,
                to: result.events.Transfer.returnValues.to,
                block: result.blockNumber,
                history: [
                  {
                    event: "Minted",
                    tx: result.transactionHash,
                    time: new Date().toLocaleString(),
                  },
                ],
              })
              .then((res) => {
                console.log(res);
                carrier = res.history[0].tx;
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
              });
          });
      }
      if (!carrier) {
        const cacheName = "Nfts";
        const cacheStorage = await caches.open(cacheName);
        console.log("cache open", cacheStorage);
        const cachedResponse = await cacheStorage.delete(url);
        console.log("response", cachedResponse);
      }
      setLoading(false);
      setOpen(true);
    } else {
      const cacheName = "Nfts";
      const cacheStorage = await caches.open(cacheName);
      console.log("cache open", cacheStorage);
      const cachedResponse = await cacheStorage.delete(url);
      console.log("response", cachedResponse);
      setLoading(false);
      setOpen(false);
      form.reset();
    }
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

  return Loading ? (
    <Discover_Loading />
  ) : open === true ? (
    <Load_mint_success />
  ) : open === false ? (
    <Load_mint Text={"Nft Already Minted"} src={"/delete.png"} />
  ) : (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden ">
      <div className="">
        <Navbar />
      </div>

      {ipfs ? (
        <div className="flex flex-col h-fit w-full  dark:bg-black bg-white justify-center items-center ">
          <div className="flex flex-col h-fit w-full rounded-xl my-10   ">
            <form
              onSubmit={onSubmitHandler}
              className="flex-col flex items-center justify-center"
            >
              <div className="flex flex-col h-full space-y-2 ">
                <label className="flex  flex-row font-normal text-2xl dark:text-white text-gray-600 py-5  ">
                  Create Nft
                </label>
                <label className="flex dark:text-white text-gray-600">
                  Preview
                </label>

                <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  lg:space-x-5 xl:space-x-5 2xl:space-x-5 h-fit w-full items-center">
                  <div className="flex flex-row object-fill h-60 w-60">
                    {Type === "Video" ? (
                      <video
                        controls
                        src={Prev}
                        className="h-full w-full rounded-3xl"
                      ></video>
                    ) : Type === "Music" ? (
                      <video
                        controls
                        src={Prev}
                        className="h-full w-full rounded-3xl"
                      ></video>
                    ) : (
                      <img
                        className="h-full w-full rounded-3xl"
                        src={Prev}
                      ></img>
                    )}
                  </div>
                  <div className="flex flex-col  h-1/2 pt-5">
                    <input
                      type="file"
                      accept=".png , .jpg , .jfif , .mp4 , .mp3, .gif , .wav"
                      onChange={onSelectFile}
                      className="file-input file-input-bordered file-input-sm w-full  flex rounded-2xl border-2  dark:text-white  bg-black text-white border-gray-400  dark:bg-gray-900 dark:border-gray-800  hover:dark:bg-gray-600 hover:bg-gray-200 justify-center items-center  font-medium "
                    />
                  </div>
                </div>

                <label className="flex dark:text-white text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  onChange={Handle_Name}
                  value={Name}
                  className="flex flex-row h-8 dark:text-white text-gray-600 w-5/6 dark:bg-black bg-white outline-none border-gray-200 rounded-md border dark:border-gray-900 "
                ></input>
                <label className="flex dark:text-white text-gray-600">
                  Description
                </label>
                <input
                  type="text"
                  value={Description}
                  onChange={Handle_Description}
                  className="flex flex-row h-8 dark:text-white text-gray-600 w-5/6 dark:bg-black bg-white outline-none border-gray-200 rounded-md border dark:border-gray-900 "
                ></input>
                <label className="flex dark:text-white text-gray-600">
                  Select Type
                </label>
                <select
                  className="flex flex-row h-8 dark:text-white text-gray-600 w-5/6 dark:bg-black bg-white outline-none border-gray-200 rounded-md border dark:border-gray-900 "
                  onChange={Handle_Type}
                  value={Type}
                >
                  <option value="Music">Music</option>
                  <option value="Art">Art</option>
                  <option value="Gif">Gif</option>
                  <option value="Video">Video</option>
                </select>
                <button
                  className=" flex h-[3.3rem] w-4/5 mt-24 rounded-2xl dark:bg-white hover:dark:text-white hover:text-black    bg-black dark:text-black text-white hover:dark:bg-gray-900 hover:bg-gray-200 justify-center items-center  font-medium"
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}

export default MintingLogic;
