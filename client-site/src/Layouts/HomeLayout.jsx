import React from "react";
import Hero from "../Components/Hero/Hero";
import SideMenu from "../Components/Side Menu/SideMenu";

const HomeLayout = () => {
  return (
    <div className="text-white">
      <div className="min-h-screen p-4 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Hero Section - Left */}
        <div className="md:col-span-2 flex items-center justify-center w-full min-h-full rounded-xl overflow-hidden">
          <Hero />
        </div>

        {/* Side Menu - Right */}
        <div className="w-full min-h-full rounded-xl overflow-hidden">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
