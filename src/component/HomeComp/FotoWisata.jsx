import TagHome from "../TagHome";
import { useState, useEffect } from "react";
import { getActiveUser } from "../../Helpers/SessionHelper";
import { Link } from "react-router-dom";

const FotoWisata = () => {
  const [pathEksplorasi, setPathEksplorasi] = useState("/auth/login");

  useEffect(() => {
    if (getActiveUser()) {
      setPathEksplorasi("/user/eksplorasi");
    } else {
      setPathEksplorasi("/auth/login");
    }
  }, [getActiveUser()]);

  return (
    <div className="cust-container py-10 flex flex-col gap-4 ">
      <div className="w-fit mx-auto text-cust-teal-500">
        <TagHome text="FOTO FOTO WISATA INDONESIA" />
      </div>
      <h2 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        Jelajahi Indonesia Lewat Foto Foto berikut Ini
      </h2>
      <p className="font-medium text-cust-teal-500 text-base text-center mx-auto w-full sm:w-8/12">
        foto foto dibawah ini merupakan foto yang diabadikan oleh pengguna lain
        yang menampilkan keindahan alam dan keberagaman budaya yang dimiliki
        Indonesia!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-10 mt-5 md:mt-0">
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697739179/unsplash_b9qNHB8Wgx0_hudugv.png"
          className="rounded-3xl overflow-hidden object-cover"
          alt="MissingIMG"
        />
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697739185/Group_10_mmrbs5.png"
          className="rounded-3xl hidden sm:flex overflow-hidden object-cover"
          alt="MissingIMG"
        />
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697739181/unsplash_u1nqFca6QgI_vdxysk.png"
          className="rounded-3xl hidden sm:flex overflow-hidden object-cover"
          alt="MissingIMG"
        />
      </div>
      <div className="w-full flex justify-center mt-2">
        <Link to={pathEksplorasi} className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-150">
          Jelajahi Wisata Lainnya
        </Link>
      </div>
    </div>
  );
};

export default FotoWisata;
