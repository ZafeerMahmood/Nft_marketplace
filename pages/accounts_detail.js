import React from "react";
import { Suspense } from "react";
import Discover_Loading from "../components/Dynamic_Pages_Layout/Discover_Loading";
const Accounts_layout = React.lazy(() =>
  import("../components/Account_Details/Accounts_Layout")
);
export default function accounts_detail() {
  return (
    <div className="flex dark:bg-black bg-white">
      <Suspense fallback={<div>{Discover_Loading()} </div>}>
        <Accounts_layout />
      </Suspense>
    </div>
  );
}
