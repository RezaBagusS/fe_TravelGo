import { useEffect } from "react";
import HeaderKontak from "../component/KontakComp/HeaderKontak";
import FormKontak from "../component/KontakComp/FormKontak";
import FindMe from "../component/KontakComp/FindMe";

const Kontak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cust-outer-container text-black">
      <HeaderKontak />
      <FormKontak />
      <FindMe />
    </div>
  );
};

export default Kontak;
