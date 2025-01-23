import React from "react";
import Image from "next/image";
import Phone from "@/Image/phone.svg";
import email from "@/Image/email.svg";
import map from "@/Image/map.svg";
import contactbg from "@/Image/contactbg.svg";
function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="relative py-12 container mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0  ">
            <Image
              src={contactbg}
              alt="logo"
              className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
            ></Image>
          </div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:flex lg:items-center lg:justify-between text-white">
          {/* Left Section - Contact Details destop */}
          <div className="lg:w-1/2 relative max-w-[282px] bottom-[30px] md:max-w-[500px] md:ml-[70px] space-y-6 md:bottom-[10px] lg:bottom-[62px]">
            <h2 className="text-[20px] md:text-4xl font-bold md:mb-4">
              CONTACT US
            </h2>
            <p className="text-justify mb-8 max-w-[350px] text-xs md:text-sm ">
              Lorem ipsum dolor sit amet consectetur. Tristique sociis nunc amet
              erat. Aenean magna lectus viverra eros nullam at ac. Et auctor
              massa tellus vestibulum. Posuere facilisis sed nunc elementum
              condimentum sed ultrices. Feugiat ultrices eu risus.{" "}
            </p>

            {/* Contact Details */}
            <div className="space-y-4 text-lg relative top-[40px] lg:top-[94px] md:top-[50px]">
              <div className="flex items-center text-black pb-4">
                <span className="w-10 p-2 h-10 bg-red-500 text-white rounded  flex justify-center items-center mr-4">
                  <Image src={Phone} alt="logo"></Image>
                </span>
                <p className="text-sm">
                  <strong> Phone</strong> <br />
                  <span className="text-xl">+91 123-456-7890</span>
                </p>
              </div>
              <div className="flex items-center text-black pb-4">
                <span className="w-10 p-2  h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
                  <Image src={email} alt="logo"></Image>
                </span>
                <p className="text-sm">
                  <strong>Email ID </strong> <br />
                  <span className="text-xl">info@lehar.com</span>
                </p>
              </div>
              <div className="flex items-center text-black pb-4">
                <span className="w-14 p-2 h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
                  <Image src={map} alt="logo"></Image>
                </span>
                <p className="text-sm">
                  <strong> Address</strong> <br />
                  <span className="text-xl">
                    407, 4th Floor, SNS Synergy, Surat - Dumas Rd, Above
                    Mahindra howroom, Surat, Gujarat
                  </span>
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mr-[70px] max-w-[500px] bg-white border border-[#E1E4EA] lg:px-[50px] p-8 rounded-lg shadow-lg md:mt-8 lg:mt-8 relative top-[10px] md:mx-auto">
            <h3 className="text-2xl font-bold text-[#FE434C] mb-4">
              GET IN TOUCH!
            </h3>
            <p className="text-black text-sm font-normal mb-4 max-w-[340px]">
              Write us a few words about your project and we’ll prepare a
              proposal for you within 24 hours.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border text-xs border-[#273252]"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-3 border text-xs border-[#273252]"
              />
              <input
                type="email"
                placeholder="Phone Number"
                className="w-full p-3 border text-xs border-[#273252]"
              />
              <input
                type="email"
                placeholder="Subject"
                className="w-full p-3 border text-xs border-[#273252]"
              />
              <textarea
                // type="email"
                placeholder="type a Message"
                className="w-full p-3 border text-xs border-[#273252] h-32  "
              />

              <div className="md:flex md:justify-between mt-7">
                <button
                  type="submit"
                  className="w-full p-3 text-white border text-sm font-bold rounded mr-7 bg-[#FE434C] uppercase "
                >
                  Send Message
                </button>
                <button
                  type="submit"
                  className="w-full p-3 mt-5 md:mt-0 text-white border text-sm font-bold rounded uppercase bg-[#FE434C]"
                >
                  clear all
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
