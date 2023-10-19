import ReactPlayer from "react-player";

const Welcoming = () => {
  return (
    <div className="pt-16">
      <div className="w-full flex justify-center py-16">
        <div className="w-7/12 flex flex-col gap-7 justify-center items-center">
          <h1 className="text-5xl text-center leading-snug font-bold">
            Temukan keindahan dan keberagaman budaya negara Indonesia
          </h1>
          <p className="text-justify text-xl text-cust-gray-500">
            TravelGO membantu kamu untuk memilih tempat wisata di Indonesia yang
            kaya akan budaya dan keberagaman serta petualangan yang menunggumu
            di Indonesia
          </p>
          <div className="flex gap-5">
            <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-6 py-2 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150">
              Mulai Sekarang
            </button>
            <button className="border-2 border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-cust-gray-500 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150">
              Eksplorasi
            </button>
          </div>
          <div className="overflow-hidden rounded-3xl border-4 border-cust-gray-500">
            <ReactPlayer
              url="https://youtu.be/aKtb7Y3qOck?si=XGWRaRs--wfZMSnw"
              controls={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcoming;
