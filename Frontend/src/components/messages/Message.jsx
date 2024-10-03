import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useCoversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
const {authUser} = useAuthContext()
const{selectedConversation} = useConversation();
const formattedDateAndTime = extractTime(message.createdAt)
const fromMe = message.senderId === authUser._id;
const chatClassName = fromMe ? 'chat-end' : 'chat-start';
const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
const shakeClass = message.shouldShake? "shake" : '';


  return (
    <>
     <div className="mt-2">
  <div className={`chat-message ${chatClassName}`}>
    <div className="mssgBox d-flex">
      <div id="profileImage">
      <img
        src={profilePic}
        className="rounded-circle img1"
        alt="Avatar"
        style={{width:"40px", height:"40px"}}
      />
      </div>
      <div className={`bubbleContainer d-flex flex-column ${shakeClass}`}>
        <div className="px-2 pt-1 rounded-3 d-flex align-items-end" id="chatbox">
          <p className="">{message.message}</p>
        <small className="text-muted">{formattedDateAndTime}</small>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Message;
