import vector from "../images/Vector.svg";

const Home = () => {
  return (
    <>
      <div className="h-[40vh] md:h-[80vh] lg:h-screen flex items-center justify-center relative" id="home">

        <h1 className=" text-sm md:text-[2rem] lg:text-[4rem] text-[#213B6D] font-extralight xl:-translate-x-60 xl:-translate-y-10 leading-tight">
          <span className="font-bold text-4xl md:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] leading-none">
            Transforming
          </span>{" "}
          <br />
          care with innovative and precision <br />
          driven Robotic solutions. 
        </h1> 

        {/* Image Positioned at Bottom */}
        <div className="absolute bottom-0 w-full flex justify-end ">
          <img src={vector} alt="asthramedtech-vector"/>
        </div>
      </div>
    </>
  );
};

export default Home;
