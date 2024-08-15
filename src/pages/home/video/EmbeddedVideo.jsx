"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegSquareCaretRight } from "react-icons/fa6";
const EmbeddedVideo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative antialiased">
      <main className="relative flex flex-col justify-center overflow-hidden">
        <>
          <div className="flex justify-center">
            {/* Modal video component */}
            <div className="[&_[x-cloak]]:hidden">
              <h1 className="text-xl flex items-center gap-1 px-1 py-2 bg-violet-50 rounded-md">
                <FaRegSquareCaretRight className="text-red" />{" "}
                <span> বন্যার সময় কি করণীয়</span>
              </h1>
              {/* Video thumbnail */}
              <button
                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-md group"
                onClick={() => setModalOpen(true)}
                aria-controls="modal"
                aria-label="Watch the video"
              >
                <Image
                  className="rounded-md shadow-2xl transition-shadow duration-300 ease-in-out w-full h-full"
                  src="/images/videoThumbnail/flooeds.webp"
                  // width="768"
                  // height="432"
                  width={768}
                  height={432}
                  alt="Modal video thumbnail"
                />
                {/* Play icon */}
                <svg
                  className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                >
                  <circle
                    className="fill-white"
                    cx="36"
                    cy="36"
                    r="36"
                    fillOpacity=".8"
                  />
                  <path
                    className="fill-violet-700 drop-shadow-2xl"
                    d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                  />
                </svg>
              </button>
              {/* End: Video thumbnail */}

              {/* Modal backdrop */}
              {modalOpen && (
                <div
                  className="fixed inset-0 z-[99998] bg-black bg-opacity-50 transition-opacity"
                  aria-hidden="true"
                  onClick={() => setModalOpen(false)} // Close modal on backdrop click
                />
              )}
              {/* End: Modal backdrop */}

              {/* Modal dialog */}
              {modalOpen && (
                <div
                  id="modal"
                  className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
                  role="dialog"
                  aria-modal="true"
                  onClick={() => setModalOpen(false)} // Close modal on clicking anywhere outside the video
                >
                  <div
                    className="max-w-5xl mx-auto h-full flex items-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                  >
                    <div className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                      <video
                        width="1920"
                        height="1080"
                        loop
                        controls
                        autoPlay={modalOpen}
                      >
                        <source
                          src="https://cruip-tutorials.vercel.app/modal-video/video.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              )}
              {/* End: Modal dialog */}
            </div>
            {/* End: Modal video component */}
          </div>
        </>
      </main>
      {/* Banner with links */}
      {/* {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
            <div className="text-slate-500 inline-flex">
              <a
                className="font-medium hover:underline text-indigo-500 flex items-center"
                href="https://github.com/cruip/cruip-tutorials/blob/main/modal-video/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <span>Download</span>
                <svg
                  className="fill-indigo-400 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                >
                  <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
                </svg>
              </a>
            </div>
            <button
              className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default EmbeddedVideo;
