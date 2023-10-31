import { useEffect, useState } from "react";
import Iframe from 'react-iframe';

const DinamicMap = ({ data }) => {
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
    <div className="cust-container flex justify-center py-5">
      <Iframe
        url={data[0].virtualTour}
        width={widthMap}
        height={widthMap / 1.8}
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen="true"
        aria-hidden="false"
        tabindex="0"
        id="myId"
        className="aspect-video"
      />
    </div>
  );
};

export default DinamicMap;
