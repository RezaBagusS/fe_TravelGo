import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const dataListNavbar = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Virtual Tour",
    link: "/user/virtual-tour",
  },
  {
    name: "Eksplorasi",
    link: "/user/eksplorasi",
  },
  {
    name: "Kontak",
    link: "/kontak",
  },
  {
    name: "Tentang",
    link: "/tentang",
  },
];

const SideBarMenu = ({ openSidebar }) => {
  return (
    <div
      className={`fixed w-full h-screen bg-white transition-all duration-300
    ${openSidebar ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <div className="cust-container flex flex-col gap-5 py-5">
        {dataListNavbar.map((data, index) => {
          return (
            <Link
              to={data.link}
              key={index}
              className="relative group w-fit flex flex-col pb-1 overflow-hidden"
            >
              <h1 className="text-cust-gray-500 hover:text-cust-teal-500 hover:before:border-b-0 hover:after:border-b-2 text-base font-semibold transition-all duration-100">
                {data.name}
              </h1>
              <span className="absolute bottom-0 group-hover:translate-x-0 -translate-x-full w-full bg-cust-teal-500 p-0.5 rounded-full transition-all duration-500 ease-in-out"></span>
            </Link>
          );
        })}
        <div className="flex flex-col gap-5">
          <Link
            to={"/auth/register"}
            className="border-2 text-center border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150"
          >
            Sign Up
          </Link>
          <Link
            to={"/auth/login"}
            className="bg-cust-teal-500 text-center hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-all duration-150"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const NavbarMobile = ({ isScroll, setOpenSideBar, openSideBar }) => {
  const openMenu = () => {
    setOpenSideBar((prev) => !prev);
  };

  const OpenSideBarStyles = (position) => {
    if (openSideBar) {
      switch (position) {
        case "top":
          return "p-0.5 w-full rounded-sm transform transition-all duration-150 rotate-45 translate-y-full";
        case "middle":
          return "hidden";
        case "bottom":
          return "p-0.5 w-full rounded-sm transition-all duration-150 -rotate-45 -translate-y-full";
        default:
          return "";
      }
    } else {
      switch (position) {
        case "top":
          return "p-0.5 w-full rounded-sm transform translate-y-0 transition-all duration-150";
        case "middle":
          return "p-0.5 w-full rounded-sm translate-x-0";
        case "bottom":
          return "p-0.5 w-full rounded-sm translate-y-0 transition-all duration-150";
        default:
          return "";
      }
    }
  };

  return (
    <div
      className={`w-fit rounded-md md:hidden cursor-pointer flex flex-row justify-between items-center text-black
      ${!isScroll && "bg-cust-teal-500 hover:bg-cust-teal-500/70"}
    `}
    >
      <div
        onClick={() => openMenu()}
        className={`px-2 bg-cust-pinkMuda rounded-md cursor-pointer
          ${isScroll && "hover:bg-cust-teal-500/10"}
          ${openSideBar ? "py-3" : "py-2"}
        `}
      >
        <div className="flex flex-col w-6 justify-center items-center gap-y-1">
          <span
            className={
              OpenSideBarStyles("top") +
              `
            ${isScroll ? "bg-cust-teal-500" : "bg-cust-teal-50"}
          `
            }
          ></span>
          <span
            className={
              OpenSideBarStyles("middle") +
              `
            ${isScroll ? "bg-cust-teal-500" : "bg-cust-teal-50"}
          `
            }
          ></span>
          <span
            className={
              OpenSideBarStyles("bottom") +
              `
            ${isScroll ? "bg-cust-teal-500" : "bg-cust-teal-50"}
          `
            }
          ></span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [styleScroll, setStyleScroll] = useState("bg-transparent");
  const [isScroll, setIsScroll] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [navbarDisplay, setNavbarDisplay] = useState(`fixed`);

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setStyleScroll("bg-white drop-shadow-[0px_2px_3px_rgba(0,0,0,0.2)]");
        setIsScroll(true);
      } else {
        setStyleScroll("bg-transparent");
        setIsScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <nav
      className={`${
        location.pathname === "/auth/login" ||
        location.pathname === "/auth/register"
          ? "hidden"
          : "fixed"
      } z-50 w-full text-base text-cust-gray-500
    transition-all duration-150 ${styleScroll}
    `}
    >
      <div className="cust-outer-container">
        <div className="cust-container flex flex-row justify-between items-center">
          <Link to={"/"}>
            <h2 className="text-[#14B8A6] py-5 md:py-0 cursor-pointer hover:scale-105 font-extrabold font-poppins transition-all duration-150">
              TravelGO
            </h2>
          </Link>
          <div className="py-5 hidden md:flex items-center">
            <ul className="flex flex-row justify-between">
              {dataListNavbar.map((data, index) => (
                <li
                  key={index}
                  className="px-3 xl:px-5 font-medium cursor-pointer hover:text-cust-teal-500 hover:font-semibold"
                >
                  <Link
                    to={data.link}
                    key={index}
                    className="relative group w-fit flex flex-col pb-1 overflow-hidden"
                  >
                    <h1 className="text-cust-gray-500 hover:text-cust-teal-500 hover:before:border-b-0 hover:after:border-b-2 text-sm lg:text-base whitespace-nowrap font-semibold transition-all duration-100">
                      {data.name}
                    </h1>
                    <span className="absolute bottom-0 group-hover:translate-x-0 -translate-x-full w-full bg-cust-teal-500 p-0.5 rounded-full transition-all duration-500 ease-in-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex gap-5">
            <Link
              to={"/auth/register"}
              className="border-2 border-cust-teal-500 whitespace-nowrap hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-2.5 lg:px-4 py-1 lg:py-2 rounded-lg transition-all duration-150"
            >
              Sign Up
            </Link>
            <Link
              to={"/auth/login"}
              className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-2.5 lg:px-6 py-1 lg:py-2 rounded-lg transition-all duration-150"
            >
              Login
            </Link>
          </div>
          <NavbarMobile
            isScroll={isScroll}
            openSideBar={openSideBar}
            setOpenSideBar={setOpenSideBar}
          />
        </div>
      </div>
      <SideBarMenu openSidebar={openSideBar} />
    </nav>
  );
};

export default Navbar;
