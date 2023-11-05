import { setPopupUpload } from "../../redux/slices/reduxPopupUploadSlice";
import search from "../../assets/search.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchBar = ({ defaultData, setLoading, setFilteredData }) => {
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e) => {
    const inputKeyword = e.target.value;
    setLoading(true);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    let newTimeout = setTimeout(() => {
      setKeyword(inputKeyword);
      setLoading(false);
    }, 1000);

    setTypingTimeout(newTimeout);
  };

  useEffect(() => {
    if (keyword == "") {
      setFilteredData(defaultData);
    } else {
      const filtered = defaultData.filter((data) => {
        return data.namaWisata.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredData(filtered);
    }
  }, [keyword]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full relative rounded-md overflow-hidden">
        <input
          type="search"
          onChange={(e) => handleInputChange(e)}
          className="focus:border-cust-teal-500 w-full text-base text-black border rounded-md border-cust-gray-500"
          placeholder="Eksplore Wisata . . ."
        />
        <div className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-5 h-5">
          <img src={search} className="w-full" alt="Missingicon" />
        </div>
      </div>
    </div>
  );
};

const HeaderMenu = (props) => {

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-12 gap-3">
      <Link to={"/virtual-tour"} className="col-span-6 md:col-span-2 border-2 border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm text-center font-semibold px-4 py-2 rounded-full transition-all duration-150">
        Virtual Tour
      </Link>
      <button
        onClick={() => dispatch(setPopupUpload(true))}
        className="col-span-6 md:col-span-2 border-2 whitespace-nowrap border-cust-teal-500 hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 hover:text-white text-sm font-semibold px-3 py-2 rounded-full transition-all duration-150"
      >
        Upload Foto
      </button>
      <div className="col-span-12 md:col-span-8">
        <SearchBar defaultData={props.defaultData} setLoading={props.setLoading} setFilteredData={props.setFilteredData} />
      </div>
    </div>
  );
};

export default HeaderMenu;
