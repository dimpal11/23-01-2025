"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import product from "@/app/Product/Image/product.svg";

function Card() {
  return (
    <>
      <div className="bg-[--bg-body] relative">
        <div className="container mx-auto md:flex">
          {/* Left Text Section */}
          <div className="pl-[16px] py-5 text-[22px] md:max-w-[300px] lg:max-w-[600px] lg:pl-24 lg:py-8 md:pl-[35px] md:pt-[20px]">
            <p className="lg:text-[40px] md:text-[20px] font-extrabold text-black uppercase">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Right Swiper Section */}
          <div className="md:flex-1 p-5 lg:p-0 flex justify-end md:ml-[10%] lg:ml-0 md:mt-[-15%]">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper max-w-xs md:max-w-sm bg-white rounded-lg p-4 relative"
            >
              <SwiperSlide>
                <Image src={product} alt="Product 1" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={product} alt="Product 2" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={product} alt="Product 3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
