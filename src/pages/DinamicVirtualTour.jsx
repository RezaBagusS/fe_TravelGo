import HandleHeaderVT from "../component/VirtualTourComp/HandleHeaderVT";
import DinamicMap from "../component/VirtualTourComp/DinamicMap";
import { useParams } from "react-router-dom";
import dotPattern from "../assets/dot-pattern.svg";
import { useEffect } from "react";

const dataWisata = [
  {
    id: 1,
    title: "Pantai Kuta",
    desc: "Pantai Kuta adalah sebuah pantai yang terletak di Kecamatan Kuta, Kabupaten Badung, Bali, Indonesia.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
  {
    id: 2,
    title: "Candi Borobudur",
    desc: "Candi Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Lokasi candi ini secara administratif terletak di wilayah Kecamatan Borobudur, Kabupaten Magelang, Provinsi Jawa Tengah, 40 kilometer di sebelah barat laut Yogyakarta, dan 86 kilometer di sebelah barat daya Surakarta.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
  {
    id: 3,
    title: "Raja Ampat",
    desc: "Raja Ampat adalah gugusan kepulauan di Provinsi Papua Barat, Indonesia. Kepulauan ini terletak di bagian barat laut Kepala Burung Pulau Papua. Raja Ampat terdiri dari 1.500 pulau kecil yang tercakup dalam empat kabupaten, yaitu Kepulauan Raja Ampat, Kabupaten Sorong, Kabupaten Raja Ampat, dan Kabupaten Teluk Bintuni.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
  {
    id: 4,
    title: "Pantai Losari",
    desc: "Pantai Losari adalah sebuah pantai yang terletak di Kelurahan Losari, Kecamatan Ujung Pandang, Kota Makassar, Sulawesi Selatan, Indonesia. Pantai ini terletak tidak jauh dari pusat Kota Makassar, tepatnya di sebelah barat daya Pelabuhan Soekarno-Hatta.",
    img: "https://i.ibb.co/0jC3xQ9/pantai-kuta.jpg",
  },
];

const DinamicVirtualTour = () => {
  let { wisataTitle } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = dataWisata.filter((item) => {
    return (
      item.title.toLowerCase() == wisataTitle.split("-").join(" ").toLowerCase()
    );
  });

  return (
    <>
      <div className="cust-outer-container text-black">
        <HandleHeaderVT data={filteredData} />
        <DinamicMap data={filteredData} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24">
        <img src={dotPattern} className="w-full" alt="MissingIMG" />
      </div>
    </>
  );
};

export default DinamicVirtualTour;
