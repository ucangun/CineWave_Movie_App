import React from "react";
import Logo from "../components/Logo";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="background">
      <Logo type="secondary" />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
