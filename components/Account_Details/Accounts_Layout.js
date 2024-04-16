import React, { Suspense } from "react";

const Accounts = React.lazy(() => import("./Accounts"));

const Accounts_Layout = ({ children }) => {
  return (
    <div className="">
      <Accounts />

      <main className="  ">{children}</main>
    </div>
  );
};
export default Accounts_Layout;
