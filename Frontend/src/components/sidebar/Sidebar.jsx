import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <>
      <div
        className="container d-flex flex-column justify-content-between p-2"
        id="sideContainer"
      >
        <div>
          <SearchInput />
          <Conversations />
        </div>
      
          <Logout />
        
      </div>
    </>
  );
};

export default Sidebar;
