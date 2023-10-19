import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dataListNavbar = ["Beranda", "Virtual Tour", "Kontak", "Tentang"];

const Navbar = () => {
  const [styleScroll, setStyleScroll] = useState("bg-transparent");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setStyleScroll("bg-white drop-shadow-[0px_2px_3px_rgba(0,0,0,0.2)]");
      } else {
        setStyleScroll("bg-transparent");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <nav
      className={`fixed z-50 w-full text-base text-cust-gray-500
    transition-all duration-150 ${styleScroll}
    `}
    >
      <div className="cust-outer-container">
        <div className="cust-container flex flex-row justify-between items-center">
          <Link to={"/"}>
            <h2 className="text-[#14B8A6] cursor-pointer hover:scale-105 font-extrabold font-poppins transition-all duration-150">
              TravelGO
            </h2>
          </Link>
          <div className="py-5 flex items-center">
            <ul className="flex flex-row justify-between">
              {dataListNavbar.map((data, index) => (
                <li
                  key={index}
                  className="px-5 font-medium cursor-pointer hover:text-cust-teal-500 hover:font-semibold"
                >
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-5">
            <button className="border-2 border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150">
              Sign Up
            </button>
            <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-all duration-150">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
