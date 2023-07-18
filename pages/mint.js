
import { Suspense } from "react";
import React from "react";
const Mint_Layout  = React.lazy(()=>(import("../components/Minting/MintLayout")))
import Discover_Loading from "../components/Dynamic_Pages_Layout/Discover_Loading";
function mint() {

  return (

    <div className="flex flex-col max-h-fit dark:bg-black bg-white" >
<Suspense fallback={Discover_Loading()}>
      <Mint_Layout />
      </Suspense>
    </div>

  );
}

export default mint;
