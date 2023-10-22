import HeaderTittle from "../component/VirtualTourComp/HeaderTittle";
import { useEffect } from "react";
import TableWisata from "../component/VirtualTourComp/TableWisata";

const VirtualTour = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="cust-outer-container text-black">
            <HeaderTittle />
            <TableWisata />
        </div>
    );
}

export default VirtualTour;