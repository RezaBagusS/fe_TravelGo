import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getActiveUser } from "../Helpers/SessionHelper";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../redux/slices/reduxPopupSlice";
import { getAllDataEksplorasi } from "../Helpers/handleEksplorasi";
import HeaderMenu from "../component/EksplorasiComp/HeaderMenu";
import TableIMG from "../component/EksplorasiComp/TableIMG";

const Eksplorasi = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const show = useSelector((state) => state.popupUpload.show);

  // const handleSearch = (e) => {
  //   const inputKeyword = e.target.value;

  //   if (typingTimeout) {
  //     clearTimeout(typingTimeout);
  //   }

  //   let newTimeout = setTimeout(() => {
  //     setKeyword(inputKeyword);
  //   }, 1000);

  //   setTypingTimeout(newTimeout);
  // };

  const handleDateUpload = (data) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.submited_at);
      const dateB = new Date(b.submited_at);
  
      return dateB - dateA;
    });
  };

  const fetchingDataEksplorasi = async () => {
    setLoading(true);
    const res = await getAllDataEksplorasi();
    // console.log("Response Data Eksplorasi : ", res);
    if (res.status == "success") {
      setDefaultData(handleDateUpload(res.data));
      setFilteredData(res.data);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!show) {
      fetchingDataEksplorasi();
    }
  }, [show]);

  const handleClosePopup = () => {
    dispatch(setPopup({ show: false }));
    navigate("/auth/login");
  };

  useEffect(() => {
    console.log("Filtered Data : ", filteredData);
  }, [filteredData]);

  return (
    <div className="cust-outer-container relative text-black">
      <div className="cust-container pt-20">
        {!getActiveUser() &&
          setTimeout(() => {
            dispatch(
              setPopup({
                show: true,
                type: "warning",
                title: "WARNING",
                message: "Login terlebih dahulu untuk mengakses halaman ini!!",
                onConfirm: () => handleClosePopup(),
              })
            );
          }, 1000)}
        <HeaderMenu
          defaultData={defaultData}
          setLoading={setLoading}
          setFilteredData={setFilteredData}
        />
        <TableIMG loading={loading} filteredData={filteredData} />
      </div>
    </div>
  );
};

export default Eksplorasi;
