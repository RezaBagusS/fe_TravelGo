import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slices/reduxLoadingSlice";
import { getAllDataWisata } from "../../Helpers/getAllDataWisata";
import { setMessage } from "../../redux/slices/reduxMessageSlice";
import { setDataWisata } from "../../redux/slices/reduxDataWisataSlice";
import { Link } from "react-router-dom";

const CardList = ({ data }) => {
  const { gambar, deskripsi, nama } = data;

  return (
    <div className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="h-32 w-32 rounded-xl overflow-hidden">
            <img
              src={gambar}
              className="w-full h-full object-cover"
              alt="MissingImg"
            />
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
                to={"/admin/update-wisata/" + nama.split(" ").join("-")}
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

const CardListSkeleton = () => {
  return (
    <div className="w-full rounded-lg animate-pulse">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="h-32 w-32 rounded-xl bg-slate-400 overflow-hidden"></div>
        </div>
        <div className="col-span-9">
          <div className="flex flex-col gap-3 items-start pe-4">
            <span className="w-5/12 rounded-full p-4 bg-slate-400"></span>
            <span className="w-full rounded-full p-2 bg-slate-400"></span>
            <span className="w-11/12 rounded-full p-2 bg-slate-400"></span>
            <div className="flex justify-start gap-2">
              <span className="w-24 p-4 rounded-md bg-slate-400"></span>
              <span className="w-24 p-4 rounded-md bg-slate-400"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListWisata = () => {
  const loading = useSelector((state) => state.loading.loading);
  const data = useSelector((state) => state.dataWisata.dataWisata);
  const dispatch = useDispatch();

  const fetchingData = async () => {
    dispatch(setLoading(true));
    const res = await getAllDataWisata();
    console.log("Response Data Wisata : ", res);
    const defaultMessage = {
      status: res.status,
      content: res.message,
    };
    if (res.status == "success") {
      dispatch(setDataWisata(res.data));
    }
    dispatch(setMessage(defaultMessage));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  };

  useEffect(() => {
    dispatch(setLoading(false));

    fetchingData();
  }, []);

  const repeatCard = [
    0,1,2,3,4,5
  ]

  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-5 pb-10">
      {loading ? (
        repeatCard.map((item) => {
          return <CardListSkeleton key={item} />;
        })
      ) : data.length > 0 ? (
        data.map((item, index) => {
          return <CardList data={item} key={index} />;
        })
      ) : (
        <div className="col-span-2 bg-red-700 py-5 text-white rounded-md">
          <h1 className="text-center text-2xl sm:text-3xl">
            Tidak ada data wisata
          </h1>
        </div>
      )}
    </div>
  );
};

export default ListWisata;
