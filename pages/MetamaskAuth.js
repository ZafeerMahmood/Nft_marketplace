import React from "react";

const Metamask_Auth = React.lazy(()=>(import ("../components/MetamaskAuth/MetamaskAuthLayout")))
import Discover_Loading from "../components/Dynamic_Pages_Layout/Discover_Loading";
import { Suspense } from "react";
function MetamskAuth() {
  return (

    <div >
<Suspense fallback={<div>{Discover_Loading()}</div>}>
      <Metamask_Auth />
      </Suspense>
    </div>

  );
}

export default MetamskAuth;