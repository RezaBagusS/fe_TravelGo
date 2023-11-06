import { Link } from "react-router-dom";
import TagHome from "../TagHome";

const KulinerIndonesia = () => {
  return (
    <div className="cust-container py-4 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex justify-center">
          <img
            className="h-96 w-[500px] object-cover rounded-3xl drop-shadow-[0px_3px_8px_rgba(0,0,0,0.2)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697738525/Group_6_dhp478.png"
            alt="MissingIMG"
          />
        </div>
        <div className="flex justify-end text-cust-teal-500">
          <div className="flex flex-col gap-4 items-start md:ps-5 justify-center">
            <TagHome text="KULINER INDONESIA" />
            <h2 className="text-cust-gray-700 text-2xl sm:text-3xl md:text-4xl font-bold">
              Kelezatan kuliner Indonesia yang memanjakan lidah-mu dan lezat!
            </h2>
            <p className="font-medium text-sm sm:text-base text-start w-11/12">
              Indonesia memiliki banyak ragam kuliner yang bisa kalian coba
              mulai dari minuman, makanan ataupun makanan khas tiap daerah yang
              siap mewarnai liburan mu di Indonesia dengan kelezatan yang nikmat
              hanya di Indonesia.
            </p>
            <Link to={"/virtual-tour"} className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150">
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KulinerIndonesia;
