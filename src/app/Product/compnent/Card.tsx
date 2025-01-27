import React from "react";
import Image from "next/image";
import product from "@/app/Product/Image/product.svg";

function Card() {
  return (
    <>
      <div className="bg-[--bg-body] relative">
        <div className="container mx-auto md:flex">
          <div className=" pl-[16px] py-5 text-[22px] md:max-w-[300px] lg:max-w-[600px] lg:pl-24 lg:py-8 md:pl-[35px] md:pt-[20px]">
            <p className="lg:text-[40px] md:text-[20px]  font-extrabold text-black uppercase ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <div className=" md:mt-[-45%] md:ml-[70px] lg:mt-[-50%] md:mr-[12px] p-5 lg:p-0">
              {/* Placeholder for carousel */}
              <div className="mx-auto max-w-xs md:max-w-sm bg-white rounded-lg p-4">
                <Image src={product} alt="logo"></Image>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <span className="w-3 h-3 rounded-full bg-[--text-color]"></span>
                <span className="w-3 h-3 rounded-full bg-[--footer-text]"></span>
                <span className="w-3 h-3 rounded-full bg-[--footer-text]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
