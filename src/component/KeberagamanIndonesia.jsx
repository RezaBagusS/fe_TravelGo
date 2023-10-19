import TagHome from "./TagHome";

const KeberagamanIndonesia = () => {
  return (
    <div className="cust-container py-14">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4 items-start justify-center text-cust-teal-500">
          <TagHome text="KEBERAGAMAN INDONESIA" />
          <h2 className="text-cust-gray-700 text-4xl font-bold">
            Keberagaman budaya yang bisa anda nikmati hanya di Indonesia!
          </h2>
          <p className="font-semibold text-base text-start w-11/12">
            Beragam budaya bisa kalian temukan di Indonesia. Mulai dari Bahasa
            Daerah, Tari Tradisional, Senjata Traditional, Baju Daerah dan Lagu
            Daerah yang bisa kalian nikmati di Indonesia yang kaya akan budaya
            dan keberagamanya..
          </p>
          <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-6 py-3 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150">
            Selengkapnya
          </button>
        </div>
        <div className="flex justify-end">
          <img
          className="h-96 w-[500px] object-cover rounded-3xl drop-shadow-[0px_3px_8px_rgba(0,0,0,0.2)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697738117/unsplash_QUwLZNchflk_snx0op.png"
            alt="MissingIMG"
          />
        </div>
      </div>
    </div>
  );
};

export default KeberagamanIndonesia;
