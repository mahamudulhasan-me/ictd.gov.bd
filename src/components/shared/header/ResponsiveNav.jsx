"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ResponsiveNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border border-gray-300 text-2xl p-1 rounded-md w-fit  z-50 bg-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose /> : <FaBars />}
      </div>
      <div
        className={`fixed top-18 right-0 w-full h-fit bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-6 divide-y z-50">
          <h5 className="navItem text-orange-600 hover:bg-orange-600">
            আমাদের সম্পর্কিত
          </h5>
          <h6 className="navItem text-rose-600 hover:bg-rose-600">
            অধীনস্থ দপ্তর/অফিস/সংস্থা
          </h6>
          <h6 className="navItem text-cyan-600 hover:bg-cyan-600">
            প্রকল্প/কর্মসূচি{" "}
          </h6>
          <h6 className="navItem text-violet-600 hover:bg-violet-700">
            গ্যালারি{" "}
          </h6>
          <h6 className="navItem text-amber-600 hover:bg-amber-600">
            আইন/নীতিমালা
          </h6>
          <h6 className="navItem text-lime-600 hover:bg-lime-600">ই-সেবা</h6>
          <h6 className="navItem text-blue-600 hover:bg-blue-600">
            যোগাযোগ ও মতামত
          </h6>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveNav;
