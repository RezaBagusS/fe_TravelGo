import HandleHeaderVT from "../component/VirtualTourComp/HandleHeaderVT";
import DinamicMap from "../component/VirtualTourComp/DinamicMap";
import { useNavigate, useParams } from "react-router-dom";
import dotPattern from "../assets/dot-pattern.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../redux/slices/reduxPopupSlice";

const DinamicVirtualTour = () => {
  let { wisataTitle } = useParams();
  const dataWisata = useSelector((state) => state.dataWisata.data);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);

    if (dataWisata.length == 0) {
      dispatch(
        setPopup({
          show: true,
          type: "warning",
          title: "WARNING",
          message: "Data Wisata Tidak Ditemukan, Kembali ke Halaman Sebelumnya",
          onConfirm: () => {
            dispatch(setPopup({ show: false }));
            navigate("/virtual-tour")
          },
        })
      );
    }

  }, []);

  const filteredData = dataWisata.filter((item) => {
    return (
      item.nama.toLowerCase() == wisataTitle.split("-").join(" ").toLowerCase()
    );
  });

  return dataWisata.length > 0 ? (
    <>
      <div className="cust-outer-container text-black">
        <HandleHeaderVT data={filteredData} />
        <DinamicMap data={filteredData} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24">
        <img src={dotPattern} className="w-full" alt="MissingIMG" />
      </div>
    </>
  ) : (
    <>
      <div className="cust-outer-container h-screen flex justify-center items-center text-black">
        <div className="w-full flex justify-center">
          <h1>
            DATA TIDAK DITEMUKAN, KEMBALI KE PAGE SEBELUMNYA
          </h1>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24">
        <img src={dotPattern} className="w-full" alt="MissingIMG" />
      </div>
    </>
  );
};

export default DinamicVirtualTour;
