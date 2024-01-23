import React from 'react'

const Movies = () => {
  return (
    <><div className='w-full'>
          <p className="text-white font-bold text-2xl pl-4  mt-4">
              <h1 className="text-5xl font-bold mb-4">Movies</h1>
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

      </div><div>
              <p className="text-white font-bold text-2xl pl-4  mt-4">
                
              </p>
              <div className="relative max-h-[100%] max-w-screen-xl border-white pl-17 p-5 shadow-md flex space-x-4">
                  {renderMedia(
                      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5392/1375392-t-a58dd666491a",
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

          </div></>
  )
}

const renderMedia = (src, alt) => (
    <div className="w-60 h-40 overflow-hidden hover:scale-110 transition-transform duration-300">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
export default Movies