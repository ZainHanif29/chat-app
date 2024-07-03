import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import HomePage from "./component/home-page";
import Login from "./component/login";
import Signup from "./component/sign-up";
import { useSelector } from "react-redux";

const RouteSetup = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (authUser == null) {
  //     navigate("/login");
  //   } else {
  //     navigate("/");
  //   }
  // }, [authUser, navigate]); // Dependency array

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default RouteSetup;
