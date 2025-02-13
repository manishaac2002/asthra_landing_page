import React from "react";
import mission from "../images/Mission.webp";
import vision from "../images/Vision.webp";

const AboutUs = () => {
  return (
    <>
      <div
        id="about"
        className=" mt-34 sm:mt-60 md:mt-80 xl:mt-100 w-full bg-blue-50 "
      >
        <div className="mt-5">
          <p className="text-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#213B6D] pt-10">
            Our Guiding Philosophy
          </p>
        </div>

        <div className="lg:grid grid-cols-2 mt-16 px-8 md:px-12 lg:px-30 gap-8 md:gap-12 lg:gap-16 ">
          <div className="">
            <img className="rounded-full sm:w-12 " src={mission} alt="mission" />
            <p className="mt-3 text-2xl xl:text-3xl text-[#213B6D]">MISSION</p>
            <p className="mt-5 md:text-lg text-justify leading-[2rem]">
              Our mission is to revolutionise healthcare by leveraging advanced
              technologies like ML, AI, robotics, AR and VR. We are committed to
              empowering medical professionals with innovative technologies that
              push the boundaries of what’s possible in patient care, while
              maintaining the highest standards of safety, efficiency, and
              reliability.
            </p>
          </div>
          <div className="md:mt-8 lg:mt-0 ">
            <img className="rounded-full sm:w-12 " src={vision} alt="vision" />
            <p className="mt-3 text-2xl xl:text-3xl text-[#213B6D]">VISION</p>
            <p className="mt-5 msd:text-lg text-justify pb-16 leading-[2rem]">
              To be the global leader in advanced medical solutions, shaping the
              future of care with breakthrough technologies that make healthcare
              more accessible, effective, and minimally invasive. We envision a
              world where smart technologic solutions are seamlessly integrated
              into healthcare systems, offering transformative benefits to
              patients and healthcare providers worldwide, and ultimately
              contributing to the devices of medical science.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
