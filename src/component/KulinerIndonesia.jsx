import TagHome from "./TagHome";

const KulinerIndonesia = () => {
  return (
    <div className="cust-container py-14">
      <div className="grid grid-cols-2">
        <div className="flex justify-start">
          <img
            className="h-96 w-[500px] object-cover rounded-3xl drop-shadow-[0px_3px_8px_rgba(0,0,0,0.2)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697738525/Group_6_dhp478.png"
            alt="MissingIMG"
          />
        </div>
        <div className="flex justify-end text-cust-teal-500">
          <div className="flex flex-col gap-4 items-start justify-center">
            <TagHome text="KULINER INDONESIA" />
            <h2 className="text-cust-gray-700 text-4xl font-bold">
              Kelezatan kuliner Indonesia yang memanjakan lidah-mu dan lezat!
            </h2>
            <p className="font-semibold text-base text-start w-11/12">
              Indonesia memiliki banyak ragam kuliner yang bisa kalian coba
              mulai dari minuman, makanan ataupun makanan khas tiap daerah yang
              siap mewarnai liburan mu di Indonesia dengan kelezatan yang nikmat
              hanya di Indonesia.
            </p>
            <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-6 py-3 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KulinerIndonesia;
