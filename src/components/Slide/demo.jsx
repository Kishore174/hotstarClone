import React from "react";
import Carousel from "./carousel";
import slide1 from "../../assests/Image/slide1.png";
import slide7 from "../../assests/Image/slide7.png";
import slide2 from "../../assests/Image/slide2.png";
import slide3 from "../../assests/Image/slide3.png";
import slide4 from "../../assests/Image/slide4.png";

function Box() {
  let slides = [
    { image: slide1 },
    { image: slide7 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
  ];

  return (
    <div className="ml-3 flex justify-center items-center w-[97%] h-full">
      <div className="w-[100%]">
        <Carousel slides={slides} imageHeight={800} imageWidth={1400} />
      </div>
    </div>
  );
}

export default Box;
