import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-6">
      <Logo type="primary" />

      <Button to="/login" type="secondary">
        Log in <span aria-hidden="true">&rarr;</span>
      </Button>
    </nav>
  );
};

export default Navbar;
