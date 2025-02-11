import React from "react";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png"

const Contact = () => {
  return (
    <div id="contact" className="bg-[#213B6D] w-full min-w-full mt-24">
      <div className="grid grid-cols-2">
        <div className="">
          <p className="md:text-lg lg:text-xl font-bold text-[#F2F2F2] pt-5 px-16 md:px-20">
            Address:
          </p>
          <p className="md:text-lg lg:text-xl text-[#F2F2F2] text-justify pt-3 pb-5 md:pb-10 px-16 md:px-20">
            292/1B Sharp Nagar, Kalapatti Road,
            <br />
            Kalapatti, Coimbatore 641 048
          </p>
        </div>
        <div className="px-2 md:px-4 lg:px-6 xl:px-8 py-8 flex justify-end ">
        <a className="" href="https://www.linkedin.com/company/asthra-medtech/">
          <img className="ml-auto w-12" src={linkedin} alt="linkedin" />
        </a>
        <a className="pl-8" href="https://www.linkedin.com/company/asthra-medtech/">
          <img className="ml-auto w-12 " src={mail} alt="linkedin" />
        </a>


        </div>
      </div>
    </div>
  );
};

export default Contact;
