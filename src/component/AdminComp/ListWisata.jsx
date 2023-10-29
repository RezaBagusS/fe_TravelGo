import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slices/reduxLoadingSlice";
import { getAllDataWisata } from "../../Helpers/dataWisata";
import { setMessage } from "../../redux/slices/reduxMessageSlice";
import { Link } from "react-router-dom";

const CardList = ({ data }) => {
  const { gambar, deskripsi, nama } = data;

  return (
    <div className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="h-32 w-32 rounded-xl overflow-hidden">
            <img src={gambar} className="w-full h-full object-cover" alt="MissingImg" />
          </div>
        </div>
        <div className="col-span-9">
          <div className="flex flex-col gap-3 items-start">
            <h3 className="font-bold text-2xl text-cust-gray-700">{nama}</h3>
            <p className="font-normal text-sm text-cust-teal-500">
              {deskripsi.length > 70
                ? deskripsi.substring(0, 70) + "..."
                : deskripsi}
            </p>
            <div className="flex justify-start gap-2">
              <Link
                to={"/admin/update-wisata"}
                className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-2.5 lg:px-6 py-1 lg:py-2 rounded-lg transition-all duration-150"
              >
                Update
              </Link>
              <button className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-2.5 lg:px-6 py-1 lg:py-2 rounded-lg transition-all duration-150">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListWisata = () => {
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const fetchingData = async () => {
    dispatch(setLoading(true));
    const res = await getAllDataWisata();
    console.log("Response Data Wisata : ", res);
    const defaultMessage = {
      status: res.status,
      content: res.message,
    };
    setData(res.data);
    dispatch(setMessage(defaultMessage));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  };

  useEffect(() => {
    dispatch(setLoading(false));

    fetchingData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-5 pb-10">
      {data.length > 0 ? (
        data.map((item, index) => {
          return <CardList data={item} key={index} />;
        })
      ) : (
        <h1 className="text-center">Data Kosong</h1>
      )}
    </div>
  );
};

export default ListWisata;
