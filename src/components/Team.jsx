import React from "react";
import team from "../assets/team.png";
import { FaPhoneAlt } from "react-icons/fa";

const Team = () => {
  return (
    <div className="relative my-12 md:my-20" id="team">
      <div className="width text-center">
        <span className="subHeading">Team</span>
        <h4 className="heading">Edison Pizarro</h4>
        <span className="font-['GilroyMedium'] tracking-[0.15em] text-lg uppercase mt-1.5 mb-8 md:mb-10 block">
          Desarrollador & Founder
        </span>
        <div className="flex justify-center">
          <img src={team} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;
