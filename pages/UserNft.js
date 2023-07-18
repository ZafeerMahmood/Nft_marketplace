import React from "react";
import { Suspense } from "react";
const UserNftLayout = React.lazy(()=>import ("../components/UsersNft/UserNftLayout"))
import Discover_Loading from "../components/Dynamic_Pages_Layout/Discover_Loading";
function UserNft() {

  return (

    <div >
      <Suspense fallback={Discover_Loading()}>
      <UserNftLayout />
      </Suspense>
    </div>

  );
}

export default UserNft;
