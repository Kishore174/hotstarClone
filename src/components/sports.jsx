import React from 'react'

const Sports = () => {
  return (
    <div>
          <p className="text-white font-bold text-2xl pl-4  mt-4">
        <h1 className="text-5xl font-bold mb-4">Sports</h1>
        </p>
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
</div>
  )
}
const renderMedia = (src, alt) => (
    <div className="w-60 h-40 overflow-hidden hover:scale-110 transition-transform duration-300">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
    );
export default Sports;