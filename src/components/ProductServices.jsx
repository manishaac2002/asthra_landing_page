import React from "react";
import doctor from "../images/Doctor.webp";
import arAndvr from "../images/ARVR.webp";
import scan from "../images/Scan.webp";
import { AsthraPatternLeft, AsthraPatternRight } from "../Icons/AsthraPattern";

const ProductServices = () => {
  return (
    <div id="products" className="ml-auto">
      <div>
        <p className="text-[#213B6D] text-xl ml-50 md:ml-0 md:text-4xl font-bold text-center pt-24">
          Product & Service
        </p>
      </div>

      <div className="absolute right-0 -z-50 opacity-50 sm:opacity-75 md:opacity-100 w-40 sm:w-60 md:w-80 lg:w-auto">
        <AsthraPatternRight />
      </div>

      <div className="lg:grid grid-cols-2 gap-10 mt-10 md:mt-24 ml-32 lg:ml-0 md:mx-28 lg:mx-32 xl:mx-72 ">
        <div>
          <img className="md:w-96 lg:w-130" src={doctor} alt="Doctor" />
        </div>

        <div className="mt-5 md:mt-16 lg:mt:24">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Tele - robotic UltraSound System
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16">
            Our tele-robotic ultrasound system revolutionizes medical
            diagnostics by enabling remote, high-precision imaging for patients
            worldwide.
          </p>
        </div>
      </div>

      <div className="absolute -z-50 opacity-50 sm:opacity-75 md:opacity-100 w-40 sm:w-60 md:w-80 lg:w-auto">
        <AsthraPatternLeft/>
      </div>

      <div className="hidden lg:grid grid-cols-2 gap-10 mt-10 md:mt-24 ml-32 lg:ml-0 md:mx-28 lg:mx-32 xl:mx-72 ">
        <div className="mt-24 ">
          <p className="text-[#FFA726] text-3xl font-bold">
            Surgical Simulator
          </p>
          <p className="text-xl text-justify mt-4 mr-16">
            A surgical simulator enables medical professionals to practice
            procedures in a risk-free environment using VR, AR, and robotics.
          </p>
        </div>

        <div>
          <img className=" md:w-96 lg:w-130" src={arAndvr} alt="doctor" />
        </div>
      </div>

      <div className="mt-10 md:mt-24 ml-32 lg:ml-0 md:mx-28 lg:mx-32 xl:mx-72 lg:hidden">
        <div>
          <img className=" md:w-96 lg:w-130" src={arAndvr} alt="doctor" />
        </div>

        <div className="mt-5 md:mt-16 lg:mt:24">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Surgical Simulator
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16">
            A surgical simulator enables medical professionals to practice
            procedures in a risk-free environment using VR, AR, and robotics.
          </p>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-10 mt-10 md:mt-24 ml-32 lg:ml-0 md:mx-28 lg:mx-32 xl:mx-72">
        <div>
          <img className=" md:w-96 lg:w-130" src={scan} alt="Scan" />
        </div>

        <div className="mt-5 md:mt-16 lg:mt:24">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Medical SaaS
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16">
            Streamline operations, enhance patient care, and improve efficiency
            with our cutting-edge medical SaaS platform
          </p>
        </div>
      </div>
    </div>
  );
};

//bg

export default ProductServices;
