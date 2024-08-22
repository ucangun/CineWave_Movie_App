import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Switch from "./Switch";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import userLogo from "../assets/images/user.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="flex items-center justify-between px-6 bg-slate-800 ">
      <Logo type="primary" />
      <div className="flex items-center gap-1.5">
        <p className="mr-2">{user?.displayName}</p>
        <Switch />
        {user ? (
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img
                  alt="default user"
                  src={user?.photoURL || userLogo}
                  className="rounded-full w-9 h-9"
                />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  Your Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  Settings
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  onClick={logout}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Logout
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        ) : (
          <Button to="/login" type="secondary">
            Log in <span aria-hidden="true">&rarr;</span>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
