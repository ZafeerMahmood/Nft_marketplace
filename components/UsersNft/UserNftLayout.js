import React from "react";
import UserNftLogic from "./UserNftLogic";
const UserNftLayout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <UserNftLogic />

      <main className="overflow-x-hidden">{children}</main>
    </div>
  );
};
export default UserNftLayout;
