import { useRef } from "react";
import { addWisataApi } from "../../Helpers/handleWisata";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPopup } from "../../redux/slices/reduxPopupSlice";

const AddWisata = () => {
  const form = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const InputComp = ({ label, type, name, placeholder, note = "" }) => {
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
            className="text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
            placeholder={placeholder}
          />
        )}
        {note && <p className="text-xs text-cust-teal-500">*{note}</p>}
      </div>
    );
  };

  const handleClosePopup = () => {
    dispatch(setPopup({ show: false }));
    return navigate("/admin/kelola-wisata");
  };

  const handleSubmit = async (e) => {
    dispatch(
      setPopup({
        show: true,
        type: "loading",
        title: "LOADING",
        message: "Tunggu sebentar ya . . .",
      })
    );
    e.preventDefault();

    let data = {
      nama: form.current[0].value,
      deskripsi: form.current[1].value,
      lokasi: form.current[2].value,
      gambar: form.current[3].value,
      virtualTour: form.current[4].value,
    };

    console.log("SEND DATA WISATA: ", data);
    let res = await addWisataApi(data);

    console.log("Response DATA : ", res);
    if (res.status == "success") {
      e.target.reset();
      dispatch(
        setPopup({
          show: true,
          type: "success",
          title: "SUCCESS",
          message: "Data Wisata Berhasil Ditambahkan",
          onConfirm: () => handleClosePopup(),
        })
      );
    } else {
      dispatch(
        setPopup({
          show: true,
          type: "warning",
          title: "WARNING",
          message: "Data Wisata Gagal Ditambahkan",
          onConfirm: () => {
            dispatch(setPopup({ show: false }));
          },
        })
      );
    }

  };

  return (
    <div className="cust-container bg-cust-teal-50 rounded-2xl p-5">
      <h1 className="py-5 font-bold text-2xl text-cust-gray-700 text-center">
        Tambahkan Data Wisata
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
        />
        <InputComp
          label="Deskripsi Tempat Wisata"
          type="text"
          name="deskripsi"
          placeholder="Isi Deskripsi Wisata"
        />
        <InputComp
          label="Alamat Tempat Wisata"
          type="text"
          name="alamat"
          placeholder="Isi Alamat Wisata"
          note="Format : nama_kota/kabupaten,nama_provinsi"
        />
        <InputComp
          label="Link Cloudinary Gambar"
          type="text"
          name="gambar"
          placeholder="Isi link gambar dari cloudinary"
          note="Link di dapatkan setelah upload gambar di cloudinary"
        />
        <InputComp
          label="Link Embed Virtual Tour"
          type="text"
          name="map"
          placeholder="Isi Link Embed Src dari Gmaaps"
          note="Link Embed dari gmaaps, usahakan yang bisa jalan"
        />
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-2.5 lg:px-6 py-1 lg:py-2 rounded-lg transition-all duration-150"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWisata;
