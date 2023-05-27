import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="width flex justify-between py-6 px-3 md:px-0">
        <div>
          <img src={logo} alt="" className="w-[100px]" />
        </div>
        <div>
          <ul className="hidden md:flex gap-10 text-[#F9FBFF] text-lg">
            <li>
              <a
                href="/"
                className="text-primary border-b-[1px] border-solid border-primary pb-2"
              >
                Home
              </a>
            </li>
            <li className="dropdown">
              <a
                href="/#services"
                className="flex gap-2 items-center hover-link"
              >
                {" "}
                Services <MdKeyboardArrowDown />
              </a>
              {/* Dropdown-menu */}
              <ul className="dropdown-menu absolute hidden text-gray-700 bg-gray-300 p-4 z-10">
                <li>
                  <a href="/" className="hover-link">
                    Sub Menu 1
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="hover-link">
                    Sub Menu 2
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="hover-link">
                    Sub Menu 3
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/#methodology" className="hover-link">
                Methodology
              </a>
            </li>
            <li>
              <a href="/#team" className="hover-link">
                Team{" "}
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover-link">
                Contact us
              </a>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <RiMenu3Fill className="cursor-pointer text-white" size={32} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className="relative z-[200]">
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#2D5199] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <a href="/">
                  <img src={logo} alt="/" className="w-[80px]" />
                </a>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-white" />
                </div>
              </div>
            </div>
            <div className="py-14 flex flex-col justify-center gap-5">
              <a href="/#">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  <a
                    href="/"
                    className="text-primary border-b-[1px] border-solid border-primary pb-2"
                  >
                    Home
                  </a>
                </li>
              </a>

              <a href="/#services" className="dropdown w-fit">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none flex gap-2 items-center hover-link w-fit"
                >
                  Services <MdKeyboardArrowDown />
                </li>

                {/* Dropdown-menu */}
                <ul className="dropdown-menu absolute hidden text-gray-700 bg-gray-300 p-4 z-10">
                  <li>
                    <a href="/" className="hover-link">
                      Sub Menu 1
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="/" className="hover-link">
                      Sub Menu 2
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="/" className="hover-link">
                      Sub Menu 3
                    </a>
                  </li>
                </ul>
              </a>

              <a href="/#methodology" className="dropdown w-fit">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none flex gap-2 items-center hover-link w-fit"
                >
                  Methodology
                </li>
              </a>

              <a href="/#team" className="dropdown w-fit">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none flex gap-2 items-center hover-link w-fit"
                >
                  Team
                </li>
              </a>

              <a href="/#contact" className="dropdown w-fit">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none flex gap-2 items-center hover-link w-fit"
                >
                  Contact us
                </li>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
