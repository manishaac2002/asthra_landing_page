import { Stars } from "../Icons/AsthraPattern";

const Career = () => {
  return (
    <div>
      <div id="careers" className="absolute sm:left-50 md:left-50 lg:left-60 xl:left-200 -z-50 opacity-50 sm:opacity-75 md:opacity-100 w-[10rem] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] max-w-none ">
        <Stars />
      </div>

      <div>
        <p className="text-[#213B6D] text-xl ml-40 md:ml-0 md:text-4xl font-bold text-center pt-12 md:pt-28">
          Join Our Team
        </p>
        <p className="text-[#FFA726] text-2xl xl:text-3xl ml-40 md:ml-0 font-bold text-center mt-4 lg:mt-0 pt-6 md:pt-8">
          Innovate. Collaborate. Transform.
        </p>
        <p className="lg:text-xl text-center pt-2 ml-40 md:ml-0">
          We are always looking for passionate researchers, engineers, and
          innovators to join our team.
        </p>
        <a
          href="admin@asthramedtech.com"
          className="block text-center ml-40 md:ml-0 lg:text-xl pt-2 text-[#213B6D] underline"
        >
          admin@asthramedtech.com
        </a>
      </div>
    </div>
  );
};

export default Career;
