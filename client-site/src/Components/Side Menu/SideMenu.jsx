import React from "react";
import menuBg from "/Photos/pexels-solliefoto-313700.jpg";
import reservationBg from "../../../public/Photos/pexels-olly-831012.jpg";
import restaurantBg from "../../../public/Photos/pexels-brett-sayles-1322184.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
const SideMenu = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 min-h-full">
      {/* Menu items go here */}
      <div
        style={{ backgroundImage: `url(${menuBg})` }}
        className="bg-cover relative bg-center md:h-[300px] rounded-lg shadow-lg p-4 flex items-center justify-center"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <Link
          to={"/menu"}
          className="group absolute bottom-0 right-0 z-20 bg-black p-3 rounded-tl-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="uppercase font-cabinetGroteskRegular tracking-wider text-xs md:text-base">
              Menu
            </p>
            <div className="bg-gray-500/30 p-0.5 md:p-1 border rounded-full overflow-hidden relative">
              <ArrowRight className="group-hover:translate-x-[150%] duration-300 absolute" />
              <ArrowUpRight className="-translate-x-[150%] group-hover:translate-x-0 duration-300" />
            </div>
          </div>
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${reservationBg})` }}
        className="bg-cover relative bg-center md:h-[300px] rounded-lg shadow-lg p-4 flex items-center justify-center"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <Link
          to={"/reservation"}
          className="group absolute bottom-0 z-20 right-0 bg-black p-3 rounded-tl-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="uppercase font-cabinetGroteskRegular tracking-wider text-xs md:text-base">
              Reservation
            </p>
            <div className="bg-gray-500/30 p-0.5 md:p-1 border rounded-full overflow-hidden relative">
              <ArrowRight className="group-hover:translate-x-[150%] duration-300 absolute" />
              <ArrowUpRight className="-translate-x-[150%] group-hover:translate-x-0 duration-300" />
            </div>
          </div>
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${restaurantBg})` }}
        className="bg-cover relative bg-center col-span-2 md:col-span-1 md:h-[300px] rounded-lg shadow-lg p-4 flex items-center justify-center"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <Link
          to={"/menu"}
          className="group absolute z-20 bottom-0 right-0 bg-black p-3 rounded-tl-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="uppercase font-cabinetGroteskRegular tracking-wider text-xs md:text-base">
              Our Restaurant
            </p>
            <div className="bg-gray-500/30 p-0.5 md:p-1 border rounded-full overflow-hidden relative">
              <ArrowRight className="group-hover:translate-x-[150%] duration-300 absolute" />
              <ArrowUpRight className="-translate-x-[150%] group-hover:translate-x-0 duration-300" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
