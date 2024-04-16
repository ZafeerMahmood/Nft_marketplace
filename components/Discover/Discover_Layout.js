import React, { Suspense } from "react";

const Discover_logic = React.lazy(() => import("./Discover_logic"));

const Discover_Layout = ({ children }) => {
  return (
    <div className=" ">
      <Discover_logic />

      <main className="  ">{children}</main>
    </div>
  );
};
export default Discover_Layout;
