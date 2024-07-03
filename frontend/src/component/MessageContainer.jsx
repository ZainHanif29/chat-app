import React from "react";
import SendInput from "./SendInput";
import Message from "./Message";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { authUser } = useSelector((store) => store.user);

  return (
    <>
      <div className="md:min-w-[550px] flex flex-col">
        <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s"
                alt="user-profile"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <p>Zain Hanif</p>
            </div>
          </div>
        </div>
        <Message />
        {/* <SendInput /> */}
      </div>
    </>
  );
};

export default MessageContainer;
