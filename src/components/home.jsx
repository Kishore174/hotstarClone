import Bottom from "./Bottom";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import hotstarLogo from "../assests/Image/Disney-Symbol.png";
import { BiSolidHome } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Navbar */}
      <div className="fixed top-0 bottom-2 left-0 w-[7%] min-h-screen flex flex-col bg-black items-center space-y-0 h-full ">
        <div>
          <img className="w-28 py-5" src={hotstarLogo} alt="Hotstar Logo" />
        </div>
        {links.map((l, i) => (
          <NavItem key={i} Icon={l.icon} text={l.text} to={l.to} />
        ))}
      </div>

      {/* Content Container */}
      <div className="ml-[7%] w-[95%] p-4">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="w-[95%] p-4">
        <Bottom />
      </footer>
    </div>
  );
};

const NavItem = ({ Icon, text, to }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={to}>
      <div
        className="relative cursor-pointer mr-9 items-center justify-end space-x-2 text-white size-28 flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          <Icon className="size-6" />
          <p
            className={`hover:text-lg ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};

const links = [
  { icon: MdAccountCircle, text: "Login", to: "/login" },
  { icon: BiSolidHome, text: "Home", to: "/dashboard" },
  { icon: BiCameraMovie, text: "Movie", to: "/movies" },
  { icon: MdOutlineSportsBaseball, text: "Sports", to: "/sports" },
  { icon: PiTelevisionSimple, text: "TV List", to: "/tv-list" },
];

export default Home;
