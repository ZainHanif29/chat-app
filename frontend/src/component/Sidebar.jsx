import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUser from "./OtherUser";
import axios from "axios";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const logoutHandler = async () => {
try {
  const res = await axios.get('http://localhost:8000/api/logout');
  toast.success(res.data.message);
  navigate('/login')
} catch (error) {
  toast.error("Logout failed",error);
}    
  };
  return (
    <>
      <div className="border-r border-slate-500 p-4 flex flex-col">
        <form action="" className="flex items-center gap-2">
          <input
            type="text"
            className="input input-bordered rounded-md"
            placeholder="search..."
          />
          <button className="btn btn-zinc-400 text-white">
            <BiSearchAlt2 className="w-6 h-6 outline-none" />
          </button>
        </form>
        <div className="divider px-3"></div>
        <OtherUser />
        <div className="mt-2">
          <button className="btn btn-sm" onClick={logoutHandler}>
            logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
