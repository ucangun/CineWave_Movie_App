import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/details/:id" element={<PrivateRouter />}>
        <Route path="" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
