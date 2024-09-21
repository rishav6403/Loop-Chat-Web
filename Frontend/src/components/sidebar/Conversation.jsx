import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import useConversation from "../../zustand/useCoversation";

const Conversation = ({conversation, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation()
const isSelected = selectedConversation?._id === conversation._id
  return (
      <div
        className={`sidebarHover d-flex rounded border-bottom border-secondary-subtle p-2 overflow-auto hover align-items-center ${isSelected ? "sidebarHoverSelect" : ""}` }
        role="button" onClick={()=>{setSelectedConversation(conversation)}}>
        <div className="d-inline-flex position-relative">
          <MDBBadge className="position-absolute top-0 start-100 translate-middle p-1  bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </MDBBadge>
          <img
            className="rounded-pill shadow-4"
            src={conversation.profilePic}
            style={{ width: "40px", height: "40px" }}
            alt="avatar"
          />
        </div>
        <div className="d-flex w-100 ms-2 justify-content-between">
        <p className="fw-semibold text-white pt-2">{conversation.fullName}</p>
          <span className="fs-3">{emoji}</span>
        </div>
      </div>
  );
};

export default Conversation;
