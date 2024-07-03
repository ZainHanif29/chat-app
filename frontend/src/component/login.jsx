import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser, setSelectedUser } from "../redux/userSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials
      const res = await axios.post('http://localhost:8000/api/login', user, {
        withCredentials: true, 
      });
      if (res.status == 200) {
        dispatch(setAuthUser(res.data));
        dispatch(setSelectedUser(res.data));
        toast.success(`Welcome ${res.data.userName}`);
        navigate('/');
      }else if(res.status == 400){
        toast.error(`Error ${res.status}`);
      }

      // if (res.data) {
      //   dispatch(setAuthUser(res.data.user));
      //   dispatch(setSelectedUser(res.data.user)); 
      //   toast.success(res.data.userName);
      //   navigate("/");
      // }

      // dispatch(setAuthUser(res.data.user));
      // dispatch(setSelectedUser(res.data.user));
      // console.log(res.data);

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed check");
    }

    // setUser({
    //   userName: "",
    //   password: "",
    // });
  };

  return (
    <>
      <div className="min-w-96 mx-auto">
        <div className=" w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={submitHandler}>
            <div className="">
              <label className="label p-2">
                <span className="text-base label-text">User Name</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered h-10 p-2"
                placeholder="Enter your user name"
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
              />
            </div>
            <div className="">
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered h-10 p-2"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="text-center text-white">
              <Link to="/sign">Dont' have an account?</Link>
            </div>
            <div className=" text-center mt-5">
              <button
                className="btn btn-block border border-slate-900"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
