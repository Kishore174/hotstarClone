import React from "react";
import Box from "./Slide/demo";
import Bottom from "./Bottom";
import { useNavigate } from "react-router-dom";

function Distney() {
  const navigate = useNavigate();
  return (
    <div className="w-full ">
      {/* Slide */}
      <Box />
      <div>
        <p className="text-white font-bold text-2xl pl-4  mt-4">
          Latest Release
        </p>
        <div className="relative max-h-[100%] max-w-screen-xl border-white pl-17 p-5 shadow-md flex space-x-4">
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/219/1640219-i-0ddf00e2e915",
            "Image 1"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7743/1637743-i-386a7df5ac11",
            "Image 2"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6376/1636376-i-5bbaa88952c2",
            "Image 3"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7922/1647922-i-c2ed92457ada",
            "Image 4"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac",
            "Image 5"
          )}
        </div>
      </div>

      <div>
        <p className="text-white font-bold text-2xl pl-4 mt-4">Tv Channels</p>
        <div className="relative max-h-[100%] border-white pl-8 p-5 shadow-md flex space-x-4">
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4940/1424940-a-6486777c0aa5",
            "Image 1"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4955/1424955-a-832227cfe913",
            "Image 2"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5227/1535227-a-93d6f25ed745",
            "Image 3"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4956/1424956-a-5e7b10f2c22a",
            "Image 4"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4951/1424951-a-eda1818aa83d",
            "Image 5"
          )}
        </div>
      </div>
      <div>
        <p className="text-white font-bold text-2xl pl-4 mt-4">Sports</p>
        <div className="relative max-h-[100%] border-white pl-8 p-5 shadow-md flex space-x-4">
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6630/1526630-a-9b9ea791cdaf",
            "Image 1"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6635/1526635-a-453e30065a30",
            "Image 2"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6639/1526639-a-741d71091ea7",
            "Image 3"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/744/1620744-a-4ef7d063b5c5",
            "Image 4"
          )}
          {renderMedia(
            "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/6643/1526643-a-95b16247c411",
            "Image 5"
          )}
        </div>

        {/* <p className="text-white font-bold text-2xl pl-4 mt-4">Hotstar Special</p> */}
        <div className="relative max-h-[500px] border-white pl-8 p-5 shadow-md flex space-x-4">
          <div className="w-60 h-40">
            <video autoPlay muted loop className="w-full h-full rounded-lg">
              <source
                src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-60 h-40" onClick={() => {}}>
            <video autoPlay muted loop className="w-full h-full rounded-lg">
              <source
                src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-60 h-40">
            <video autoPlay muted loop className="w-full h-full rounded-lg">
              <source
                src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-60 h-40">
            <video autoPlay muted loop className="w-full h-full rounded-lg">
              <source
                src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qc9clm_1669284974594"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-60 h-40">
            <video autoPlay muted loop className="w-full h-full rounded-lg">
              <source
                src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      {/* <footer>
        <Bottom />
      </footer> */}
    </div>
  );
}

const renderMedia = (src, alt) => (
  <div className="w-60 h-40 overflow-hidden hover:scale-110 transition-transform duration-300">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export default Distney;
