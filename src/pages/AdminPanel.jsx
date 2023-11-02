import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarLeft from "../component/AdminComp/Sidebarleft";
import ListWisata from "../component/AdminComp/ListWisata";
import AddWisata from "../component/AdminComp/AddWisata";
import UpdateWisata from "../component/AdminComp/UpdateWisata";
import HeaderAdmin from "../component/AdminComp/HeaderAdmin";
import { getActiveUser } from "../Helpers/SessionHelper";
import { setPopup } from "../redux/slices/reduxPopupSlice";
import { useDispatch } from "react-redux";

const AdminPanel = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (getActiveUser()) {
      if (getActiveUser().isAdmin != "TRUE") {
        dispatch(
          setPopup({
            show: true,
            type: "warning",
            title: "WARNING",
            message: "Anda tidak memiliki akses ke halaman ini!!",
            onConfirm: () => {
              dispatch(setPopup({ show: false }));
              window.location.replace("/");
            },
          })
        );
      } 
    } else {
      dispatch(
        setPopup({
          show: true,
          type: "warning",
          title: "WARNING",
          message: "Login terlebih dahulu untuk mengakses halaman ini...",
          onConfirm: () => {
            dispatch(setPopup({ show: false }));
            window.location.replace("/auth/login");
          },
        })
      );
    }
      
  }, []);

  const HandlePath = () => {
    if (location.pathname.includes("update-wisata")) {
      return <UpdateWisata />;
    }

    switch (location.pathname) {
      case "/admin/kelola-wisata":
        return <ListWisata />;
      case "/admin/add-wisata":
        return <AddWisata />;
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
