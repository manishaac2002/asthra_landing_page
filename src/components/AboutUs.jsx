import React from "react";

const AboutUs = () => {
  return (
    <div className=" mt-48 bg-blue-50 ">
      <div className="mt-5">
        <p className="text-center font-bold text-4xl text-[#213B6D] pt-10">
          Our mission
        </p>
      </div>

      <div className=" grid grid-cols-2 mt-16 mx-96 gap-8">
        <div className="">
          <p className=" text-3xl text-[#213B6D]">MISSION</p>
          <p className="mt-5 text-lg text-justify ">
            To revolutionize healthcare by integrating robotics <br/>and AI-driven
            solutions, enabling seamless remote <br/>diagnostics.
          </p>
        </div>
        <div className="">
          <p className=" text-3xl text-[#213B6D]">VISION</p>
          <p className="mt-5 text-lg text-justify mb-16">
            Our vision is to create a world where every medical <br/>professional has
            access to advanced, cost-effective.
          </p>
        </div>
    

      </div>
    </div>
  );
};

export default AboutUs;
