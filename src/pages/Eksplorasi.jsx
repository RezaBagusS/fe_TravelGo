import { useEffect, useState } from "react";
import search from "../assets/search.svg";

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

  const HeaderMenu = () => {
    return (
      <div className="grid grid-cols-12 gap-3">
        <button className="col-span-2 border-2 border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-150">
          Eksplorasi
        </button>
        <button className="col-span-2 border-2 border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-150">
          Upload Foto
        </button>
        <div className="col-span-8">
          <SearchBar />
        </div>
      </div>
    );
  };

  const TableIMG = () => {

    const [isHover, setIsHover] = useState(false);
    const [idHover, setIdHover] = useState(null);

    const handleHover = () => {
        setIsHover(prev => !prev);
    }

    const handleMouseEnter = (id) => {
        setIdHover(id);
    }

    const handleMouseLeave = () => {
        setIdHover(null);
    }

    return (
      <div className="grid grid-cols-12 gap-10 mt-10">
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
                className="relative w-full cursor-pointer h-[600px] col-span-4 rounded-3xl overflow-hidden"
              >
                <div className={`w-full h-full absolute bg-black/40 p-2 transition-all duration-500
                    ${isHover && idHover == data.id ? 'translate-y-0' : '-translate-y-full'}
                `}></div>
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
    <div className="cust-outer-container text-black">
      <div className="cust-container py-20">
        <HeaderMenu />
        <TableIMG />
      </div>
    </div>
  );
};

export default Eksplorasi;
