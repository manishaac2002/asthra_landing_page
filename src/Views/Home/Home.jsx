import vector from "../../Assets/Vector.svg";
import { Arrow } from "../../Icons/AsthraPattern.jsx";


const Home = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center relative"
        id="home">
        <div>
          <p className="text-lg md:text-[2rem] lg:text-[4rem] text-[#213B6D] font-extralight leading-tight xl:-translate-x-40 2xl:-translate-x-60">
            <span className="font-bold text-5xl md:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] leading-none">
              Transforming
            </span>{" "}
            <br />
            care with innovative and precision <br />
            driven Robotic solutions.
          </p>
        </div>
        
        <div className="inline-flex items-center gap-2 underline mt-6 ">
          <p className="text-lg md:text-2xl">See our Projects</p>
          <Arrow  />
        </div>

        <div className="absolute bottom-0 w-full flex justify-end">
          <img src={vector} alt="asthramedtech-vector" />
        </div>
      </div>
    </>
  );
};

export default Home;
