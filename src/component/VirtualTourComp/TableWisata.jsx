import search from "../../assets/search.svg";
import TagHome from "../TagHome";
import CardWisata from "./CardWisata";
import { useEffect, useState } from "react";
import propType from "prop-types";
import { getAllDataWisata } from "../../Helpers/getAllDataWisata";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/slices/reduxMessageSlice";
import { setDataWisata } from "../../redux/slices/reduxDataWisataSlice";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 md:w-1/3 relative rounded-md overflow-hidden">
        <input
          type="search"
          onChange={(e) => handleSearch(e)}
          className="focus:border-cust-teal-500 w-full text-base text-cust-teal-500 border rounded-md border-cust-gray-500"
          placeholder="Cari Wisata ..."
        />
        <div className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-5 h-5">
          <img src={search} className="w-full" alt="Missingicon" />
        </div>
      </div>
    </div>
  );
};

const CardSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-3 animate-pulse gap-5">
      <div className="col-span-1 rounded-xl bg-slate-400 overflow-hidden"></div>
      <div className="col-span-2 flex flex-col gap-3 justify-center items-start">
        <span className="w-5/12 rounded-full p-4 bg-slate-400"></span>
        <span className="w-full rounded-full p-2 bg-slate-400"></span>
        <span className="w-11/12 rounded-full p-2 bg-slate-400"></span>
        <span className="w-24 p-4 bg-slate-400 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)]"></span>
      </div>
    </div>
  );
};

const TableWisata = () => {
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const dataWisata = useSelector((state) => state.dataWisata.data);

  const handleSearch = (e) => {
    const inputKeyword = e.target.value;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      setKeyword(inputKeyword);
    }, 1000);

    setTypingTimeout(newTimeout);
  };

  const fetchingData = async () => {
    setLoading(true);
    const res = await getAllDataWisata();

    console.log("Response Data Wisata : ", res);

    if (res.status == "success") {
      dispatch(setDataWisata(res.data));
      setFilteredData(res.data);
    }

    const defaultMessage = {
      status: res.status,
      content: res.message,
    };

    dispatch(setMessage(defaultMessage));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loading && fetchingData();
  }, [loading]);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (keyword == "") {
      console.log("Keyword Kosong");
      setFilteredData(dataWisata);
    } else {
      console.log("Keyword TERISI");
      const filter = dataWisata.filter((data) => {
        return data.nama.toLowerCase().includes(keyword.toLowerCase());
      })
      setFilteredData(filter);
    }
  }, [keyword]);

  const repeatCard = [0, 1, 2, 3];

  return (
    <div className="cust-container pt-5 pb-10">
      <SearchBar handleSearch={handleSearch} />
      <div className="w-full flex justify-start pt-10 sm:pt-5 pb-3 border-b-2">
        <h2 className="text-cust-gray-500 text-xl">Data Wisata :</h2>
      </div>
      <div className="w-full mt-5">
        <TagHome
          text={
            keyword === "" ? "WISATA INDONESIA" : `HASIL PENCARIAN : ${keyword}`
          }
        />
      </div>
      <div className="py-3 grid grid-cols-1 md:grid-cols-2 gap-5">
        {loading
          ? repeatCard.map((item) => {
              return <CardSkeleton key={item} />;
            })
          : filteredData.map((data) => {
              return <CardWisata data={data} key={data.id} />;
            })}
      </div>
    </div>
  );
};

export default TableWisata;

SearchBar.propTypes = {
  handleSearch: propType.func.isRequired,
};
