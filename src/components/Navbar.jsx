import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotstarLogo from "../assests/Image/Disney-Symbol.png";
import { BiSolidHome } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevision } from "react-icons/pi";
import { MdOutlineSportsHandball } from "react-icons/md";

export default function Navbar() {
  return (
    <div className=" top-0 left-0 right-0 z-20 w-full flex flex-col overflow">
      <div className="container mx-auto flex items-center space-x-4 md:space-x-16 px-4 md:px-10 py-3">
        <div className="bg-black w-28 p-4 fixed top-0 left-0 h-full rounded border flex flex-col items-center space-y-1">
          <div>
            <img className="w-28 py-5" src={hotstarLogo} alt="Hotstar Logo" />
            <div>
              <Link
                to="/login"
                className="transparent rounded border border-white bg-black bg-opacity-60 px-5 py-2 text-1g uppercase tracking-wider text-white transition-colors duration-200 ease-linear hover:bg-white hover:text-black"
              >
                Login
              </Link>
            </div>
          </div>
          {links.map((l, i) => (
            <NavItem key={i} Icon={l.icon} text={l.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ Icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer mr-9 items-center justify-end space-x-1 text-white size-28 flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon className="size-7" />
        <p
          className={`hover:text-lg ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const links = [
  { icon: BiSolidHome, text: "home" },
  { icon: BiCameraMovie, text: "movie" },
  { icon: MdOutlineSportsHandball, text: "sports" },
  { icon: PiTelevision, text: "Tv Show" },
];
