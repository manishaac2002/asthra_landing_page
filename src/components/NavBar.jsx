import React from "react";
import asthra from "../images/Asthra.webp";

const NavBar = () => {
  return (
    <div className="flex sticky top-0 bg-white shadow-md z-50 p-4 ">
      <div>
        <img className="w-24 lg:w-36" src={asthra} alt="Asthra" />
      </div>
      <div className="md:ml-auto hidden md:block">
        <ul className="flex">
          <li className="mx-2 lg:mx-4 text-lg lg:text-xl text-[#213B6D] font-bold hover:text-[#FFA726] hover:text-2xl">
            <a href="#home">Home</a>
          </li>
          <li className="mx-2 lg:mx-4 text-lg lg:text-xl text-[#213B6D] font-bold hover:text-[#FFA726] hover:text-2xl">
            <a href="#about">About Us</a>
          </li>
          <li className="mx-2 lg:mx-4 text-lg lg:text-xl text-[#213B6D] font-bold hover:text-[#FFA726] hover:text-2xl">
            <a href="#products">Product & Services</a>
          </li>
          <li className="mx-2 lg:mx-4 text-lg lg:text-xl text-[#213B6D] font-bold hover:text-[#FFA726] hover:text-2xl">
            <a href="#careers">Careers</a>
          </li>
          <li className="mx-2 lg:mx-4 text-lg lg:text-xl text-[#213B6D] font-bold hover:text-[#FFA726] hover:text-2xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
