"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import HonorablePersonCard from "./HonorablePersonCard";

export default function App() {
  return (
    <div className="col-span-3 mt-10 ml-12">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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
  );
}
