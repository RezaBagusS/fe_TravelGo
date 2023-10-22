import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import ballPattern from "../../assets/ball-pattern.svg";
import dotPattern from "../../assets/dot-pattern.svg";

const Welcoming = () => {
  const [widthPlayer, setWidthPlayer] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      setWidthPlayer(window.innerWidth < 850 ? window.innerWidth - 60 : 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pt-16">
      <div className="cust-container relative flex justify-center py-16">
        <div className="relative w-full sm:w-10/12 xl:w-7/12 flex flex-col gap-7 justify-center items-center">
          <h1 className="text-2xl z-10 md:text-4xl lg:text-5xl text-center leading-snug font-bold">
            Temukan keindahan dan keberagaman budaya negara Indonesia
          </h1>
          <p className="text-justify md:text-center text-base md:text-xl text-cust-gray-500">
            TravelGO membantu kamu untuk memilih tempat wisata di Indonesia yang
            kaya akan budaya dan keberagaman serta petualangan yang menunggumu
            di Indonesia
          </p>
          <div className="flex gap-5">
            <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150">
              Mulai Sekarang
            </button>
            <button className="border-2 border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-cust-gray-500 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150">
              Eksplorasi
            </button>
          </div>
          <div className="overflow-hidden mt-10 rounded-3xl border-4 border-cust-gray-500">
            <ReactPlayer
              url="https://youtu.be/aKtb7Y3qOck?si=XGWRaRs--wfZMSnw"
              controls={true}
              width={widthPlayer}
              height={widthPlayer / 1.8}
            />
          </div>
          <div className="absolute top-0 left-8 w-20 h-20">
            <img src={ballPattern} className="w-full" alt="MissingIMG" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24">
        <img src={dotPattern} className="w-full" alt="MissingIMG" />
      </div>
    </div>
  );
};

export default Welcoming;
