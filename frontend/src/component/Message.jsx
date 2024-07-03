import React, { useEffect } from "react";
import SingleMessage from "./SingleMessage";
import useGetMessages from "../hooks/useGetMessages";

const Message = () => {

  // useGetMessages()
  return (
    <>
      <div className="px-4 flex-1 overflow-auto">
        <SingleMessage />
      </div>
    </>
  );
};

export default Message;
