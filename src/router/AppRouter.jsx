import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Movies from "../pages/Movies";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/signup" element=<SignUp /> />
        <Route path="/movies" element=<Movies /> />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
