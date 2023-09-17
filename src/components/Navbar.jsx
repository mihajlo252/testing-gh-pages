import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavStyles from "./NavStyles.module.css";
import { LuMenu } from "react-icons/lu";

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = (e) => {
    e.preventDefault()
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="bg-base-100 w-full min-h-16 items-center grid grid-cols-[1fr_1fr] px-32 pt-14 relative overflow-x-hidden">
      {/* <h1
        className={`normal-case text-4xl w-max font-bold text-[#eaeaea]`}
      > */}
        <img src="/logo.svg" alt="" className="w-20" />
      {/* </h1> */}
      <button
        className="btn btn-ghost place-self-end p-0 z-10"
        type="button"
        onClick={handleToggleMenu}
      >
        <LuMenu size={36} />
      </button>
      <div className={`flex flex-col place-self-end gap-10 absolute ${NavStyles.menu}`} data-toggle={toggleMenu ? "true" : "false"}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `btn hover:bg-transparent hover:text-[#eaeaea] p-0 bg-transparent border-none normal-case text-xl ${
              NavStyles.navlink
            } ${isActive ? "text-[#eaeaea]" : " text-slate-400"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            `btn hover:bg-transparent hover:text-[#eaeaea] p-0 bg-transparent border-none normal-case text-xl ${
              NavStyles.navlink
            } ${isActive ? "text-[#eaeaea]" : "text-slate-400"}`
          }
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};
