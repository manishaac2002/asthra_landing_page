import React from "react";
import doctor from "../images/Doctor.webp";
import arAndvr from "../images/ARVR.webp";
import scan from "../images/Scan.webp";
import asthraRobot from "../images/AsthraRobot.webp";
import doctorScan from "../images/DoctorScan.webp";
import { AsthraPatternLeft, AsthraPatternRight } from "../Icons/AsthraPattern";

const ProductServices = () => {
  return (
    <div id="products" className="min-h-screen">
      <div>
        <p className="text-[#213B6D] text-xl ml-50 md:ml-0 md:text-4xl font-bold text-center pt-24">
          Product & Service
        </p>
      </div>

      <div className="absolute right-0 opacity-50 sm:opacity-75 md:opacity-100 ">
        <AsthraPatternRight className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32" />
      </div>

      <div className="lg:grid grid-cols-2 mt-10 md:mt-24 ">
        <div className="pl-56">
          <img className="md:w-96 lg:w-140" src={asthraRobot} alt="Doctor" />
        </div>

        <div className="mt-5 md:mt-16 lg:mt:24 ">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Tele - Robotic UltraSound System
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16">
            Our{" "}
            <span className="font-bold">tele-ultrasound robot solution </span>{" "}
            revolutionizes remote healthcare by enabling real-time, high-quality
            ultrasound imaging from anywhere in the world. Equipped with
            advanced robotic arms, intuitive controls, and seamless
            connectivity, our solution ensures accurate <span className="font-bold">diagnostics</span> and <span className="font-bold">
              enhanced patient care, bridging the gap between healthcare
              providers and patients
            </span>
            , no matter the distance.
          </p>
          <p className="pt-4 lg:text-xl">
            <li>2 way audio and video </li>
            <li>Real time diagnosis </li>
            <li>Portable & standalone </li>
            <li>Advance AI features to help doctors</li>
          </p>
        </div>
      </div>
      <div className="absolute -z-50 opacity-50 sm:opacity-75 md:opacity-100 w-40 sm:w-60 md:w-80 lg:w-auto">
        <AsthraPatternLeft />
      </div>

      <div className="hidden lg:grid grid-cols-2 gap-10 mt-10 md:mt-24 ml-32 lg:ml-0 ">
        <div className="pl-34">
          <p className="text-[#FFA726] text-3xl font-bold">
            Surgical Simulator
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16">
            Our robotic surgical simulator offers a cutting-edge, immersive
            platform for medical professionals to refine their skills in
            robotic-assisted surgery. Designed with realistic, high-fidelity
            simulations, the system provides a safe and controlled environment
            to practice complex procedures, improve precision, and enhance
            decision-making without risk to patients. Our simulator bridges the
            gap between theory and hands-on experience, making it an essential
            tool for surgical training, certification, and continued
            professional development.
          </p>
          <p className="lg:text-xl  mt-4 text-justify mr-16">
            <li>Portable, Standalone & sleek. </li>
            <li>Superior graphics, arm motion and interactions. </li>
            <li>Improved physics in control arm modules. </li>
            <li>Customizable Robotic Skills Assessment Score. </li>
            <li>
              Exercises with orientation, motor, basic & intermediate surgical
              skills .
            </li>
          </p>
        </div>

        <div>
          <img
            className=" md:w-96 lg:w-160 mt-18"
            src={doctorScan}
            alt="doctor"
          />
        </div>
      </div>

      <div className="mt-10 md:mt-24 ml-32 lg:ml-0 md:mx-28 lg:mx-32 xl:mx-72 lg:hidden">
        <div>
          <img className=" md:w-96 lg:w-130" src={doctorScan} alt="doctor" />
        </div>

        <div className="">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Surgical Simulator
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-6">
            Our robotic surgical simulator offers a cutting-edge, immersive
            platform for medical professionals to refine their skills in
            robotic-assisted surgery. Designed with realistic, high-fidelity
            simulations, the system provides a safe and controlled environment
            to practice complex procedures, improve precision, and enhance
            decision-making without risk to patients. Our simulator bridges the
            gap between theory and hands-on experience, making it an essential
            tool for surgical training, certification, and continued
            professional development.
          </p>
          <p className="lg:text-xl  mt-4">
            <li>Portable, Standalone & sleek. </li>
            <li>Superior graphics, arm motion and interactions. </li>
            <li>Improved physics in control arm modules. </li>
            <li>Customizable Robotic Skills Assessment Score. </li>
            <li>
              Exercises with orientation, motor, basic & intermediate surgical
              skills .
            </li>
          </p>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-10 mt-10 md:mt-24 ml-32 lg:ml-0 ">
        <div className="pl-34">
          <img className=" md:w-96 lg:w-160 " src={scan} alt="Scan" />
        </div>

        <div className="">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Medical SaaS
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16">
            Our medical SaaS product revolutionizes the way healthcare providers
            deliver care by offering a seamless, cloud-based solution for
            managing patient data, appointments, and electronic health records
            (EHR). Built with security and compliance at its core, our solution
            simplifies workflows, reduces administrative burdens, enhances
            operational efficiency, and supports better clinical decisions.
            Designed to empower healthcare teams of all sizes, our platform
            allows you to focus on what truly matters—delivering exceptional
            care to your patients.
            <p className="mt-4">
              <li>HIPAA compliant. </li>
              <li>Secure, real-time access to vital patient information. </li>
              <li>User-friendly interface & customizable features. </li>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

//bg

export default ProductServices;
