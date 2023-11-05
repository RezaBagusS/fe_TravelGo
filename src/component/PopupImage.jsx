import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import close from "../assets/close.svg";
import { setPopupUpload } from "../redux/slices/reduxPopupUploadSlice";
import { uploadImage } from "../Helpers/handleEksplorasi";
import { setPopup } from "../redux/slices/reduxPopupSlice";

const PopupImage = () => {
  const showPopup = useSelector((state) => state.popupUpload.show);
  const [uploadedFile, setUploadedFile] = useState(null);
  const dispatch = useDispatch();
  const form = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (
        !file.type.startsWith("image/png") &&
        !file.type.startsWith("image/jpeg")
      ) {
        alert("Hanya file PNG, JPG atau JPEG yang diizinkan.");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert("Ukuran berkas terlalu besar. Maksimum 10MB diizinkan.");
        return;
      }

      setUploadedFile(file);
    }
  };

  const successUpload = () => {
    dispatch(
      setPopup({
        show: false,
      })
    );
    dispatch(setPopupUpload(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (uploadedFile) {
      dispatch(
        setPopup({
          show: true,
          type: "loading",
          title: "LOADING",
          message:
            "Sedang mengupload gambar. Silahkan tunggu sebentar ya . . .",
        })
      );

      const namaWisata = form.current[0].value;

      const dataUpload = {
        namaWisata: namaWisata,
        file: uploadedFile,
      };

      const res = await uploadImage(dataUpload);

      if (res.status == "error") {
        dispatch(
          setPopup({
            show: true,
            type: "warning",
            title: "WARNING",
            message:
              "Terjadi kesalahan saat mengupload gambar. Silahkan coba lagi.",
            onConfirm: () => {
              dispatch(
                setPopup({
                  show: false,
                })
              );
            },
          })
        );
      }

      dispatch(
        setPopup({
          show: true,
          type: "success",
          title: "SUCCESS",
          message: "Berhasil mengupload gambar!!",
          onConfirm: () => successUpload(),
        })
      );
    } else {
      dispatch(
        setPopup({
          show: true,
          type: "warning",
          title: "WARNING",
          message: "Masukkan gambar terlebih dahulu sebelum mengupload gambar.",
          onConfirm: () => {
            dispatch(
              setPopup({
                show: false,
              })
            );
          },
        })
      );
    }

    setUploadedFile(null);
    e.target.reset();
  };

  return (
    <div
      className={`
        ${showPopup ? "fixed" : "hidden"}
        flex items-center justify-center z-40 w-screen h-screen bg-gray-900 bg-opacity-50`}
    >
      <motion.form
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        ref={form}
        onSubmit={handleSubmit}
        className="w-10/12 md:w-8/12 relative px-10 py-5 bg-white dark:bg-gray-800 rounded-lg flex flex-col gap-5 items-center justify-center"
      >
        <span
          onClick={() => dispatch(setPopupUpload(false))}
          className="absolute top-3 right-3 w-10 h-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 cursor-pointer"
        >
          <img src={close} className="w-full" alt="Icon" />
        </span>
        <h1 className="text-cust-gray-700 w-2/3 md:w-full text-center font-bold mb-5 text-lg sm:text-2xl">
          UPLOAD IMAGE EKSPLORASI
        </h1>
        <div className="w-full text-cust-gray-700 flex flex-col gap-2">
          <label className="text-cust-gray-500 font-semibold text-base sm:text-xl">
            Nama Tempat Wisata
          </label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            className="text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
            placeholder="Taman Bunga Matahari"
          />
        </div>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed overflow-hidden rounded-lg cursor-pointer bg-gray-50 dark:hover-bg-bray-800 dark-bg-gray-700 hover-bg-gray-100 dark-border-gray-600 dark:hover-border-gray-500 dark-hover-bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {uploadedFile ? (
              <div className="w-full flex flex-col justify-center items-center">
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  className="w-full h-fit aspect-video"
                  alt="MissingIMG"
                />
              </div>
            ) : (
              <div className="w-full flex flex-col justify-center items-center">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Only PNG, JPG or JPEG, max 10MB
                </p>
              </div>
            )}
          </div>
          {uploadedFile ? null : (
            <input
              id="dropzone-file"
              onChange={handleUpload}
              type="file"
              name="file"
              accept=".png, .jpg, .jpeg"
              className="hidden"
            />
          )}
        </label>
        <div className="w-full flex justify-center gap-5">
          <button
            onClick={() => {
              setUploadedFile(null);
              form.current[0].value = "";
              form.current[1].value = "";
            }}
            className="ring-2 ring-cust-teal-500/70 hover:bg-cust-teal-500 hover:text-white text-cust-gray-700 text-base font-semibold px-4 py-1 text-center rounded-lg transition-all duration-150"
          >
            Clear
          </button>
          <button
            type="submit"
            className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-base font-semibold px-4 py-2 text-center rounded-lg transition-all duration-150"
          >
            Upload
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default PopupImage;
