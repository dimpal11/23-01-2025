import React from "react";
import Image from "next/image";
import Whatsapp from "@/app/Product/Image/Whatsapp.svg";

function Contact() {
  return (
    <>
      <div className="flex items-center justify-between bg-[--footer-text] pr-6 py-8 text-white">
        {" "}
        {/* Left Section */}
        <div className="flex items-center">
          <div className=" px-6 flex items-center bg-[--bg-color] relative">
            <div>
              <h1 className="text-[32px] p-[8px] Montserrat font-extrabold">
                CAN'T FIND WHAT YOU'RE LOOKING FOR?
              </h1>
            </div>
            <div className="w-0 h-0 border-l-[50px] border-l-[--bg-color] border-t-[75px] border-t-[--footer-text] relative left-11"></div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-2 bg-[--bg-color] px-8 py-2 rounded-md font-bold text-[14px] hover:bg-green-600 cursor-pointer Inter">
          <Image src={Whatsapp} alt="logo" className="w-9" />
          <span>CONTACT US ON WHATSAPP</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
