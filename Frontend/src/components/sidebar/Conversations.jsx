import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emoji";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  
  return (
    <>
      <div className="mt-3 flex flex-column overflow-auto scroll-container" style={{ height: "58vh" }}>
    {conversations.map((conversation)=>(
        <Conversation 
        key={conversation._id}
        conversation = {conversation}
        emoji = {getRandomEmoji()}
        />
    ))}

        {loading ? (
          <div className="spinner-border text-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Conversations;
