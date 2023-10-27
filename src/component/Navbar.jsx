import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import propType from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setDataLogin } from "../redux/slices/reduxDataLoginSlice";

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

const SideBarMenu = ({ openSidebar, setOpenSideBar }) => {
  const location = useLocation();
  const dataLogin = useSelector((state) => state.dataLogin.data);
  const dispatch = useDispatch();

  const handleImgProfile = () => {
    if (dataLogin.img) {
      return dataLogin.img;
    } else {
      return "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698376676/5856_hntzo9.jpg";
    }
  };

  return (
    <div
      className={`md:hidden fixed w-full h-screen bg-white transition-all duration-300
    ${openSidebar ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <div className="cust-container flex flex-col gap-5 py-5">
        {dataListNavbar.map((data, index) => {
          return (
            <Link
              to={data.link}
              onClick={() => setOpenSideBar(false)}
              key={index}
              className="relative group w-fit flex flex-col pb-1 overflow-hidden"
            >
              <h1 className="text-cust-gray-500 hover:text-cust-teal-500 hover:before:border-b-0 hover:after:border-b-2 text-base font-semibold transition-all duration-100">
                {data.name}
              </h1>
              <span
                className={`absolute bottom-0 w-full bg-cust-teal-500 p-0.5 rounded-full transition-all duration-500 ease-in-out
                ${
                  data.link == location.pathname
                    ? "translate-x-0"
                    : "group-hover:translate-x-0 -translate-x-full"
                }
              `}
              ></span>
            </Link>
          );
        })}
        {dataLogin.userId != "0" ? (
          <>
            <div className="flex flex-col gap-4 justify-center items-center w-full md:hidden relative bg-slate-300 rounded-xl py-2 px-3">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={handleImgProfile()}
                  className="w-16 h-16 rounded-full pointer-events-none"
                  alt="MissingIMG"
                />
                <div className=" flex flex-col gap-1">
                  <h1 className="text-sm font-semibold">{dataLogin.email}</h1>
                  <p className="text-xs font-normal">{dataLogin.name}</p>
                </div>
              </div>
              <Link
                to={"/admin/kelola-wisata"}
                onClick={() => setOpenSideBar(false)}
                className="w-full bg-slate-100 py-2 text-center font-normal hover:font-semibold rounded-lg hover:bg-slate-200 transition-all duration-100"
              >
                Kelola Wisata
              </Link>
              <button
                className="w-full bg-red-700 hover:bg-red-700/80 text-white py-2 text-center font-normal hover:font-semibold rounded-lg transition-all duration-100"
                onClick={() => {
                  dispatch(
                    setDataLogin({
                      email: "Email Not Found",
                      message: "Message Not Found",
                      img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698376676/5856_hntzo9.jpg",
                      userId: "0",
                    })
                  );
                  setOpenSideBar(false);
                }}
              >
                Log out
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-5">
            <Link
              to={"/auth/register"}
              className="border-2 border-cust-teal-500 whitespace-nowrap hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-base font-semibold px-4 py-3 text-center rounded-lg transition-all duration-150"
            >
              Sign Up
            </Link>
            <Link
              to={"/auth/login"}
              className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-base font-semibold px-4 py-3 text-center rounded-lg transition-all duration-150"
            >
              Login
            </Link>
          </div>
        )}
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
  const [openDropdown, setOpenDropdown] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const dataLogin = useSelector((state) => state.dataLogin.data);

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

  const handleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleImgProfile = () => {
    if (dataLogin.img) {
      return dataLogin.img;
    } else {
      return "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698376676/5856_hntzo9.jpg";
    }
  };

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
                    <span
                      className={`absolute bottom-0 group-hover:translate-x-0 -translate-x-full w-full bg-cust-teal-500 p-0.5 rounded-full transition-all duration-500 ease-in-out
                      ${
                        data.link == location.pathname
                          ? "translate-x-0"
                          : "group-hover:translate-x-0 -translate-x-full"
                      }
                    `}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {dataLogin.userId != "0" ? (
            <>
              <div className="hidden md:flex relative bg-slate-300 rounded-full p-1">
                <img
                  src={handleImgProfile()}
                  onClick={() => handleDropdown()}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  alt="MissingIMG"
                />
                {openDropdown && (
                  <ul className="absolute right-0 text-sm top-full h-fit translate-y-2 rounded-md bg-cust-teal-50 overflow-hidden ring-2 ring-slate-300">
                    <li className="bg-white text-cust-gray-700 text-end flex flex-col gap-1 border-b-2 px-3 py-2 whitespace-nowrap">
                      <h1 className="text-sm font-semibold">
                        {dataLogin.email}
                      </h1>
                      <p className="text-xs font-normal">{dataLogin.name}</p>
                    </li>
                    <li className="w-full cursor-pointer text-end px-3 py-2 hover:bg-cust-teal-500/40 hover:text-cust-gray-700 whitespace-nowrap transition-all  duration-150">
                      <Link
                        to={"/admin/kelola-wisata"}
                        onClick={() => handleDropdown()}
                      >
                        Kelola Wisata
                      </Link>
                    </li>
                    <li className="w-full cursor-pointer text-end px-3 py-2 hover:bg-cust-teal-500/40 hover:text-cust-gray-700 whitespace-nowrap transition-all  duration-150">
                      <button
                        onClick={() => {
                          dispatch(
                            setDataLogin({
                              email: "Email Not Found",
                              message: "Message Not Found",
                              img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698376676/5856_hntzo9.jpg",
                              userId: "0",
                            })
                          );
                          handleDropdown();
                        }}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
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
          )}
          <NavbarMobile
            isScroll={isScroll}
            openSideBar={openSideBar}
            setOpenSideBar={setOpenSideBar}
          />
        </div>
      </div>
      <SideBarMenu
        openSidebar={openSideBar}
        openDropdown={openDropdown}
        setOpenSideBar={setOpenSideBar}
        handleDropdown={handleDropdown}
      />
    </nav>
  );
};

export default Navbar;

SideBarMenu.propTypes = {
  openSidebar: propType.bool.isRequired,
  setOpenSideBar: propType.func.isRequired,
  openDropdown: propType.bool.isRequired,
  handleDropdown: propType.func.isRequired,
};

NavbarMobile.propTypes = {
  isScroll: propType.bool.isRequired,
  openSideBar: propType.bool.isRequired,
  setOpenSideBar: propType.func.isRequired,
};
