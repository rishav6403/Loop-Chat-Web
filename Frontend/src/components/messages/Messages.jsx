import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/messageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <>
      <div className="flex-1 overflow-auto w-100" style={{ height: "70vh" }}>
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
              <Message  message={message} />
          </div>
          ))}

        {loading ? <MessageSkeleton /> : null}
        {!loading && messages.length === 0 && (
          <p className="text-center text-white fw-bold">
            Send a message to start the conversation
          </p>
        )}
      </div>
    </>
  );
};

export default Messages;
