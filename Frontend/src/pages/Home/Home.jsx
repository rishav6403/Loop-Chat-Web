import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessagesContainer from "../../components/messages/MessagesContainer";

const Home = () => {
  return (
    <>
      <div className="container " id="Home-container">
        <div className="container d-flex">
          <Sidebar />
          <MessagesContainer/>
        </div>
      </div>
    </>
  );
};

export default Home;
