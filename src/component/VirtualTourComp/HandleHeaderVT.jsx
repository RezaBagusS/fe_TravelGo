
import ballPattern from "../../assets/ball-pattern.svg";

const HandleHeaderVT = ({ data }) => {

  return data.map((item, index) => {
    return data.leght != 0 ? (
      <div
        key={index}
        className="cust-container flex justify-center pt-32 pb-10"
      >
        <div className="relative w-full sm:w-10/12 md:w-9/12 flex flex-col gap-7 justify-center items-center">
          <h1 className="text-2xl z-10 md:text-4xl lg:text-5xl text-center leading-snug font-bold">
            {item.title}
          </h1>
          <p className="text-justify z-10 md:text-center text-base md:text-xl text-cust-gray-500">
            {item.desc}
          </p>
          <div className="absolute bottom-32 right-1/4 w-20 h-20">
            <img src={ballPattern} className="w-full" alt="MissingIMG" />
          </div>
        </div>
      </div>
    ) : (
      <div
        key={index}
        className="cust-container h-screen flex justify-center pt-32 pb-10"
      >
        <div className="relative w-full sm:w-10/12 md:w-9/12 flex flex-col gap-7 justify-center items-center">
          <h1 className="text-2xl z-10 md:text-4xl lg:text-5xl text-center leading-snug font-bold">
            WISATA NOT FOUND
          </h1>
          <div className="absolute bottom-0 right-1/4 w-20 h-20">
            <img src={ballPattern} className="w-full" alt="MissingIMG" />
          </div>
        </div>
      </div>
    );
  });
};

export default HandleHeaderVT;
