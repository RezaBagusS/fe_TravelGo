import TagHome from "./TagHome";

const FotoWisata = () => {
  return (
    <div className="cust-container py-10 flex flex-col gap-4">
      <div className="w-fit mx-auto">
        <TagHome text="FOTO FOTO WISATA INDONESIA" />
      </div>
      <h2 className="text-black text-center text-4xl font-bold">
        Jelajahi Indonesia Lewat Foto Foto berikut Ini
      </h2>
      <p className="font-medium text-base text-center mx-auto w-8/12">
        foto foto dibawah ini merupakan foto yang diabadikan oleh pengguna lain
        yang menampilkan keindahan alam dan keberagaman budaya yang dimiliki
        Indonesia!
      </p>
      <div className="grid grid-cols-3 gap-10">
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697739179/unsplash_b9qNHB8Wgx0_hudugv.png"
          className="rounded-3xl overflow-hidden object-cover"
          alt="MissingIMG"
        />
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697739185/Group_10_mmrbs5.png"
          className="rounded-3xl overflow-hidden object-cover"
          alt="MissingIMG"
        />
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1697739181/unsplash_u1nqFca6QgI_vdxysk.png"
          className="rounded-3xl overflow-hidden object-cover"
          alt="MissingIMG"
        />
      </div>
      <div className="w-full flex justify-center mt-2">
        <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-150">
          Jelajahi Wisata Lainnya
        </button>
      </div>
    </div>
  );
};

export default FotoWisata;
