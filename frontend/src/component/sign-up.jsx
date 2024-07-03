import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const checkboxHandler = (gender) => {
    setUser({ ...user, gender });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const res = await axios.post("http://localhost:8000/api/register", user);
      console.log(res.data);
      toast.success(res.data.status);
    } catch (e) {
      console.log("Error-----", e);
      toast.error("Error-----", e);
    }

    // setUser({
    //   fullName: "",
    //   userName: "",
    //   password: "",
    //   confirmPassword: "",
    //   gender: "",
    // });
  };
  return (
    <>
      <div className="min-w-96 mx-auto">
        <div className=" w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          <h1 className="text-3xl font-bold text-center">Sign up</h1>
          <form onSubmit={submitHandler}>
            <div className="">
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered h-10 p-2"
                placeholder="Enter your name"
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              />
            </div>
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
            <div className="">
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered h-10 p-2"
                placeholder="Enter your confirm password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="flex items-center my-4">
              <div className="flex items-center">
                <p className="text-white">Male</p>
                <input
                  checked={user.gender == "male"}
                  onChange={() => {
                    checkboxHandler("male");
                  }}
                  type="checkbox"
                  className="checkbox checkbox-success"
                />
              </div>
              <div className="flex items-center">
                <p className="text-white">Female</p>
                <input
                  checked={user.gender == "female"}
                  onChange={() => {
                    checkboxHandler("female");
                  }}
                  type="checkbox"
                  className="checkbox checkbox-success"
                />
              </div>
            </div>
            <div className="text-center text-white">
              <Link to="/login">Already have an account?</Link>
            </div>
            <div className=" text-center">
              <button
                type="submit"
                className="btn btn-block border border-slate-900"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
