import scan from "../../Images/Scan.webp";
import asthraRobot from "../../Images/AsthraRobot.webp";
import doctorScan from "../../Images/DoctorScan.webp";
import { AsthraPatternLeft, AsthraPatternRight } from "../../Icons/AsthraPattern";

const Product = () => {
  return (
    <div id="products" className="min-h-screen">
      <div className="pt-24">
        <p className="text-[#213B6D] text-xl md:text-4xl font-bold text-center ">
          Products
        </p>
      </div>

      <div className="absolute right-0 opacity-50 sm:opacity-75 md:opacity-100 ">
        <AsthraPatternRight className="" />
      </div>

      <div className="xl:grid grid-cols-2 lg:gap-20 2xl:gap-10 mt-10 md:mt-24 ">
        <div className="ml-20 md:ml-30 lg:ml-74 xl:ml-48 2xl:ml-96">
          <img className="w-68 md:w-72 lg:w-100 xl:w-180 2xl:w-140  " src={asthraRobot} alt="Doctor" />
        </div>

        <div className="mt-5 md:mt-16 lg:mt:24 ml-5 md:ml-26 lg:ml-16 xl:ml-0 mr-5 md:mr-0">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Tele - Robotic UltraSound System
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16 space-x-5 leading-[2rem]">
            Our{" "}
            <span className="font-bold">tele-ultrasound robot solution </span>{" "}
            revolutionizes remote healthcare by enabling real-time, high-quality
            ultrasound imaging from anywhere in the world. Equipped with
            advanced robotic arms, intuitive controls, and seamless
            connectivity, our solution ensures accurate{" "}
            <span className="font-bold">diagnostics</span> and{" "}
            <span className="font-bold">
              enhanced patient care, bridging the gap between healthcare
              providers and patients
            </span>
            , no matter the distance.
          </p>
          <ul className="pt-4 lg:text-xl space-y-2 list-none px-6 md:px-8 lg:px-10">
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              2 way audio and video
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Real time diagnosis
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Portable & standalone
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Advance AI features to help doctors
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute -z-50 opacity-50 sm:opacity-75 md:opacity-100 w-40 sm:w-60 md:w-80 lg:w-auto">
        <AsthraPatternLeft />
      </div>

      <div className="hidden xl:grid grid-cols-2 gap-10 mt-10 md:mt-24 ml-32 lg:ml-0 ">
        <div className="pl-34">
          <p className="text-[#FFA726] text-3xl font-bold">
            Surgical Simulator
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16 leading-[2rem]">
            Our <span className="font-bold">robotic surgical simulator</span>{" "}
            offers a cutting-edge, immersive platform for medical professionals
            to refine their skills in robotic-assisted surgery. Designed with{" "}
            <span className="font-bold">
              realistic, high-fidelity simulations
            </span>
            , the system provides a safe and controlled environment to practice
            complex procedures, improve precision, and enhance decision-making
            without risk to patients. Our simulator bridges the gap between
            theory and hands-on experience, making it an essential tool for
            surgical training, certification, and continued professional
            development.
          </p>
          <ul className="lg:text-xl  mt-4 text-justify mr-14 space-y-2 list-none px-6 md:px-8 lg:px-10">
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Portable, Standalone & sleek.{" "}
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Superior graphics, arm motion and interactions.{" "}
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Improved physics in control arm modules.{" "}
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Customizable Robotic Skills Assessment Score.{" "}
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Exercises with orientation, motor, basic & intermediate surgical
              skills.
            </li>
          </ul>
        </div>

        <div>
          <img
            className=" md:w-96 lg:w-160 mt-18"
            src={doctorScan}
            alt="doctor"
          />
        </div>
      </div>

      <div className="mt-10 md:mt-24  xl:hidden">
        <div className=" ml-18 md:ml-28 lg:ml-64">
          <img className=" w-72 md:w-96 lg:w-130" src={doctorScan} alt="doctor" />
        </div>

        <div className="ml-5 mr-5 md:ml-24 lg:ml-16 mt-16">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Surgical Simulator
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-6 leading-[2rem]">
            Our <span className="font-bold">robotic surgical simulator</span>{" "}
            offers a cutting-edge, immersive platform for medical professionals
            to refine their skills in robotic-assisted surgery. Designed with{" "}
            <span className="font-bold">
              realistic, high-fidelity simulations
            </span>
            , the system provides a safe and controlled environment to practice
            complex procedures, improve precision, and enhance decision-making
            without risk to patients. Our simulator bridges the gap between
            theory and hands-on experience, making it an essential tool for
            surgical training, certification, and continued professional
            development.
          </p>
          <ul className="lg:text-xl mt-4 space-y-2 list-none px-6 md:px-8 lg:px-10 ">
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Portable, Standalone & sleek.
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Superior graphics, arm motion and interactions.
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Improved physics in control arm modules.
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Customizable Robotic Skills Assessment Score.
            </li>
            <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
              Exercises with orientation, motor, basic & intermediate surgical skills .
            </li>
          </ul>
        </div>
      </div>

      <div className="xl:grid grid-cols-2 lg:gap-20 2xl:gap-10 mt-10 md:mt-24 ">
        <div className=" ml-18 md:ml-34 lg:ml-54 xl:ml-16 2xl:ml-96 ">
          <img className="w-72 md:w-96 lg:w-120 xl:w-160" src={scan} alt="Scan" />
        </div>

        <div className="mr-5 ml-5 md:ml-34 lg:ml-16 mt-10 lg:mt-16 xl:mt-0">
          <p className="text-[#FFA726] text-2xl xl:text-3xl font-bold mt-4 lg:mt-0">
            Medical SaaS
          </p>
          <p className="lg:text-xl text-justify mt-4 md:mr-16 leading-[2rem]">
            Our <span className="font-bold">medical SaaS</span> product
            revolutionizes the way healthcare providers deliver care by offering
            a seamless, cloud-based solution for managing{" "}
            <span className="font-bold">patient data, appointments,</span> and{" "}
            <span className="font-bold">electronic health records (EHR)</span>.
            Built with security and compliance at its core, our solution
            simplifies workflows, reduces administrative burdens, enhances
            operational efficiency, and supports better clinical decisions.
            Designed to empower healthcare teams of all sizes, our platform
            allows you to focus on what truly matters—delivering exceptional
            care to your patients.
            <ul className="mt-4 space-y-2 list-none px-6 md:px-8 lg:px-10">
              <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
                HIPAA compliant.{" "}
              </li>
              <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
                Secure, real-time access to vital patient information.{" "}
              </li>
              <li className="relative pl-6 md:pl-8 lg:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['✦'] before:text-[#FFA726] before:text-xl md:before:text-2xl lg:before:text-3xl  ">
                User-friendly interface & customizable features.{" "}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

//bg

export default Product;
