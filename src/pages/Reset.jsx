import React from "react";
import Logo from "../components/Logo";
import ResetForm from "../components/ResetForm";

const Reset = () => {
  return (
    <div className="background">
      <Logo to="/" type="secondary" />
      <ResetForm />
    </div>
  );
};

export default Reset;
