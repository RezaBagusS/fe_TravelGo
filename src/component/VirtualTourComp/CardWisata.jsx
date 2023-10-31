import { Link } from "react-router-dom";
import propType from "prop-types";

const CardWisata = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      <div className="col-span-1 overflow-hidden">
        <img
          src={data.gambar}
          className="w-full aspect-square rounded-xl object-cover object-center"
          alt="MissingIMG"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-3 justify-center items-start">
        <h3 className="font-bold text-xl md:text-3xl">{data.nama}</h3>
        <p className="font-semibold text-justify text-xs sm:text-sm leading-snug text-cust-gray-500">
          {data.deskripsi.length > 160
            ? data.deskripsi.slice(0, 160).split(" ").slice(0, -1).join(" ") +
              "..."
            : data.deskripsi}
        </p>

        <Link
          to={`/virtual-tour/${data.nama.split(" ").join("-")}`}
          className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default CardWisata;

CardWisata.propTypes = {
  data: propType.object.isRequired,
};
