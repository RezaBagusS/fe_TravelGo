import Welcoming from "../component/HomeComp/Welcoming";
import KeindahanIndonesia from "../component/HomeComp/KeindahanIndonesia";
import KeberagamanIndonesia from "../component/HomeComp/KeberagamanIndonesia";
import KulinerIndonesia from "../component/HomeComp/KulinerIndonesia";
import { useEffect } from "react";
import FotoWisata from "../component/HomeComp/FotoWisata";
import MapIndonesia from "../component/HomeComp/MapIndonesia";
import FiturTravelGo from "../component/HomeComp/FiturTravelGo";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../redux/slices/reduxLoadingSlice";

const Home = () => {

  // const dataLogin = useSelector((state) => state.dataLogin)
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setLoading(false));
  }, []);

  return (
    <>
      <div className="cust-outer-container text-black">
        <Welcoming />
        <KeindahanIndonesia />
        <KeberagamanIndonesia />
        <KulinerIndonesia />
        <FotoWisata />
        <FiturTravelGo />
        <MapIndonesia />
      </div>
    </>
  );
};

export default Home;
