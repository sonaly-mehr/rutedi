import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import { FaPhoneAlt } from "react-icons/fa";

const Services = () => {
  const data = [
    {
      subHeading: "Services",
      intro: "We develop smart solutions for",
    },
    {
      icon: icon1,
      heading: "Automation",
      text: "Sollicitudin auctor id urna, elementum nunc. Sit ultricies ipsum sed id condimentum.",
    },
    {
      icon: icon2,
      heading: "Digital transformation ",
      text: "Eget vestibulum sagittis, adipiscing porta. Mauris egestas felis, habitasse  arcu metus, tempus. ",
    },
    {
      icon: icon3,
      heading: "Monitoring and alert",
      text: "Bibendum ipsum tellus diam nisi, auctor. Quisque amet, habitasse faucibus malesuada ut.",
    },
    {
      icon: icon4,
      heading: "Data recollection",
      text: "Sed turpis justo dolor integer maecenas integer congue sed pharetra. Etiam vel id tempus cras nulla.",
    },
    {
      icon: icon5,
      heading: "Reports generation",
      text: "Et arcu, elementum, leo aliquet. Morbi nunc, magna adipiscing dictumst pulvinar sit nam egestas.",
    },
  ];
  return (
    <div className="my-0 md:my-24 relative" id="services">
      <div className="width md:grid grid-rows-2 grid-flow-col gap-6">
        {data.map((data) => (
          <div className="bg-[#F6F6F6] px-5 py-8 w-full h-[250px] m-auto mb-5 md:mb-0">
            {data.subHeading ? (
              <span className="subHeading pt-[36px]">{data.subHeading}</span>
            ) : (
              ""
            )}
            {data.intro ? <h2 className="heading">{data.intro}</h2> : ""}
            {data.icon ? (
              <div className="flex justify-center">
                <img
                  src={data.icon}
                  alt=""
                  className="w-[60px] flex justify-center text-center"
                />
              </div>
            ) : (
              ""
            )}
            {data.heading ? (
              <h6 className="flex justify-center font-['GilroyBold'] tracking-[0.1em] text-2xl pt-4 pb-2">
                {data.heading}
              </h6>
            ) : (
              ""
            )}
            {data.text ? (
              <p className="text-center text-base tracking-[0.1em]">
                {data.text}
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div>
          <a href="/#" className="call bottom-0">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
