import { SiTheplanetarysociety } from "react-icons/si";
import Searchform from "./Searchform";

const Navbar = () => {
  return (
    <nav className=" m-2 flex bg-gray-50 items-center justify-between">
      <div className="flex items-center gap-2">
        {" "}
        <SiTheplanetarysociety className="text-2xl" />{" "}
        <h1 className="text-lg">FlightQ</h1>
      </div>
      <div className="w-24" aria-hidden="true" />
    </nav>
  );
};

export default Navbar;
