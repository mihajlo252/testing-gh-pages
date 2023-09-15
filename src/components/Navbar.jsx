import React from "react";
import { NavLink } from "react-router-dom";
import NavStyles from "./NavStyles.module.css";
import { LuMenu } from "react-icons/lu";

export const Navbar = () => {
  return (
    <div className="bg-base-100 w-full min-h-16 items-center grid grid-cols-[1fr_1fr] px-32 pt-14">
      <h1
        className={`normal-case text-4xl w-max font-bold text-[#eaeaea]`}
      >
        Marko Stefanović
      </h1>
      <button
        className="btn btn-ghost min-[800px]:hidden place-self-end p-0"
        type="button"
      >
        <LuMenu size={36} />
      </button>
      <div className="flex place-self-end gap-10 max-[800px]:hidden">
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
