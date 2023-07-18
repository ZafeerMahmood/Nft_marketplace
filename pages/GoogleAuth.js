
import React from "react";

import { useState } from 'react';
import { useRouter } from "next/router";
import { Suspense } from "react";
const Google_Auth = React.lazy(()=> (import("../components/GoogleAuth/GoogleAuthLayout")))
import Discover_Loading from "../components/Dynamic_Pages_Layout/Discover_Loading";
function GoogleAuth() {
  return (

    <div >
      <Suspense fallback={<div>{Discover_Loading()}</div>}>
<Google_Auth/>
</Suspense>
    </div>

  );
}

export default GoogleAuth;