import { useState } from "react";

const TableIMG = ({ loading, filteredData }) => {
  const [isHover, setIsHover] = useState(false);
  const [idHover, setIdHover] = useState(null);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };

  const handleMouseEnter = (id) => {
    setIdHover(id);
  };

  const handleMouseLeave = () => {
    setIdHover(null);
  };

  return (
    <div className="w-full">
      {loading ? (
        <div className="columns-4 mt-10">
          <div className="bg-slate-400 animate-pulse rounded-3xl w-full h-[40vh]"></div>
          <div className="bg-slate-400 animate-pulse rounded-3xl w-full h-[40vh]"></div>
          <div className="bg-slate-400 animate-pulse rounded-3xl w-full h-[40vh]"></div>
          <div className="bg-slate-400 animate-pulse rounded-3xl w-full h-[40vh]"></div>
        </div>
      ) : filteredData.length == 0 ? (
        <div className="w-full py-10">
          <p className="text-center text-cust-gray-700 text-lg font-bold">Hasil Pencarian Tidak Ditemukan ...</p>
        </div>
      ) : (
        <div className="columns-4 mt-10">
          {filteredData.map((data) => {
            return (
              <div
                key={data.id}
                onMouseEnter={() => {
                  handleHover();
                  handleMouseEnter(data.id);
                }}
                onMouseLeave={() => {
                  handleHover();
                  handleMouseLeave();
                }}
                className="py-2"
              >
                <div className="relative w-full cursor-pointer h-fit rounded-3xl overflow-hidden shadow-[0px_0px_2px_rgba(0,0,0,0.3)]">
                  <div
                    className={`w-full h-full pointer-events-none absolute bg-black flex justify-center items-center p-2
                              ${
                                isHover && idHover == data.id
                                  ? "bg-opacity-40 text-white"
                                  : "hidden"
                              }
                                  `}
                  >
                    <div className="flex justify-center flex-col">
                      <p className="text-lg font-bold text-center">
                        {data.namaWisata}
                      </p>
                    </div>
                  </div>
                  <img
                    src={data.filePath}
                    className="w-full h-full object-cover object-center"
                    alt="MissingIMG"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TableIMG;
