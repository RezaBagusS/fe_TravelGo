import dotPattern from "../../assets/dot-pattern.svg";

const HeaderTentang = () => {
  return (
    <div className="py-10">
      <div className="cust-container relative flex flex-col gap-5 justify-center items-center py-16">
        <h1 className="text-2xl z-10 md:text-4xl lg:text-5xl text-center leading-snug font-bold md:font-extrabold">
          Tentang
        </h1>
        <p className="w-10/12 lg:w-9/12 text-justify md:text-center text-base md:text-xl text-cust-gray-500">
          TravelGo membantu kamu untuk memilih tempat wisata di Indonesia yang
          kaya akan budaya dan keberagaman serta petualangan yang menunggumu di
          Indonesia.
        </p>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24">
        <img src={dotPattern} className="w-full" alt="MissingIMG" />
      </div>
    </div>
  );
};

export default HeaderTentang;
