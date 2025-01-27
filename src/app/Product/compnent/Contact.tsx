import React from "react";
import Image from "next/image";
import Whatsapp from "@/app/Product/Image/Whatsapp.svg";

function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[--footer-text] md:pr-6 pr-2 py-8 text-white container mx-auto">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:px-2 px-4 flex items-center bg-[--bg-color] relative">
            <div>
              <h1 className="text-[14px] md:text-[12px] lg:text-[20px] xl:text-[32px] p-[8px] Montserrat font-extrabold text-center md:text-left">
                CAN&apos;T FIND WHAT YOU&apos;RE LOOKING FOR?
              </h1>
            </div>
            <div className="hidden md:block w-0 h-0 border-l-[50px] border-l-[--bg-color] border-t-[75px] border-t-[--footer-text] relative md:left-11"></div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-2 bg-[--bg-color] px-6 py-3 rounded-md font-bold text-[12px] md:text-[14px] hover:bg-green-600 cursor-pointer Inter mt-4 md:mt-0">
          <Image src={Whatsapp} alt="logo" className="w-8 md:w-9" />
          <span className="whitespace-nowrap text-center">
            CONTACT US ON WHATSAPP
          </span>
        </div>
      </div>
    </>
  );
}

export default Contact;
