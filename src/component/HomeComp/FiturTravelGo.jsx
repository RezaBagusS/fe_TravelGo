import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TagHome from "../TagHome";

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
    <div className="cust-container py-5">
      <div className="w-fit mx-auto text-cust-teal-500">
        <TagHome text="FITUR FITUR VIRTUAL TOUR" />
      </div>
      <h2 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        Apa aja sih yang bisa kalian lakuin di Virtual Tour?
      </h2>
      <p className="font-medium text-cust-teal-500 text-base text-center mx-auto w-full sm:w-8/12">
        Virtual Tour membantu kamu agar mendapat pengalaman liburan di Indonesia
        dengan pengalaman menyenangkan dengan berbagai fitur yang kami tawarkan.
        Apa aja sih?
      </p>
      <div className="w-full py-5 sm:py-0 overflow-hidden">
        <Splide>
          {dataFitur.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="w-fit h-fit grid grid-cols-1 sm:grid-cols-2 justify-center py-10">
                  <div className="flex flex-col gap-4 items-center sm:items-end justify-center">
                    <div className="flex flex-col w-9/12 gap-5 items-start">
                      <h2 className="w-full text-2xl md:text-3xl lg:text-5xl text-center sm:text-start font-bold text-cust-teal-500">
                        {item.title}
                      </h2>
                      <p className="text-sm md:text-lg text-center sm:text-start text-cust-teal-500 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex justify-center items-center">
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
    </div>
  );
};

export default FiturTravelGo;
