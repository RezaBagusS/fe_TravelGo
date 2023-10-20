import TagHome from "./TagHome";
import { useEffect, useState } from "react";

const MapIndonesia = () => {

    const [widthMap, setWidthMap] = useState(950);

  useEffect(() => {
    const handleResize = () => {
      setWidthMap(window.innerWidth < 1000 ? window.innerWidth - 60 : 950);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="cust-container flex flex-col gap-2 items-center justify-center py-10">
      <div className="w-fit text-cust-teal-500">
        <TagHome text="PETA PARIWISATA INDONESIA" />
      </div>
      <h2 className="text-cust-gray-700 text-2xl sm:text-3xl font-bold">
        Peta Pariwisata Indonesia
      </h2>
      <p className="font-medium text-sm sm:text-base text-center w-full sm:w-8/12">
        Virtual Tour membantu kamu agar mendapat pengalaman liburan di Indonesia
        dengan pengalaman menyenangkan dengan berbagai fitur yang kami tawarkan.
        Apa aja sih?
      </p>
      <div className="mt-10">
        <iframe
          title="Google Map"
          width={widthMap}
          height={widthMap / 1.8}
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32654820.88251219!2d117.88879999999999!3d-2.4456499999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1697786212452!5m2!1sen!2sid"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MapIndonesia;
