import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import useConversation from "../../zustand/useCoversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({conversation, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation()
const isSelected = selectedConversation?._id === conversation._id
const {onlineUsers} = useSocketContext();
const isOnline = onlineUsers.includes(conversation._id)

  return (
      <div
        className={`sidebarHover d-flex border-bottom border-secondary-subtle p-2 align-items-center ${isSelected ? "sidebarHoverSelect" : ""}` } id="sidebarNames"
        role="button" onClick={()=>{setSelectedConversation(conversation)}}>
        <div className="d-inline-flex position-relative" id="profileImage">
          <MDBBadge className={`position-absolute top-0 start-100 translate-middle p-1 bg-${isOnline?"success": "danger"} border border-light rounded-circle`} id="status" >
            <span className="visually-hidden ">New alerts</span>
          </MDBBadge>
          <img
            className="rounded-pill shadow-4 " 
            src={conversation.profilePic}
            style={{ width: "40px", height: "40px" }}
            alt="avatar"
          />
        </div>
        <div className="d-flex w-100 ms-2 justify-content-between" id="sidebarUsernameandImage">
        <p className="fw-semibold text-white pt-2">{conversation.fullName}</p>
          <span className="emoji fs-3">{emoji}</span>
        </div>
      </div>
  );
};

export default Conversation;
