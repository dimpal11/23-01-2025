import React from "react";

function Get() {
  return (
    <div>
      <div className="bg-[--footer-text]">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[--footer-text] md:pr-16 pr-2 text-white container mx-auto">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:px-2 px-4 flex items-center bg-[--bg-color] relative lg:px-[40px] md:px-[20px] sm:px-[10px]">
              <div>
                <h1 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] p-[8px] Montserrat font-extrabold text-center md:text-left lg:max-w-[630px]">
                  If you have any queries or worries regarding data privacy,
                  kindly
                </h1>
              </div>
              <div className="hidden md:block w-0 h-0 border-l-[50px] md:border-l-[70px] border-l-[--bg-color] border-t-[80px] md:border-t-[112px] border-t-[--footer-text] relative md:left-[48px] lg:left-[64px]"></div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-2 bg-[--bg-color] px-4 py-2 md:pl-9 md:pr-6 md:py-3 rounded-e-md font-bold text-[10px] sm:text-[12px] md:text-[14px] cursor-pointer Inter mt-4 md:mt-0">
            {/* <Image src={Whatsapp} alt="logo" className="w-6 sm:w-7 md:w-9" /> */}
            <span className="whitespace-nowrap text-center uppercase">
              get in touch with us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get;
