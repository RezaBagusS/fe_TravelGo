const BodyTentang = () => {
  const dataTentang = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698137811/Frame_52_ln0rlh.png",
      title: "Visi",
      desc: "Menjadi sumber terpercaya dan terdepan untuk menggali keindahan dan kekayaan budaya Indonesia melalui pengalaman virtual yang mendalam, mempromosikan pariwisata lokal, dan menginspirasi orang untuk menjelajahi keajaiban alam dan warisan budaya Indonesia.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698137803/Frame_54_iuwuee.png",
      title: "Misi",
      desc: "Menyajikan beragam pengalaman virtual yang memungkinkan pengguna untuk menjelajahi situs-situs bersejarah, museum, seni, dan budaya Indonesia yang kaya. dan Mendukung industri pariwisata Indonesia dengan menyediakan wawasan mendalam tentang destinasi wisata, akomodasi, dan kegiatan lokal yang menarik.",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698137806/Frame_53_hox8fu.png",
      title: "Keunggulan",
      desc: "Dengan teknologi yang canggih, virtual tour dapat memberikan pengalaman mendalam kepada pengguna. Mereka dapat menjelajahi lokasi dengan tur 360 derajat, memungkinkan mereka untuk melihat segala sudut dan detailnya.",
    },
  ];

  return (
    <div className="pt-5 pb-10">
      <div className="cust-container">
        {dataTentang.map((item) => {
          return (
            <div className="grid grid-cols-12">
              <div className="col-span-5 w-full flex justify-center items-center">
                <img
                  src={item.img}
                  className="w-8/12 object-center object-cover"
                  alt="MissingIMG"
                />
              </div>
              <div className={`col-span-2 mx-auto w-3 bg-[#14B8A6] flex justify-center items-start
                ${item.id == 3 && 'rounded-b-full'}
              `}>
                <span className="py-2 px-3 rounded-full bg-white ring-8 text-cust-gray-500 font-bold text-lg ring-[#14B8A6]">
                  0{item.id}
                </span>
              </div>
              <div className="col-span-5 flex flex-col justify-center items-start gap-3">
                <h2 className="text-6xl font-bold text-cust-gray-500">{item.title}</h2>
                <p className="text-base text-justify font-semibold text-cust-teal-500">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyTentang;
