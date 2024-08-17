"use client";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export default function PortalBannerSlider() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Image
            src={"/images/banner/portal/0.jpg"}
            width={700}
            height={200}
            alt="banner"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/banner/portal/1.jpeg"}
            width={720}
            height={150}
            alt="banner"
            className="w-full h-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/banner/portal/4.jpg"}
            width={720}
            height={150}
            alt="banner"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/banner/portal/5.jpg"}
            width={720}
            height={150}
            alt="banner"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/banner/portal/6.jpg"}
            width={720}
            height={150}
            alt="banner"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/banner/portal/6.png"}
            width={720}
            height={150}
            alt="banner"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/banner/portal/7.png"}
            width={720}
            height={150}
            alt="banner"
            className="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
