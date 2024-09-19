import React from "react";

const Message = () => {
  return (
    <>
     <div className="container mt-2">
  <div className="chat-message chat-end">
    <div className="mssgBox d-flex">
      <div id="profileImage">
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        className="rounded-circle"
        alt="Avatar"
        style={{width:"40px", height:"40px"}}
      />
      </div>
      <div className="bubbleContainer d-flex flex-column">
        <div className="px-2 pt-1 rounded-3 d-flex align-items-end" id="chatbox">
          <p className="">You were the Chosen One!</p>
        <small className="text-muted">12:45</small>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Message;
