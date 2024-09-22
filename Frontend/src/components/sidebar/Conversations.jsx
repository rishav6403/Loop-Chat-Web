import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emoji";
import Loader from "../loader/Loader";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  
  return (
    <>
      <div className="mt-3 flex flex-column overflow-y-auto scroll-container" style={{ height: "58vh" }}>
    {conversations.map((conversation)=>(
        <Conversation 
        key={conversation._id}
        conversation = {conversation}
        emoji = {getRandomEmoji()}
        />
    ))}

        {loading ? (
          <Loader/>
        ) : null}
      </div>
    </>
  );
};

export default Conversations;
