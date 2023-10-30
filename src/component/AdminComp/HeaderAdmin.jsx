import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const HeaderAdmin = () => {
  const { img, name, email } = useSelector((state) => state.dataLogin.data);

    const location = useLocation();

    const HandleTitle = () => {
        switch (location.pathname) {
            case "/admin/kelola-wisata":
                return "List Wisata";
            case "/admin/add-wisata":
                return "Tambah Wisata";
            case "/admin/update-wisata":
                return "Update Wisata";
            case "/admin/profile":
                return "Profile";
            default:
                return "404 Not Found";
        }
    }
  return (
    <div className="grid grid-cols-12 py-10">
      <div className="col-span-10 flex flex-col gap-2 px-5">
        <h1 className="font-bold text-cust-gray-700 text-5xl">{<HandleTitle />}</h1>
        <h2 className="text-[#14B8A6] cursor-pointer text-base font-semibold font-poppins transition-all duration-150">
          Travel Go
        </h2>
      </div>
      <div className="col-span-2 flex justify-center items-center gap-3">
        <h2 className="text-base text-cust-gray-700 font-semibold text-end">{name}</h2>
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-cust-gray-500">
          <img src={img} alt="MissingIMG" />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
