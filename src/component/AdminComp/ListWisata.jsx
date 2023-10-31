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

  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-5 pb-10">
      {loading ? (
        <div className="col-span-2 w-full h-fit animate-pulse flex gap-2 justify-center items-center">
          <svg
            aria-hidden="true"
            className="inline w-32 h-32 py-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <h3 className="text-lg text-cust-gray-700">Pengambilan Data Wisata . . .</h3>
        </div>
      ) : data.length > 0 ? (
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