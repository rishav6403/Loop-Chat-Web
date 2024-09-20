import React from "react";
import Messageinput from "./Messageinput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessagesContainer = () => {
  let noChatSelected = true;

  return (
    <>
      <div
        className="d-flex flex-column justify-content-between w-100"
        id="messagesContainer"
      >
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <div className=" row w-100">
              <div className=" w-100 bg-dark-subtle">
                <span className="fs-5 fw-semibold text-white">To: </span>
                <span className="fs-4 fw-bold "> John Doe</span>
              </div>
            </div>
            <Messages />
            <Messageinput />
          </>
        )}
      </div>
    </>
  );
};

export default MessagesContainer;

const NoChatSelected = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100" >
        <p className="fw-bold text-white">Welcome 👋 John Doe🔯</p>
        <p className="fw-bold text-white">Select a chat to start messaging</p>
        <TiMessages className="text-center fs-1 text-white" />
      </div>
    </>
  );
};
