import React, { useEffect, useState } from "react";

const FindMe = () => {

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
    <div className="py-5">
      <div className="cust-container relative flex flex-col gap-5 justify-center items-center py-16">
        <h1 className="text-2xl z-10 md:text-4xl lg:text-5xl text-center leading-snug font-bold md:font-extrabold">
          Temukan Kami di Google Maps
        </h1>
        <p className="text-justify md:text-center text-base md:text-xl text-cust-gray-500">
          Kalian dapat mengunjungi kami pada alamat berikut.
        </p>
        <div className="mt-5">
          <iframe
            title="Google Map"
            width={widthMap}
            height={widthMap / 1.8}
            style={{ border: 0 }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.41493192657!2d112.60935567319395!3d-7.956000685443552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882798fa4af0b%3A0x96b1403133d3c715!2sGedung%20F%20FILKOM%20UB!5e0!3m2!1sen!2sid!4v1698131572091!5m2!1sen!2sid"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FindMe;
