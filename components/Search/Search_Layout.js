import React, { Suspense } from "react";

const Search_logic = React.lazy(() => import("./Search_logic"));

const Search_Layout = ({ children }) => {
  return (
    <div className="">
      <Search_logic />
      <main className=" ">{children}</main>
    </div>
  );
};
export default Search_Layout;
