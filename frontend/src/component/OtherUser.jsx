import React from "react";
import User from "./user";
import { useSelector, useDispatch } from "react-redux";

import useGetOtherUsers from "../hooks/useGetOtherUsers";

const OtherUser = () => {
  const { otherUsers } = useSelector((store) => store.user);

  if (!Array.isArray(otherUsers)) {
    return <h1 className="text-zinc-950 text-center">Not found</h1>;
  }

  return (
    <div className="overflow-auto flex-1">
      {otherUsers.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUser;
