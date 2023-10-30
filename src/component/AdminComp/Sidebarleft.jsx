import home from "../../assets/home.svg";
import add from "../../assets/addWisata.svg";
import profile from "../../assets/profile.svg";
import exit from "../../assets/exit.svg";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const SidebarLeft = () => {
  const location = useLocation();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center w-full items-center pt-10">
          <div className="w-16 h-16 rounded-2xl p-2 transition-all duration-150">
            <img src={logo} className="w-full" alt="MissingIMG" />
          </div>
        </div>
        <div className="flex justify-center w-full items-center">
          <Link
            to={"/admin/kelola-wisata"}
            className={`cursor-pointer hover:bg-gray-100 w-16 h-16 rounded-2xl p-2 transition-all duration-150
            ${location.pathname === "/admin/kelola-wisata" && "bg-gray-100"}
            `}
          >
            <img src={home} className="w-full" alt="MissingIMG" />
          </Link>
        </div>
        <div className="flex justify-center w-full items-center">
          <Link
            to={"/admin/add-wisata"}
            className={`cursor-pointer hover:bg-gray-100 w-16 h-16 rounded-2xl p-2 transition-all duration-150
            ${location.pathname === "/admin/add-wisata" && "bg-gray-100"}`}
          >
            <img src={add} className="w-full" alt="MissingIMG" />
          </Link>
        </div>
        <div className="flex justify-center w-full items-center">
          <Link
            to={"/admin/profile"}
            className={`cursor-pointer hover:bg-gray-100 w-16 h-16 rounded-2xl p-2 transition-all duration-150
            ${location.pathname === "/admin/profile" && "bg-gray-100"}`}
          >
            <img src={profile} className="w-full" alt="MissingIMG" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full items-center pb-5">
        <Link
          to={"/"}
          className="cursor-pointer hover:bg-gray-100 w-14 h-14 rounded-2xl p-2 transition-all duration-150"
        >
          <img src={exit} className="w-full" alt="MissingIMG" />
        </Link>
      </div>
    </div>
  );
};

export default SidebarLeft;
