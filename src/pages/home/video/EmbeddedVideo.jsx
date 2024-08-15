"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegSquareCaretRight } from "react-icons/fa6";

const EmbeddedVideo = ({ title, thumbnail }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative antialiased">
      <main className="relative flex flex-col justify-center overflow-hidden">
        <div className="flex justify-center h-[50vh]">
          {/* Modal video component */}
          <div className="[&_[x-cloak]]:hidden w-full h-full">
            <h1 className="text-xl flex items-center gap-1 px-1 py-2 bg-violet-50 rounded-md">
              <FaRegSquareCaretRight className="text-red" />{" "}
              <span>{title}</span>
            </h1>
            {/* Video thumbnail */}
            <button
              className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300  group w-full h-full"
              onClick={() => setModalOpen(true)}
              aria-controls="modal"
              aria-label="Watch the video"
            >
              <Image
                className=" shadow-2xl transition-shadow duration-300 ease-in-out w-full h-full object-cover"
                src={thumbnail}
                alt="Modal video thumbnail"
                layout="fill"
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
      </main>
    </div>
  );
};

export default EmbeddedVideo;
