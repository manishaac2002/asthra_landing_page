import React from "react";
import armRobo from "../images/ArmRobo.webp"


const Home = () => {
  return (
    <>
      <div id="home" className="absolute left-16 md:left-30 lg:left-56 xl:left-150 pb-52  w-sm md:w-xl lg:w-2xl xl:w-3xl min-h-screen">
        <img src={armRobo} alt="armrobo" />
      </div>
    <div className=" ml-20 sm:ml-24 md:ml-10 lg:ml-38 xl:ml-68 mt-38 md:mt-56 lg:mt-68 xl:mt-72 md:mr-10 lg:mr-20 xl:mr-40 ">
        <p className=" text-xl sm:text-3xl xl:text-6xl font-bold text-[#213B6D] text-justify">Transforming care with innovative and precision 
        driven <span className="text-[#FFA726]">Robotic solutions.</span> </p>
    </div>
    </>
  );
};

export default Home;
