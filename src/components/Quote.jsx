import React from "react";
import rectangle1 from "../assets/Rectangle 1.png";
import rectangle2 from "../assets/Rectangle 4.png";

const Quote = () => {
  return (
    <div className="w-full quote-bg text-center py-12 md:py-[59px] relative px-3 md:px-0">
      <span className="subHeading">quote </span>
      <h4 className="md:w-3/5 m-auto font-['GilroySemibold'] text-2xl md:text-[32px] md:leading-[38px] text-white">
        “The function of good software is to make the complex appear to be
        simple” – Grady Booch{" "}
      </h4>
      <div className="hidden md:block absolute top-0 left-0">
        <img src={rectangle1} alt="" />
      </div>
      <div className="hidden md:block absolute top-0 right-0">
        <img src={rectangle2} alt="" />
      </div>
    </div>
  );
};

export default Quote;
