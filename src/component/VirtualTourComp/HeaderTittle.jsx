import ballPattern from "../../assets/ball-pattern.svg";

const HeaderTittle = () => {
  return (
    <div className="cust-container flex justify-center pt-32 pb-10">
      <div className="relative w-full sm:w-10/12 md:w-9/12 flex flex-col gap-7 justify-center items-center">
        <h1 className="text-2xl z-10 md:text-4xl lg:text-5xl text-center leading-snug font-bold">
          Jelajahi Keindahan Indonesia dengan Virtual Tour
        </h1>
        <p className="text-justify md:text-center text-base md:text-xl text-cust-gray-500">
          Nikmati keindahan negara Indonesia dari layar anda dengan fitur
          Virtual Tour dari TravelGO yang membantu anda untuk menjelajahi
          Indonesia secara online.
        </p>
        <div className="absolute bottom-20 right-10 w-20 h-20">
          <img src={ballPattern} className="w-full" alt="MissingIMG" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTittle;
