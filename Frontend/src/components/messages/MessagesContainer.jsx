import React, { useEffect } from "react";
import Messageinput from "./Messageinput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useCoversation";
import { useAuthContext } from "../../context/AuthContext";

const MessagesContainer = () => {
 const{selectedConversation, setSelectedConversation}   = useConversation();
 useEffect(()=>{
  return ()=> setSelectedConversation(null);

 },[setSelectedConversation])

  return (
    <>
      <div
        className="d-flex flex-column w-100"
        id="messagesContainer"
      >
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className=" row w-100 justify-content-between">
              <div className="bg-dark-subtle" id="recieverName">
                <span className="fs-5 fw-semibold text-white">To: </span>
                <span className="fs-4 fw-bold "> {selectedConversation.fullName}</span>
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
  const {authUser} = useAuthContext()
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100" id="noChatSelected">
        <p className="fw-bold text-white">Welcome 👋 {authUser.fullName}🔯</p>
        <p className="fw-bold text-white">Select a chat to start messaging</p>
        <TiMessages className="text-center fs-1 text-white" />
      </div>
    </>
  );
};
