import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const dataFitur = [
  {
    id: 1,
    title: "Virtual Tour",
    desc: "Virtual Tour membantu anda mengenal dan melihat tempat secara bebas. Berbeda dengan photo biasa, dengan Virtual Tour anda bisa bebas mengelilingi dan menjelajahi tempat yang ingin kalian lihat.",
    img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698236574/MacBook_Air_2022_uxnrbn.png",
  },
  {
    id: 2,
    title: "Peta Wisata",
    desc: "Peta Wisata membantu anda untuk menemukan berbagai macam tempat pariwisata di Indonesia dengan cepat dan akurat sekaligus membantu anda menemukan tempat yang cocok.",
    img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698236575/PetaWisata_szuokm.png",
  },
  {
    id: 3,
    title: "Eksplorasi",
    desc: "Bingung mau kemana? dan pusing memilih pilihan? Tenang, Parawisely menyediakan fitur ekplorasi untuk kamu agar dapat menemukan tempat pariwisata yang cocok denganmu.",
    img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1698236575/MacBook_Air_2022_1_jhwt4i.png",
  },
];

const FiturTravelGo = () => {
  return (
    <div className="cust-container">
      <Splide >
        {dataFitur.map((item, index) => {
          return (
            <SplideSlide>
              <div className="w-fit h-[550px] grid grid-cols-2 justify-center py-5">
                <div className="flex flex-col gap-4 items-end justify-center">
                  <div className="flex flex-col w-9/12 gap-5 items-start">
                    <h2 className="text-5xl font-bold text-cust-teal-500">
                      {item.title}
                    </h2>
                    <p className="text-lg text-cust-teal-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={item.img}
                    className="w-9/12 h-fit"
                    alt="MissingIMG"
                  />
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default FiturTravelGo;
