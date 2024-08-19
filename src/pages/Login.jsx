import React from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div className="background">
      <Logo type="secondary" />
      <LoginForm />
    </div>
  );
};

export default Login;
