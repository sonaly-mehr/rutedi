import React from 'react';
import logo from '../assets/Logo(2).png';
import { MdKeyboardArrowDown } from "react-icons/md";


const Footer = () => {
    return (
        <div className='footer-bg text-center pt-12 pb-4'>
            <div className='flex justify-center'>
            <img src={logo} alt="" className='w-[120px]'/>
            </div>

            <ul className="flex flex-col md:flex-row gap-5 md:gap-10 text-[#F9FBFF] text-lg my-10 justify-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="dropdown flex justify-center">
            <a href="#/services" className="flex gap-2 items-center">
              {" "}
              Services <MdKeyboardArrowDown />
            </a>
            {/* Dropdown-menu */}
            <ul className="dropdown-menu absolute hidden text-gray-700 bg-gray-300 p-4 z-10">
              <li>
                <a href="/">Sub Menu 1</a>
              </li>
              <li className="mt-2">
                <a href="/">Sub Menu 2</a>
              </li>
              <li className="mt-2">
                <a href="/">Sub Menu 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/#methodology">Methodology</a>
          </li>
          <li>
            <a href="/#team">Team </a>
          </li>
          <li>
            <a href="/#contact">Contact us</a>
          </li>
        </ul>

        <p className="text-[#F9FBFF] font-['GilroyMedium'] text-xl">Copyright. All rights reserved 2022</p>
        </div>
    );
};

export default Footer;