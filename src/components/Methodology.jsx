import React from "react";
import immersion from "../assets/‘лой_1.png";
import prototype from "../assets/Шар 1.png";
import product from "../assets/Шар 2.png";

const Methodology = () => {
  return (
    <div className="mt-16 md:mt-0 mb-16 md:mb-24" id="methodology">
      <div className="width">
        <div className="text-center mb-12">
          <span className="subHeading">Methodology </span>
          <h4 className="heading">Recurrent feedback</h4>
        </div>

        {/* immersion */}
        <div className="bg-[#E1F4FF] methodology-card mb-10">
          <div className="basis-2/5 w-full md:mr-10">
            <img src={immersion} alt="md:w-full" />
          </div>

          <div className="methodology-content">
            <h5>Immersion </h5>
            <span>We start by understanding your business </span>
            <p>
              We meet your team and understanding your operations so we can
              decide what needs to be done and how
            </p>

            <div className="flex flex-col md:flex-row mt-12 gap-4 md:gap-10">
              <button className="button bg-primary">Let’s talk </button>
              <button className="buttonTwo text-primary border-primary">
                Schedule a meeting
              </button>
            </div>
          </div>
        </div>

        {/* prototype */}
        <div className="bg-[#FFF4DE] px-4 md:px-16 py-8 md:py-20 flex flex-col-reverse md:flex-row gap-8 md:gap-0 justify-between items-center mb-10">
          <div className="methodology-content">
            <h5>Prototype </h5>
            <span>We propose how your challenge should be solved. </span>
            <p>This proposition is validated by your team</p>

            <div className="flex flex-col md:flex-row mt-12 gap-4 md:gap-10">
              <button className="button bg-[#1F4690]">Let’s talk </button>
              <button className="buttonTwo text-[#1F4690] border-[#1F4690]">
                Schedule a meeting
              </button>
            </div>
          </div>

          <div className="basis-2/5 w-full md:ml-10">
            <img src={prototype} alt="md:w-full" />
          </div>
        </div>

        {/* Product  */}
        <div className="bg-[#E1F4FF] methodology-card mb-10">
          <div className="basis-2/5 w-full md:mr-10">
            <img src={product} alt="md:w-full" />
          </div>

          <div className="methodology-content">
            <h5>Product </h5>
            <span>The product is developed in weekly steps. </span>
            <p>
              Every iteration is accepted by your team, this way we make sure we
              are delivering the correct solution
            </p>
            <div className="flex flex-col md:flex-row mt-12 gap-4 md:gap-10">
              <button className="button bg-primary">Let’s talk </button>
              <button className="buttonTwo text-primary border-primary">
                Schedule a meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
