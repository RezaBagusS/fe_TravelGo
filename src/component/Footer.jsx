import { Link } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

const dataMedsos = [facebook, twitter, instagram, youtube];

const dataMenu = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Virtual Tour",
    link: "/user/virtual-tour",
  },
  {
    name: "Wisata",
    link: "/user/wisata",
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

const dataKontak = [
  {
    id: 1,
    tittle: "kelompokipsi",
    icon: mail,
  },
  {
    id: 2,
    tittle: "(+62) 864465416841",
    icon: phone,
  },
  {
    id: 3,
    tittle: "Jl. yang benar",
    icon: location,
  },
];

const Footer = () => {
  return (
    <footer className="cust-outer-container py-10 ">
      <div className="cust-container grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <Link to={"/"}>
            <h2 className="text-[#14B8A6] cursor-pointer text-sm font-extrabold font-poppins transition-all duration-150">
              TravelGO
            </h2>
          </Link>
          <p className="text-xs w-7/12 text-cust-teal-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            quis quae et quos iste voluptatum in quam nostrum quod laboriosam!
          </p>
          <div className="flex flex-row gap-1">
            {dataMedsos.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-8 h-8 flex justify-center items-center"
                >
                  <Link to={"/"}>
                    <img src={item} alt="MissingIMG" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-3">
              <h2 className="text-sm text-[#14B8A6] font-bold">Menu</h2>
              {dataMenu.map((item, index) => {
                return (
                  <Link to={item.link} key={index}>
                    <p className="font-light text-xs text-cust-teal-500">
                      {item.name}
                    </p>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-sm  text-[#14B8A6] font-bold">
                Hubungi Kami
              </h2>
              {dataKontak.map((item) => {
                return (
                  <Link
                    to={"/"}
                    key={item.id}
                    className="flex flex-row items-center gap-2 font medium text-xs text-cust-teal-500"
                  >
                    <img src={item.icon} alt="MissingIcon" />
                    <p className="whitespace-nowrap">{item.tittle}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
