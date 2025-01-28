import React from "react";

function Herosection() {
  return (
    <div>
      <div className="relative w-full h-48 sm:h-64 md:h-32 lg:h-28 bg-cover bg-center overflow-hidden herobgImage">
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h2 className="font-extrabold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] Montserrat text-white uppercase leading-tight">
              Privacy Policy
            </h2>
            <p className="text-white uppercase Montserrat font-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] mt-2">
              Valid as of January 12, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
