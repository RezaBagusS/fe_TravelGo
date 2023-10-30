import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarLeft from "../component/AdminComp/Sidebarleft";
import ListWisata from "../component/AdminComp/ListWisata";
import AddWisata from "../component/AdminComp/AddWisata";
import UpdateWisata from "../component/AdminComp/UpdateWisata";
import HeaderAdmin from "../component/AdminComp/HeaderAdmin";
import AdminProfile from "../component/AdminComp/AdminProfile";

const AdminPanel = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const HandlePath = () => {
    switch (location.pathname) {
      case "/admin/kelola-wisata":
        return <ListWisata />;
      case "/admin/add-wisata":
        return <AddWisata />;
      case "/admin/update-wisata":
        return <UpdateWisata />;
      case "/admin/profile":
        return <AdminProfile />;
      default:
        return <h1>404 Not Found</h1>;
    }
  };

  return (
    <div className="cust-outer-container overflow-hidden bg-white font-poppins">
      <div className="grid grid-cols-12">
        <div className="col-span-1 px-5 fixed">
          <SidebarLeft />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-11 px-5">
          <HeaderAdmin />
          <div className="w-full px-5 pb-10">{<HandlePath />}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
