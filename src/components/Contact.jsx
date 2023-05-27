import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import icon from "../assets/logo-icon.png";
const Contact = () => {
  return (
    <div className="bg-[#F6F6F6] py-14 md:py-20" id="contact">
      <div className="width flex flex-col md:flex-row justify-between items-center">
        <div className="md:basis-3/5 md:pr-14">
          <span className="subHeading">Contact</span>
          <h4 className="heading">Let’s talk</h4>
          <p className="text-xl font-['GilroyMedium'] mt-3 mb-8">
            Feel free to contact us anytime. Just fill in form on the right side{" "}
          </p>
          <ul className="flex flex-col gap-6 text-2xl font-['GilroyMedium']">
            <li className="flex gap-3">
              <BsTelephoneFill className="text-primary" /> +123 456 789 789
            </li>
            <li className="flex gap-2">
              <img src={icon} alt="" /> UTEDI
            </li>
          </ul>
        </div>

        <div className="md:basis-4/5 w-full mt-10 md:mt-0">
          <form action="">
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <input
                type="text"
                placeholder="Enter your name and last name"
                className="w-full text-lg text-[#D1D1D1] font-['GilroyMedium'] px-4 py-2 rounded-md border-[1px] border-solid border-[#DFE2E9]"
              />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full text-lg text-[#D1D1D1] font-['GilroyMedium'] px-4 py-2 rounded-md border-[1px] border-solid border-[#DFE2E9]"
              />
            </div>
            <textarea
              name=""
              id=""
              rows="5"
              placeholder="Enter email"
              className="mb-5 w-full text-lg text-[#D1D1D1] font-['GilroyMedium'] px-4 py-2 rounded-md border-[1px] border-solid border-[#DFE2E9]"
            ></textarea>
            <button type="submit" className="button bg-primary w-full">
              SEND{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
