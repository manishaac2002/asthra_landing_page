import { Link } from "react-router-dom";
import { AsthraLogo } from "../Icons/AsthraPattern";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-6">
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
            <Link to="/products">Product</Link>
          </li>
          <li className="px-2 lg:px-4 xl:px-6 text-sm lg:text-lg text-[#213B6D] hover:text-[#FFA726] hover:font-semibold transition-all duration-300 ease-in-out">
            <Link to="/career">Careers</Link>
          </li>
          <li className="px-2 lg:px-4 xl:px-6 text-sm lg:text-lg text-[#213B6D] hover:text-[#FFA726] hover:font-semibold transition-all duration-300 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;