import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => {
  return (
    <>
      <footer className=" relative bottom-0 bg-[#f1f1f1] w-full h-[35vh] border-t-2 border-[#bebebe] shadow-inner flex px-[6vw] py-[2vh]">
        <section className="  px-[2vw] flex items-center">
          <div className=" ">
            <img src={small_logo} alt="Logo" className=" w-[5vw]" />
          </div>
        </section>
        <div className=" px-[6vw]">
          <div className="flex flex-col items-start h-full justify-center">
            <h3 className="font-semibold text-[#424242] whitespace-nowrap">
              Little Lemon
            </h3>
            <p className="text-[#888]">About</p>
            <p className="text-[#888]">Blog</p>
            <p className="text-[#888]">Menu</p>
            <p className="text-[#888]">Chat</p>
          </div>
        </div>
        <div className=" px-[6vw]">
          <div className="flex flex-col items-start h-full justify-center">
            <h3 className="font-semibold text-[#424242]">Contact Us</h3>
            <p className="text-[#888]">+91 1234567890</p>
            <p className="text-[#888]">2 Unknown Road</p>
          </div>
        </div>
        <div className=" px-[6vw]">
          <div className="flex flex-col items-start h-full justify-center">
            <h3 className="font-semibold text-[#424242]">Support</h3>
            <p className="text-[#888]">Product Help</p>
            <p className="text-[#888]">Report an issue</p>
          </div>
        </div>

        <div className=" px-[6vw]">
          <div className="flex flex-col items-start h-full justify-center">
            <h3 className="font-semibold text-[#424242] whitespace-nowrap">
              Social Media Links
            </h3>
            <p className="text-[#888]">Github</p>
            <p className="text-[#888]">Facebook</p>
            <p className="text-[#888]">Instagram </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
