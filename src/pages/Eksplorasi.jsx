import { useState } from "react";
import search from "../assets/search.svg";
import { Link } from "react-router-dom";
import { getActiveUser } from "../Helpers/SessionHelper";
import { motion } from "framer-motion";

const dataWisata = [
  {
    id: 1,
    title: "Pantai Kuta",
    desc: "Pantai Kuta adalah sebuah pantai yang terletak di Kecamatan Kuta, Kabupaten Badung, Bali, Indonesia.",
    img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698139447/unsplash_NA6sdVZuHPc_wqujet.png",
  },
  {
    id: 2,
    title: "Candi Borobudur",
    desc: "Candi Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Lokasi candi ini secara administratif terletak di wilayah Kecamatan Borobudur, Kabupaten Magelang, Provinsi Jawa Tengah, 40 kilometer di sebelah barat laut Yogyakarta, dan 86 kilometer di sebelah barat daya Surakarta.",
    img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698139447/unsplash_NA6sdVZuHPc_wqujet.png",
  },
  {
    id: 3,
    title: "Raja Ampat",
    desc: "Raja Ampat adalah gugusan kepulauan di Provinsi Papua Barat, Indonesia. Kepulauan ini terletak di bagian barat laut Kepala Burung Pulau Papua. Raja Ampat terdiri dari 1.500 pulau kecil yang tercakup dalam empat kabupaten, yaitu Kepulauan Raja Ampat, Kabupaten Sorong, Kabupaten Raja Ampat, dan Kabupaten Teluk Bintuni.",
    img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698139447/unsplash_NA6sdVZuHPc_wqujet.png",
  },
  {
    id: 4,
    title: "Pantai Losari",
    desc: "Pantai Losari adalah sebuah pantai yang terletak di Kelurahan Losari, Kecamatan Ujung Pandang, Kota Makassar, Sulawesi Selatan, Indonesia. Pantai ini terletak tidak jauh dari pusat Kota Makassar, tepatnya di sebelah barat daya Pelabuhan Soekarno-Hatta.",
    img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698139447/unsplash_NA6sdVZuHPc_wqujet.png",
  },
];

const Eksplorasi = () => {
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    const inputKeyword = e.target.value;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      setKeyword(inputKeyword);
    }, 1000);

    setTypingTimeout(newTimeout);
  };

  const SearchBar = () => {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full relative rounded-md overflow-hidden">
          <input
            type="search"
            onChange={(e) => handleSearch(e)}
            className="focus:border-cust-teal-500 w-full text-base text-cust-teal-500 border rounded-md border-cust-gray-500"
            placeholder="Cari Wisata ..."
          />
          <div className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-5 h-5">
            <img src={search} className="w-full" alt="Missingicon" />
          </div>
        </div>
      </div>
    );
  };

  const ModalToLogin = () => {
    return (
      <div className="w-screen h-screen fixed overflow-hidden top-0 left-0 flex justify-center items-center z-50 bg-black/70 ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5/12 h-[40vh] relative rounded-3xl flex flex-col gap-5 items-center pt-20 pb-5 bg-cust-teal-50"
        >
          <div className="absolute -top-1/2 translate-y-1/2 p-5 aspect-square w-32 border-8 border-cust-teal-50 rounded-full bg-white">
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1698847585/sign-warning-icon_34355_jxgqsf.png"
              className="w-full"
              alt="Icon"
            />
          </div>
          <h2 className="font-bold text-3xl">Warning</h2>
          <p className="font-medium text-lg">
            Login terlebih dahulu untuk mengakses halaman ini!!
          </p>
          <Link
            to={"/auth/login"}
            className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-150"
          >
            Login
          </Link>
        </motion.div>
      </div>
    );
  };

  const HeaderMenu = () => {
    return (
      <div className="grid grid-cols-12 gap-3">
        <button className="col-span-6 md:col-span-2 border-2 border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-150">
          Eksplorasi
        </button>
        <button className="col-span-6 md:col-span-2 border-2 whitespace-nowrap border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-3 py-2 rounded-full transition-all duration-150">
          Upload Foto
        </button>
        <div className="col-span-12 md:col-span-8">
          <SearchBar />
        </div>
      </div>
    );
  };

  const TableIMG = () => {
    const [isHover, setIsHover] = useState(false);
    const [idHover, setIdHover] = useState(null);

    const handleHover = () => {
      setIsHover((prev) => !prev);
    };

    const handleMouseEnter = (id) => {
      setIdHover(id);
    };

    const handleMouseLeave = () => {
      setIdHover(null);
    };

    return (
      <div className="grid grid-cols-12 gap-5 md:gap-10 mt-10">
        {dataWisata.map((data) => {
          return (
            data.id < 5 && (
              <div
                key={data.id}
                onMouseEnter={() => {
                  handleHover();
                  handleMouseEnter(data.id);
                }}
                onMouseLeave={() => {
                  handleHover();
                  handleMouseLeave();
                }}
                className="relative w-full cursor-pointer h-fit col-span-6 sm:col-span-4 md:col-span-3 rounded-3xl overflow-hidden"
              >
                <div
                  className={`w-full h-full absolute bg-black flex justify-center items-center p-2 transition-all duration-500
                    ${
                      isHover && idHover == data.id ? "opacity-40" : "opacity-0"
                    }
                `}
                >
                  <div className="w-20 h-20 flex justify-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 -960 960 960"
                      className="w-full opacity-70"
                    >
                      <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-lg font-bold text-center text-white/80">
                      View
                    </p>
                  </div>
                </div>
                <img
                  src={data.img}
                  className="w-full  object-cover object-center"
                  alt="MissingIMG"
                />
              </div>
            )
          );
        })}
      </div>
    );
  };

  return (
    <div className="cust-outer-container relative text-black">
      <div className="cust-container pt-20">
        {!getActiveUser() && <ModalToLogin />}
        <HeaderMenu />
        <TableIMG />
      </div>
    </div>
  );
};

export default Eksplorasi;
