import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import { toastWarn } from "../helpers/ToastNotify";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    toastWarn("You must be logged in to access this page.");
    return <Navigate to="/login" />;
  }

  if (user) {
    return <Outlet />;
  }
};

export default PrivateRouter;
