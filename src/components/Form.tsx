import React from "react";
import Image from "next/image";
import Phone from "@/Image/phone.svg";
import email from "@/Image/email.svg";
import map from "@/Image/map.svg";

function Form() {
  return (
    <>
      <div className="bg-[--bg-body] relative flex container  mx-auto">
        <div className="relative w-full md:w-1/2 ">
          <div className="flex p-[20px]">
            <span className="w-10 p-2 h-10 bg-red-500 text-white rounded  flex justify-center items-center mr-4">
              <Image src={Phone} alt="logo"></Image>
            </span>
            <p className=" Montserrat font14 font-extrabold">
              <strong> Phone</strong> <br />
              <span className="font-medium font12 md:font14 lg:font20 Montserrat">
                +91 123 456 3698 | +91 985 985 4587
              </span>
            </p>
          </div>

          <div className="flex p-[20px]">
            <span className="w-10 p-2  h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
              <Image src={email} alt="logo"></Image>
            </span>
            <p className="Montserrat font14 font-extrabold">
              <strong>Email ID </strong> <br />
              <span className="font-medium font12 md:font20 Montserrat">
                info@lehar.com
              </span>
            </p>
          </div>

          <div className="flex p-[20px]">
            <span className="w-[75px] md:w-[40px] p-2 h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
              <Image src={map} alt="logo"></Image>
            </span>
            <p className="Montserrat font14 font-extrabold md:max-w-[220px]">
              <strong> Address</strong> <br />
              <span className="font-medium font12 md:font20 Montserrat">
                407, 4th Floor, SNS Synergy, Surat - Dumas Rd, Above Mahindra
                howroom, Surat, Gujarat
              </span>
            </p>{" "}
          </div>

          {/* <div className="lg:w-1/2 lg:mr-[70px] max-w-[500px] bg-white border border-[#E1E4EA] lg:px-[50px] p-8 rounded-lg shadow-lg md:mt-28 lg:mt-8 relative md:top-[10px] md:mx-auto mb-[30px] top-[65px] ">
            <h3 className="text-2xl font-bold text-[--text-color] mb-4 Montserrat">
              GET IN TOUCH!
            </h3>
            <p className="text-black font14 font-normal mb-4 max-w-[340px] Inter">
              Write us a few words about your project and we’ll prepare a
              proposal for you within 24 hours.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border text-black text-xs border-[#273252] outline-none"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
              />
              <input
                type="email"
                placeholder="Phone Number"
                className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
              />
              <input
                type="email"
                placeholder="Subject"
                className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
              />
              <textarea
                // type="email"
                placeholder="type a Message"
                className="w-full p-3 border text-xs border-[#273252] h-32 outline-none text-black"
              />

              <div className="md:flex md:justify-between mt-7">
                <button
                  type="submit"
                  className="w-full p-3 Inter text-white border font14 font-bold rounded mr-7 bg-[#FE434C] uppercase "
                >
                  Send Message
                </button>
                <button
                  type="submit"
                  className="w-full Inter p-3 mt-5 md:mt-0 text-white border font14 font-bold rounded uppercase bg-[#FE434C]"
                >
                  clear all
                </button>
              </div>
            </form>
          </div> */}
        </div>

        {/* <div className="space-y-4 text-lg relative top-[40px] lg:top-[94px] md:top-[50px]">
          <div className="flex items-center text-black pb-4">
            <span className="w-10 p-2 h-10 bg-red-500 text-white rounded  flex justify-center items-center mr-4">
              <Image src={Phone} alt="logo"></Image>
            </span>
            <p className=" Montserrat font14 font-extrabold">
              <strong> Phone</strong> <br />
              <span className="font-medium font12 md:font20 Montserrat">
                +91 123 456 3698 | +91 985 985 4587
              </span>
            </p>
          </div>
          <div className="flex items-center text-black pb-4">
            <span className="w-10 p-2  h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
              <Image src={email} alt="logo"></Image>
            </span>
            <p className="Montserrat font14 font-extrabold">
              <strong>Email ID </strong> <br />
              <span className="font-medium font12 md:font20 Montserrat">
                info@lehar.com
              </span>
            </p>
          </div>
          <div className="flex items-center text-black pb-4">
            <span className="w-14 p-2 h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
              <Image src={map} alt="logo"></Image>
            </span>
            <p className="Montserrat font14 font-extrabold">
              <strong> Address</strong> <br />
              <span className="font-medium font12 md:font20 Montserrat">
                407, 4th Floor, SNS Synergy, Surat - Dumas Rd, Above Mahindra
                howroom, Surat, Gujarat
              </span>
            </p>{" "}
          </div>
        </div> */}

        {/* / */}
        {/* <div className="lg:w-1/2 lg:mr-[70px] max-w-[500px] bg-white border border-[#E1E4EA] lg:px-[50px] p-8 rounded-lg shadow-lg md:mt-28 lg:mt-8 relative md:top-[10px] md:mx-auto mb-[30px] top-[65px] ">
          <h3 className="text-2xl font-bold text-[--text-color] mb-4 Montserrat">
            GET IN TOUCH!
          </h3>
          <p className="text-black font14 font-normal mb-4 max-w-[340px] Inter">
            Write us a few words about your project and we’ll prepare a proposal
            for you within 24 hours.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border text-black text-xs border-[#273252] outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
            />
            <input
              type="email"
              placeholder="Phone Number"
              className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
            />
            <input
              type="email"
              placeholder="Subject"
              className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
            />
            <textarea
              // type="email"
              placeholder="type a Message"
              className="w-full p-3 border text-xs border-[#273252] h-32 outline-none text-black"
            />

            <div className="md:flex md:justify-between mt-7">
              <button
                type="submit"
                className="w-full p-3 Inter text-white border font14 font-bold rounded mr-7 bg-[#FE434C] uppercase "
              >
                Send Message
              </button>
              <button
                type="submit"
                className="w-full Inter p-3 mt-5 md:mt-0 text-white border font14 font-bold rounded uppercase bg-[#FE434C]"
              >
                clear all
              </button>
            </div>
          </form>
        </div> */}
        {/* from start */}
        {/* className="lg:w-1/2 lg:mr-[70px] max-w-[500px] bg-white border border-[#E1E4EA] lg:px-[50px] p-8 rounded-lg shadow-lg md:mt-28 lg:mt-8 relative md:top-[10px] md:mx-auto mb-[30px] top-[65px]  */}
        <div className="md:w-1/2 bg-white max-w-[500px] relative md:p-8 lg:p-14 border border-[--border] shadow-lg rounded-lg  lg:mt-[-220px] md:mt-[-190px] md:mr-5 lg:mr-16  mb-[30px]">
          <h3 className="text-2xl font-bold text-[--text-color] mb-4 Montserrat">
            GET IN TOUCH!
          </h3>
          <p className="text-black font14 font-normal mb-4 max-w-[340px] Inter">
            Write us a few words about your project and we’ll prepare a proposal
            for you within 24 hours.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border text-black text-xs border-[#273252] outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
            />
            <input
              type="email"
              placeholder="Phone Number"
              className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
            />
            <input
              type="email"
              placeholder="Subject"
              className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
            />
            <textarea
              // type="email"
              placeholder="type a Message"
              className="w-full p-3 border text-xs border-[#273252] h-32 outline-none text-black"
            />

            <div className="md:flex md:justify-between mt-7">
              <button
                type="submit"
                className="w-full p-3 Inter text-white border font14 font-bold rounded mr-7 bg-[#FE434C] uppercase "
              >
                Send Message
              </button>
              <button
                type="submit"
                className="w-full Inter p-3 mt-5 md:mt-0 text-white border font14 font-bold rounded uppercase bg-[#FE434C]"
              >
                clear all
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="space-y-4 text-lg relative top-[40px] lg:top-[94px] md:top-[50px]">
        <div className="flex items-center text-black pb-4">
          <span className="w-10 p-2 h-10 bg-red-500 text-white rounded  flex justify-center items-center mr-4">
            <Image src={Phone} alt="logo"></Image>
          </span>
          <p className=" Montserrat font14 font-extrabold">
            <strong> Phone</strong> <br />
            <span className="font-medium font12 md:font20 Montserrat">
              +91 123 456 3698 | +91 985 985 4587
            </span>
          </p>
        </div>
        <div className="flex items-center text-black pb-4">
          <span className="w-10 p-2  h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
            <Image src={email} alt="logo"></Image>
          </span>
          <p className="Montserrat font14 font-extrabold">
            <strong>Email ID </strong> <br />
            <span className="font-medium font12 md:font20 Montserrat">
              info@lehar.com
            </span>
          </p>
        </div>
        <div className="flex items-center text-black pb-4">
          <span className="w-14 p-2 h-10 bg-red-500 text-white rounded flex justify-center items-center mr-4">
            <Image src={map} alt="logo"></Image>
          </span>
          <p className="Montserrat font14 font-extrabold">
            <strong> Address</strong> <br />
            <span className="font-medium font12 md:font20 Montserrat">
              407, 4th Floor, SNS Synergy, Surat - Dumas Rd, Above Mahindra
              howroom, Surat, Gujarat
            </span>
          </p>{" "}
        </div>
      </div>

      <div className="lg:w-1/2 lg:mr-[70px] max-w-[500px] bg-white border border-[#E1E4EA] lg:px-[50px] p-8 rounded-lg shadow-lg md:mt-28 lg:mt-8 relative md:top-[10px] md:mx-auto mb-[30px] top-[65px] ">
        <h3 className="text-2xl font-bold text-[--text-color] mb-4 Montserrat">
          GET IN TOUCH!
        </h3>
        <p className="text-black font14 font-normal mb-4 max-w-[340px] Inter">
          Write us a few words about your project and we’ll prepare a proposal
          for you within 24 hours.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border text-black text-xs border-[#273252] outline-none"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
          />
          <input
            type="email"
            placeholder="Phone Number"
            className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
          />
          <input
            type="email"
            placeholder="Subject"
            className="w-full p-3 border text-xs border-[#273252] outline-none text-black"
          />
          <textarea
            // type="email"
            placeholder="type a Message"
            className="w-full p-3 border text-xs border-[#273252] h-32 outline-none text-black"
          />

          <div className="md:flex md:justify-between mt-7">
            <button
              type="submit"
              className="w-full p-3 Inter text-white border font14 font-bold rounded mr-7 bg-[#FE434C] uppercase "
            >
              Send Message
            </button>
            <button
              type="submit"
              className="w-full Inter p-3 mt-5 md:mt-0 text-white border font14 font-bold rounded uppercase bg-[#FE434C]"
            >
              clear all
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
}

export default Form;
