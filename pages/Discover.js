import React, { Suspense } from "react";
const Discover_Layout = React.lazy(()=>import('../components/Discover/Discover_Layout'))

import Discover_Loading from '../components/Dynamic_Pages_Layout/Discover_Loading'



export default function Discover() {
  return (
    <div className=" bg-white dark:bg-black">
 <Suspense  fallback = { <div>{Discover_Loading()} </div>} > 
        <Discover_Layout/>
    </Suspense>
    </div>
  )
}

