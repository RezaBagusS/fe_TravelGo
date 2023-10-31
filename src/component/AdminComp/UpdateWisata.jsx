import { useRef } from "react";
import { updateWisataApi } from "../../Helpers/handleWisata";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateWisata = () => {
  const form = useRef();
  const { wisataTitle } = useParams();
  const dataWisata = useSelector((state) => state.dataWisata.dataWisata);

  const getDataWisata = () => {
    let filteredData = dataWisata.filter(
      (item) => item.nama == wisataTitle.split("-").join(" ")
    );
    return filteredData[0];
  };

  console.log("DATA WISATA : ", getDataWisata());

  const InputComp = ({
    label,
    type,
    name,
    placeholder,
    note = "",
    defaultValue,
  }) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
          {label}
        </label>
        {name == "deskripsi" ? (
          <textarea
            className="text-cust-teal-500 text-base font-medium rounded-lg resize-y"
            placeholder={placeholder}
            name={name}
            defaultValue={defaultValue}
            cols="30"
            rows="5"
            autoComplete="off"
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            required
            autoComplete="off"
            defaultValue={defaultValue}
            className="text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
            placeholder={placeholder}
          />
        )}
        {note && <p className="text-xs text-cust-teal-500">*{note}</p>}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    let data = {
      name: form.current[0].value,
      deskripsi: form.current[1].value,
      lokasi: form.current[2].value,
      gambar: form.current[3].value,
      virtualTour: form.current[4].value,
    };
    console.log("SEND DATA WISATA: ", data);
    let res = await updateWisataApi(data);

    console.log("Response DATA : ", res);
    dispatch(setLoading(false));
    e.target.reset();
    let dataMessage = {
      status: res.status,
      content: res.message,
    };
    dispatch(setMessage(dataMessage));
  };

  return (
    <div className="cust-container bg-cust-teal-50 rounded-2xl p-5">
      <h1 className="py-5 font-bold text-2xl text-cust-gray-700 text-center">
        Update Wisata {wisataTitle.split("-").join(" ")}
      </h1>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 px-10"
      >
        <InputComp
          label="Nama Tempat Wisata"
          type="text"
          name="nama"
          placeholder="Isi Nama Wisata"
          defaultValue={getDataWisata().nama}
        />
        <InputComp
          label="Alamat Tempat Wisata"
          type="text"
          name="alamat"
          placeholder="Isi Alamat Wisata"
          note="Format : nama_kota/kabupaten,nama_provinsi"
          defaultValue={getDataWisata().lokasi}
        />
        <InputComp
          label="Deskripsi Tempat Wisata"
          type="text"
          name="deskripsi"
          placeholder="Isi Deskripsi Wisata"
          defaultValue={getDataWisata().deskripsi}
        />
        <InputComp
          label="Link Cloudinary Gambar"
          type="text"
          name="gambar"
          placeholder="Isi link gambar dari cloudinary"
          note="Link di dapatkan setelah upload gambar di cloudinary"
          defaultValue={getDataWisata().gambar}
        />
        <InputComp
          label="Link Embed Virtual Tour"
          type="text"
          name="map"
          placeholder="Isi Link Embed Src dari Gmaaps"
          note="Link Embed dari gmaaps, usahakan yang bisa jalan"
          defaultValue={getDataWisata().virtualTour}
        />
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-2.5 lg:px-6 py-1 lg:py-2 rounded-lg transition-all duration-150"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateWisata;
