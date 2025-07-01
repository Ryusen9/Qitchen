import React from "react";
import menuBg from "/Photos/pexels-solliefoto-313700.jpg";
import reservationBg from "../../../public/Photos/pexels-olly-831012.jpg";
import restaurantBg from "../../../public/Photos/pexels-brett-sayles-1322184.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
const SideMenu = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
      {/* Menu items go here */}
      <div
        style={{ backgroundImage: `url(${menuBg})` }}
        className="bg-cover relative bg-center md:h-[300px] rounded-lg shadow-lg p-4 flex items-center justify-center"
      >
        <Link
          to={"/menu"}
          className="group absolute bottom-0 right-0 bg-black p-3 rounded-tl-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="uppercase font-cabinetGroteskRegular tracking-wider">Menu</p>
            <div className="bg-gray-500/30 p-1 border rounded-full overflow-hidden relative">
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
        <Link
          to={"/reservation"}
          className="group absolute bottom-0 right-0 bg-black p-3 rounded-tl-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="uppercase font-cabinetGroteskRegular tracking-wider">Reservation</p>
            <div className="bg-gray-500/30 p-1 border rounded-full overflow-hidden relative">
              <ArrowRight className="group-hover:translate-x-[150%] duration-300 absolute" />
              <ArrowUpRight className="-translate-x-[150%] group-hover:translate-x-0 duration-300" />
            </div>
          </div>
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${restaurantBg})` }}
        className="bg-cover relative bg-center md:h-[300px] rounded-lg shadow-lg p-4 flex items-center justify-center"
      >
        <Link
          to={"/menu"}
          className="group absolute bottom-0 right-0 bg-black p-3 rounded-tl-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="uppercase font-cabinetGroteskRegular tracking-wider">
              Our Restaurant
            </p>
            <div className="bg-gray-500/30 p-1 border rounded-full overflow-hidden relative">
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
