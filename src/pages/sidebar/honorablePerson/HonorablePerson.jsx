"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import "./style.css";
// Import Swiper styles
import { RxExternalLink } from "react-icons/rx";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import HonorablePersonCard from "./HonorablePersonCard";
export default function HonorablePerson() {
  return (
    <div className="col-span-3 mt-10 md:ml-12 flex flex-col justify-between space-y-4 ">
      <div className="-z-0">
        <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-3 text-center">
          Ministry Officials
        </h1>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <>
            <SwiperSlide>
              <HonorablePersonCard
                img={"/images/honorablePerson/HonorableAdviser.jpg"}
                designation="মাননীয় উপদেষ্টা"
                name={"জনাব মোঃ নাহিদ ইসলাম"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HonorablePersonCard
                img={"/images/honorablePerson/HonorableSecretary.jpg"}
                designation="সচিব"
                name="জনাব মোঃ সামসুল আরেফিন"
              />
            </SwiperSlide>
          </>
        </Swiper>
      </div>
      <hr />
      <div className="bg-violet-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md p-2 space-y-2 border border-gray-300">
        <h1 className="flex items-center gap-2  ">
          <RxExternalLink className="text-green" />{" "}
          <Link
            href={"#"}
            className="text-blue-700 hover:text-red transition-colors"
          >
            অফিস সংযুক্তির আবেদন ফরম
          </Link>
        </h1>
        <h1 className="flex items-center gap-2  ">
          <RxExternalLink className="text-green" />{" "}
          <Link
            href={"#"}
            className="text-blue-700 hover:text-red transition-colors"
          >
            বার্ষিক কর্মসম্পাদন চুক্তির আবেদন ফরম
          </Link>
        </h1>
        <h1 className="flex items-center gap-2  ">
          <RxExternalLink className="text-green" />{" "}
          <Link
            href={"#"}
            className="text-blue-700 hover:text-red transition-colors"
          >
            অন্য কোনো লিংক{" "}
          </Link>
        </h1>
        <h1 className="flex items-center gap-2  ">
          <RxExternalLink className="text-green" />{" "}
          <Link
            href={"#"}
            className="text-blue-700 hover:text-red transition-colors"
          >
            অন্য কোনো লিংক{" "}
          </Link>
        </h1>
      </div>
    </div>
  );
}
