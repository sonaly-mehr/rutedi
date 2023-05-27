import React from "react";
import Navbar from "./Navbar";
import desktop from "../assets/pc.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-bg h-[800px] md:h-[115vh] relative">
      <Navbar />
      <div className="hero-border">
        <div className="w-full md:relative left-0 md:top-[50%] md:translate-y-[50%] px-3 md:px-0 pt-10 md:pt-0">
          <div className=" md:ml-[7.5%]">
            <span className="subHeading">Best Software</span>
            <h1 className="font-['GilroySemibold'] md:w-[45%] text-[32px] md:text-[42px] leading-[42px]  md:leading-[54px] text-[#F9FBFF]">
              Let the software do your most time-consuming actions <br /> We
              develop <span className="text-primary">custom software </span>
            </h1>

            <div className="mt-12 flex flex-col md:flex-row gap-5">
              <button className="button bg-primary">Let’s talk </button>
              <button className="buttonTwo text-primary border-primary">
                Schedule a meeting
              </button>
            </div>

            <div className="hidden md:block absolute right-0 top-[50%] translate-y-[-50%]">
              <img src={desktop} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <a
        className="flex flex-col gap-1 text-[#F9FBFF] text-lg absolute bottom-[17%] md:bottom-[8%] left-[50%] translate-x-[-50%]"
        href="/#services"
      >
        <span>Scroll Down</span>
        <MdKeyboardArrowDown className="text-center ml-[30px] text-[22px] mt-[-5px]" />
      </a>

      <div>
        <a href="/#" className="text-white bg-primary p-4 text-2xl md:text-3xl fixed right-[20px] rounded-full z-20 bottom-[5%]">
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
};

export default Hero;
