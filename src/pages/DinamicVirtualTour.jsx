import HandleHeaderVT from "../component/VirtualTourComp/HandleHeaderVT";
import DinamicMap from "../component/VirtualTourComp/DinamicMap";
import { useParams } from "react-router-dom";
import dotPattern from "../assets/dot-pattern.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DinamicVirtualTour = () => {
  let { wisataTitle } = useParams();
  const dataWisata = useSelector((state) => state.dataWisata.dataWisata);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = dataWisata.filter((item) => {
    return (
      item.nama.toLowerCase() == wisataTitle.split("-").join(" ").toLowerCase()
    );
  });

  console.log("Filtered Data : ", filteredData);

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
