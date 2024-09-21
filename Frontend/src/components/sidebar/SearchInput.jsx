import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import useConversation from "../../zustand/useCoversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from 'react-hot-toast'
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Please search at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found");
  };

  return (
    <>
      <form
        className="d-flex justify-content-center gap-3 border-bottom border-dark-subtle py-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" rounded-pill p-2"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="p-2 rounded-circle">
          <FcSearch size={25} />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
