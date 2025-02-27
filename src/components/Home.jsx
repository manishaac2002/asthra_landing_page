import vector from "../images/Vector.svg";

const Home = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center relative">
  <h1 className="text-[4rem] text-[#213B6D] font-extralight">
    <span className="font-bold 2xl:text-[8rem]">Transforming</span> <br />
    care with innovative and precision-driven Robotic solutions.
  </h1>
  
  {/* Image Positioned at Bottom */}
  <div className="absolute bottom-0 w-full flex justify-end">
    <img src={vector} alt="vector" className="" />
  </div>
</div>

    </>
  );
};

export default Home;
