import { Link } from "react-router-dom";
import { AsthraLogo } from "../Icons/AsthraPattern";

const NavBar = () => {
  return (
    <div className="flex sticky top-0 bg-white shadow-md z-50 p-4">
      {/* Logo */}
      <div>
        <Link to="/">
          <AsthraLogo />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="md:ml-auto hidden md:block">
        <ul className="flex">
          <li className="px-2 lg:px-4 xl:px-6 text-sm lg:text-lg text-[#213B6D] hover:text-[#FFA726] hover:font-semibold transition-all duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 lg:px-4 xl:px-6 text-sm lg:text-lg text-[#213B6D] hover:text-[#FFA726] hover:font-semibold transition-all duration-300 ease-in-out">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 lg:px-4 xl:px-6 text-sm lg:text-lg text-[#213B6D] hover:text-[#FFA726] hover:font-semibold transition-all duration-300 ease-in-out">
            <Link to="/products">Product & Services</Link>
          </li>
          <li className="px-2 lg:px-4 xl:px-6 text-sm lg:text-lg text-[#213B6D] hover:text-[#FFA726] hover:font-semibold transition-all duration-300 ease-in-out">
            <Link to="/career">Careers</Link>
          </li>
          <li className="px-2 lg:px-4 xl:px-6 text-sm lg:text-lg text-[#213B6D] hover:text-[#FFA726] hover:font-semibold transition-all duration-300 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;