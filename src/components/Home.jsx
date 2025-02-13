import React from "react";
import armRobo from "../images/ArmRobo.webp";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="absolute md:left-30 lg:left-56 xl:left-150 pb-52  md:w-xl lg:w-xl xl:w-3xl min-h-screen"
      >
        <img src={armRobo} alt="armrobo" />
      </div>
      <div className="pl-10 sm:pl-24 md:pl-10 lg:pl-38 xl:pl-68 pr-8 sm:pr-0 pt-28 md:pt-56 lg:pt-68 xl:pt-72 md:pr-10 lg:pr-20 xl:pr-40 ">
        <p className="text-xl sm:text-3xl xl:text-6xl font-bold text-[#213B6D] text-justify">
          Transforming care with innovative and precision driven{" "}
          <span className="text-[#FFA726]">Robotic solutions.</span>
        </p>
      </div>
    </>
  );
};

export default Home;
