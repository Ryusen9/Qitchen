import React from "react";
import HeroBg from "../../../public/Photos/Hero.jpg";
import { Facebook, Instagram, Twitter } from "lucide-react";
import BlurText from "../../Shared/BlurText";

const Hero = () => {
  return (
    <div
      className="min-h-full w-full bg-center bg-cover bg-no-repeat  relative"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      {/* Content */}
      <div className="absolute bottom-7 md:bottom-14 left-10 md:left-20 z-20">
        <BlurText
        text="Welcome to"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-white font-cabinetGroteskRegular font-semibold tracking-wider text-4xl md:text-6xl"
      />
       <BlurText
        text="Qitchen"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-white font-cabinetGroteskRegular font-semibold tracking-wider text-4xl md:text-6xl"
      />
      </div>
      {/* Socials */}
      <div className="absolute bottom-0 right-0 flex items-center justify-center gap-2 p-2 z-20 bg-black rounded-tl-lg">
        <a className="flex items-center border border-gray-200/15  justify-center cursor-pointer bg-gray-300/15 text-sm p-1 md:p-2 rounded-lg">
          <Instagram />
        </a>
        <a className="flex items-center border border-gray-200/15  justify-center cursor-pointer bg-gray-300/15 text-sm p-1 md:p-2 rounded-lg">
          <Facebook />
        </a>
        <a className="flex items-center border border-gray-200/15  justify-center cursor-pointer bg-gray-300/15 text-sm p-1 md:p-2 rounded-lg">
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default Hero;
