import Welcoming from "../component/Welcoming";
import KeindahanIndonesia from "../component/KeindahanIndonesia";
import KeberagamanIndonesia from "../component/KeberagamanIndonesia";
import KulinerIndonesia from "../component/KulinerIndonesia";
import { useEffect } from "react";
import FotoWisata from "../component/FotoWisata";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="cust-outer-container text-black">
        <Welcoming />
        <KeindahanIndonesia />
        <KeberagamanIndonesia />
        <KulinerIndonesia />
        <FotoWisata />
      </div>
    </>
  );
};

export default Home;
