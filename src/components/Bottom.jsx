import React from "react";
import playstore from "../assests/Image/bottom.png";
import iosapple from "../assests/Image/bottom2.png";
import { FaCheck } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Bottom() {
  return (
    <div className="mt-auto pl-14 bg-black content-container">
      <div className="flex space-x-2 ">
        <div>
          <p className="text-white font-bold text-1xl pl-8 mt-6">Company</p>
          <div className="pl-9 mt-2">
            <p className="text-gray-300 text-sm">About Us</p>
            <p className="text-gray-300">carrer</p>

            <p className="text-gray-300 mt-2">
              Copyright © 2024 Your Company Name.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-white font-bold text-1xl pl-8 mt-6">
            View website
          </p>
          <div className="pl-9 mt-2">
            <div className="flex items-center">
              <FaCheck className="text-gray-500 mr-2" />
              <p className="text-gray-300 text-sm">English</p>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-gray-500 mr-2" />
              <p className="text-gray-300 text-sm">Tamil</p>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-gray-500 mr-2" />
              <p className="text-gray-300 text-sm">Telugu</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-white font-bold text-1xl pl-8 mt-6">need Help ?</p>
          <div className="pl-9 mt-2">
            <div className="flex items-center space-x-2">
              <IoCall className="text-white" />

              <p className="text-gray-300 text-sm">Vist help center</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaFacebookF className="text-white" />
              <p className="text-gray-300">share feedback</p>
            </div>
          </div>
        </div>

        <div className="justify-end">
          <div
            className=" mt-7
         pl-14 flex items-center"
          >
            <img
              className="w-28 py-5 right-4"
              src={playstore}
              alt="play store"
            />
            <img
              className="w-28 py-5 right-4"
              src={iosapple}
              alt="apple store"
            />
          </div>
        </div>
        <div>
          <p className="text-white font-bold text-2xl pl-12 mt-6">
            {" "}
            Contact US{" "}
          </p>
          <div className="pl-9 mt-2">
            <div className="flex items-center ">
              <FaFacebookF className=" text-white size-16" />
              <FaTwitter className=" text-white size-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
