import React from "react";
// import Image from "next/image";

function Contact() {
  return (
    <>
      <div>
        <div className=" relative w-full h-64 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center overflow-hidden bgImage">
          <div className="lg:container lg:mx-auto">
            <div className="text-white px-4 text-justify py-7 lg:pt-20 md:ml-4 lg:ml-20 md:pt-14 ">
              <h4 className="Montserrat font-extrabold md:text-[26px] lg:font48 ">
                CONTACT US
              </h4>
              <p className="Montserrat font-normal font14 md:max-w-80">
                Lorem ipsum dolor sit amet consectetur. Tristique sociis nunc
                amet erat. Aenean magna lectus viverra eros nullam at ac. Et
                auctor massa tellus vestibulum. Posuere facilisis sed nunc
                elementum condimentum sed ultrices. Feugiat ultrices eu risus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
