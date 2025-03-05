import { Rocket, Spaceman, Stars } from "../Icons/AsthraPattern";
import ai from "../assets/ai.svg";

const Career = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <img
        src={ai}
        alt="asthramedtech-ai"
        className="w-full h-screen object-cover absolute inset-0"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className=" ">
          <h1 className="text-[#213B6D] font-bold text-4xl md:text-[5rem] xl:text-[7rem] leading-tight">
            Beyond Limits
          </h1>{" "}
          <br />
          <p className="text-center text-sm md:text-[2rem] lg:text-3xl text-[#333] font-extralight leading-none">
            Innovation knows no boundaries. Join us in <br />
            redefining what’s possible in healthcare!
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-start ">
        <Spaceman/>
      </div>
      <div className="absolute bottom-0 w-full flex justify-end -translate-y-0.5">
        <Rocket/>
      </div>
    </div>
  );
};

export default Career;
