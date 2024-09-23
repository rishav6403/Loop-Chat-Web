import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import Loader from "../loader/Loader";
import useListenMesaages from "../../hooks/useListenMesaages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMesaages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <>
      <div className="flex-1 overflow-auto w-100" >
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
              <Message  message={message} />
          </div>
          ))}

        {loading ? <Loader /> : null}
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
