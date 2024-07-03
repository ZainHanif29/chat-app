import React from "react";
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <>
      <form action="" className="px-4 my-3 ">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Send a message..."
            className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
          />
          <button className="flex absolute inset-y-0 end-0 pr-4 items-center">
            <IoSend />
          </button>
        </div>
      </form>
    </>
  );
};

export default SendInput;
