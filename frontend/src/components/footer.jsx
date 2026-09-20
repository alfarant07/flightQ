import React from "react";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1F] flex justify-center w-full h-full">
      <p className="text-gray-300 text-center">© 2026 FlightStack</p>
      <a href="https://github.com/alfarant07/flightQ" size={20}>
        <SiGithub className="text-white ml-2" size={25} />
      </a>
    </footer>
  );
};

export default Footer;
