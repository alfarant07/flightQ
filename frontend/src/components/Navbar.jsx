import { SiTheplanetarysociety } from "react-icons/si";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" m-2 flex bg-gray-50 items-center justify-between">
      <div className="flex items-center gap-2">
        {" "}
        <SiTheplanetarysociety className="text-2xl" />{" "}
        <Link to="/" className="text-lg font-bold">
          FlightStack
        </Link>
      </div>
      <div className="w-24" aria-hidden="true" />
    </nav>
  );
};

export default Navbar;
