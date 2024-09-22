import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-between p-2 w-50" id="sideContainer">
        <div>
        <SearchInput />
        <Conversations />
        </div>
        <div className="d-flex flex-column mt-3" id="logoutContainer">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
