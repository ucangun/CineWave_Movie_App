import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Switch from "./Switch";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 bg-slate-800 ">
      <Logo type="primary" />
      <div className="flex items-center gap-2">
        <Switch />
        <Button to="/login" type="secondary">
          Log in <span aria-hidden="true">&rarr;</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
