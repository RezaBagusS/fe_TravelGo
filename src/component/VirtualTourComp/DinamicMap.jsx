import { useEffect, useState } from "react";
import Iframe from 'react-iframe';

const DinamicMap = () => {
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
        url="https://www.google.com/maps/embed?pb=!4v1603400621778!6m8!1m7!1sFt07gbSIu5dZA4gjFARsEg!2m2!1d-7.607820355708422!2d110.203532039692!3f353.191836342853!4f-8.619499452878344!5f0.7820865974627469"
        width={widthMap}
        height={widthMap / 1.8}
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen="true"
        aria-hidden="false"
        tabindex="0"
        id="myId"
        className="myClassname"
      />
    </div>
  );
};

export default DinamicMap;
