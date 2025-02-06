import React from "react";
import doctor from "../images/Doctor.webp";
import arAndvr from "../images/ARVR.webp";
import scan from "../images/Scan.webp";
import aPattern from "../images/aPattern.webp"

const ProductServices = () => {
  return (
    <div className="ml-auto" >
      <div>
        <p className="text-[#213B6D] text-xl ml-40 md:ml-0 md:text-4xl font-bold text-center pt">
          Product & Service
        </p>
      </div>

      <div className="md:grid grid-cols-2 mt-10 md:mt-24 xl:mx-72 gap-10 mx-32">
        <div>
          <img className="md:w-96 lg:w-130" src={doctor} alt="doctor" />
        </div>

        <div className="md:mt-10 lg:mt:24">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold">
            Tele - robotic UltraSound System
          </p>
          <p className="text-xl text-justify mt-4 mr-16">
            Our tele-robotic ultrasound system revolutionizes medical
            diagnostics by enabling remote, high-precision imaging for patients
            worldwide.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-10 md:mt-24 mx-72">
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
      <div className="grid grid-cols-2 mt-10 md:mt-24 mx-72">
        <div>
          <img className=" md:w-96 lg:w-130" src={scan} alt="doctor" />
        </div>

        <div className="mt-24 " >
          <p className="text-[#FFA726] text-3xl font-bold">Medical SaaS</p>
          <p className="text-xl text-justify mt-4 mr-16">
            Streamline operations, enhance patient care, and improve efficiency
            with our cutting-edge medical SaaS platform
          </p>
        </div>
      </div>

      <div className="">

      </div>
    </div>

  );
};

//bg 

export default ProductServices;
