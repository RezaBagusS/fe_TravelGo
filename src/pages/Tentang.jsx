import { useEffect } from "react";
import HeaderTentang from "../component/TentangComp/HeaderTentang";
import BodyTentang from "../component/TentangComp/BodyTentang";

const Tentang = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="cust-outer-container text-black">
            <HeaderTentang />
            <BodyTentang />
        </div>
    )
}

export default Tentang