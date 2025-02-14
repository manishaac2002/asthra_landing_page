import armRobo from "../images/Robots.webp"


const Home = () => {
  return (
    <>
      <div id="home" className="absolute left-4 md:left-24 lg:left-50 xl:left-70 2xl:left-80 opacity-100 pt-24 w-sm md:w-xl lg:w-2xl xl:w-3xl 2xl:w-7xl">
        <img src={armRobo} alt="armrobo" />
      </div>
    <div className="relative pl-10 sm:pl-24 md:pl-10 lg:pl-38 xl:pl-68 mt-38 md:mt-56 lg:mt-68 xl:mt-72 mr-10 lg:mr-20 xl:mr-40 ">
        <p className=" text-xl sm:text-3xl xl:text-4xl 2xl:text-7xl font-bold text-[#213B6D] text-justify">Transforming care with innovative and precision 
        driven <span className="text-[#FFA726]">Robotic solutions.</span> </p>
    </div>
    </>
  );
};

export default Home;
