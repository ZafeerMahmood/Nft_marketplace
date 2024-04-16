import React from "react";

import { Suspense } from "react";
const Home_Layout = React.lazy(() => import("../components/Home/Home_Layout"));

import Discover_Loading from "../components/Dynamic_Pages_Layout/Discover_Loading";
export default function home() {
  return (
    <div className=" ">
      <Suspense fallback={<div>{Discover_Loading()} </div>}>
        <Home_Layout />
      </Suspense>
    </div>
  );
}
