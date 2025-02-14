import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png"

const Contact = () => {
  return (
    <div id="contact" className="bg-[#213B6D] w-full mt-24">
      <div className="grid grid-cols-2">
        <div className="">
          <p className="text-sm font-bold text-[#F2F2F2] pt-5 px-5 md:px-20">
            Address:
          </p>
          <p className="text-sm text-[#F2F2F2] text-justify pb-5 px-5 md:px-20">
            292/1B Sharp Nagar, Kalapatti Road, Kalapatti, Coimbatore 641 048
          </p>
        </div>
        <div className="px-10 flex justify-end ">
        <a className="py-8" href="https://www.linkedin.com/company/asthra-medtech/">
          <img className="ml-auto w-6 lg:w-8" src={linkedin} alt="linkedin" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
