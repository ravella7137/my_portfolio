import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showHam, setShowHam] = useState(false);

  const handleHam = () => {
    setShowHam(!showHam);
  };
  return (
    <div className="fixed w-full text-gray-300  h-[80px] flex justify-between items-center px-4 bg-[#121212] border-[1px] border-purple-700">
      <div>
        <img src={logo} alt="Hemanth's Logo" style={{ width: "75px" }} />
      </div>
      <div className="hidden md:flex grow">
        <ul className="flex justify-around w-[40%] ml-auto">
          <li className="hover:text-purple-700 list-none p-3 text-xl hover:cursor-pointer hover:underline-offset-8 hover:underline font-medium">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-purple-700 list-none p-3 text-xl hover:cursor-pointer hover:underline-offset-8 hover:underline font-medium">
            <Link
              to="experience"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="hover:text-purple-700 list-none p-3 text-xl hover:cursor-pointer hover:underline-offset-8 hover:underline font-medium">
            <Link
              to="skills"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="hover:text-purple-700 list-none p-3 text-xl hover:cursor-pointer hover:underline-offset-8 hover:underline font-medium">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleHam} className="md:hidden z-10 px-3 py-3">
        {!showHam ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          showHam
            ? "absolute top-0 right-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center transition-all duration-500"
            : "absolute right-[100%] top-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center transition-all duration-500"
        }
      >
        <li className="text-3xl py-6 hover:text-#2cb4bc list-none hover:text-purple-700  px-2 hover:underline-offset-8 hover:underline transition-all duration-500">
          <Link
            onClick={handleHam}
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="text-3xl py-6 hover:text-#2cb4bc list-none hover:text-purple-700 px-2  hover:underline-offset-8 hover:underline transition-all duration-500">
          <Link
            style={{ padding: "2rem" }}
            onClick={handleHam}
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="text-3xl py-6 hover:text-#2cb4bc list-none hover:text-purple-700 px-2  hover:underline-offset-8 hover:underline transition-all duration-500">
          <Link
            onClick={handleHam}
            to="skills"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="text-3xl py-6 hover:text-#2cb4bc list-none hover:text-purple-700  px-2  hover:underline-offset-8 hover:underline transition-all duration-500">
          <Link
            onClick={handleHam}
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
