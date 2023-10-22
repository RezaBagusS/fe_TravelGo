const CardWisata = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      <div className="col-span-1 overflow-hidden">
        <img
          src={data.img}
          className="w-full rounded-xl object-cover object-center"
          alt="MissingIMG"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-3 justify-center items-start">
        <h3 className="font-bold text-3xl">{data.title}</h3>
        <p className="font-semibold text-justify w-97% text-sm leading-snug text-cust-gray-500">
          {data.desc.length > 170
            ? `${data.desc.substring(0, 170)}...`
            : data.desc}
        </p>

        <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default CardWisata;
