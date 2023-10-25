import React from "react";
import search from "../../assets/search.svg";
import TagHome from "../TagHome";
import CardWisata from "./CardWisata";
import { useState } from "react";

const dataWisata = [
  {
    id: 1,
    title: "Pantai Kuta",
    dinamicTitle: "pantai-kuta",
    desc: "Pantai Kuta adalah sebuah pantai yang terletak di Kecamatan Kuta, Kabupaten Badung, Bali, Indonesia.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
  {
    id: 2,
    title: "Candi Borobudur",
    dinamicTitle: "candi-borobudur",
    desc: "Candi Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Lokasi candi ini secara administratif terletak di wilayah Kecamatan Borobudur, Kabupaten Magelang, Provinsi Jawa Tengah, 40 kilometer di sebelah barat laut Yogyakarta, dan 86 kilometer di sebelah barat daya Surakarta.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
  {
    id: 3,
    title: "Raja Ampat",
    dinamicTitle: "raja-ampat",
    desc: "Raja Ampat adalah gugusan kepulauan di Provinsi Papua Barat, Indonesia. Kepulauan ini terletak di bagian barat laut Kepala Burung Pulau Papua. Raja Ampat terdiri dari 1.500 pulau kecil yang tercakup dalam empat kabupaten, yaitu Kepulauan Raja Ampat, Kabupaten Sorong, Kabupaten Raja Ampat, dan Kabupaten Teluk Bintuni.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
  {
    id: 4,
    title: "Pantai Losari",
    dinamicTitle: "pantai-losari",
    desc: "Pantai Losari adalah sebuah pantai yang terletak di Kelurahan Losari, Kecamatan Ujung Pandang, Kota Makassar, Sulawesi Selatan, Indonesia. Pantai ini terletak tidak jauh dari pusat Kota Makassar, tepatnya di sebelah barat daya Pelabuhan Soekarno-Hatta.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
];

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/3 relative rounded-md overflow-hidden">
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

const TableWisata = () => {
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

  const filteredData = dataWisata.filter((data) => {
    return data.title.toLowerCase().includes(keyword.toLowerCase());
  })

  return (
    <div className="cust-container pt-5 pb-10">
      <SearchBar handleSearch={handleSearch} />
      <div className="w-full flex justify-start pt-5 pb-3 border-b-2">
        <h2 className="text-cust-gray-500 text-xl">Data Wisata :</h2>
      </div>
      <div className="w-full mt-5">
        <TagHome text={
            keyword === "" ? "REKOMENDASI WISATA" : `HASIL PENCARIAN : ${keyword}`
        } />
      </div>
      <div className="py-3 grid grid-cols-2 gap-5">
        {filteredData.map((data) => {
          return <CardWisata data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default TableWisata;
