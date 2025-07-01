import { Menu } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full md:w-[400px] md:top-12 md:left-10 z-50 p-1.5 md:rounded-xl bg-gray-950">
      <div className="flex items-center justify-center gap-3">
        {/* Menu logo */}
        <div>
          <button className="flex items-center border border-gray-200/15  justify-center bg-gray-300/15 p-1 rounded-lg">
            <Menu />
          </button>
        </div>
        {/* Logo */}
        <div>
          <img src="../../../public/assets/Logo.png" alt="" />
        </div>
        {/* Menu links */}
        <div className="flex font-cabinetGroteskRegular text-xs md:text-sm uppercase items-center justify-center gap-2.5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-gray-300/15 p-1.5 rounded-lg border border-gray-200/15" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "bg-gray-300/15 p-1.5 rounded-lg border border-gray-200/15" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? "bg-gray-300/15 p-1.5 rounded-lg border border-gray-200/15" : ""
            }
          >
            Book A Table
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
