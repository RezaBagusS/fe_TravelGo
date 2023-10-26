import dotPattern from "../../assets/dot-pattern.svg";

const HeaderKontak = () => {
  return (
    <div className="pt-10 md:pt-16">
      <div className="cust-container relative flex flex-col gap-5 justify-center items-center py-16">
        <h1 className="text-2xl z-10 md:text-4xl lg:text-5xl text-center leading-snug font-extrabold">
          Kontak
        </h1>
        <p className="w-11/12 sm:w-full text-center text-base md:text-xl text-cust-gray-500">
          Tim kami akan selalu siap untuk membantu kamu
        </p>
        <button className="w-fit bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150">
          Hubungi Kami
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24">
        <img src={dotPattern} className="w-full" alt="MissingIMG" />
      </div>
    </div>
  );
};

export default HeaderKontak;
