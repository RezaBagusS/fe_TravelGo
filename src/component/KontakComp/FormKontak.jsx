import { useRef } from "react";
import ballPattern from "../../assets/ball-pattern.svg";
import propType from "prop-types";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { setPopup } from "../../redux/slices/reduxPopupSlice";

const InputField = ({ placeHolder, name, id, type, labelName }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-cust-gray-500 text-lg font-semibold">
        {labelName}
      </label>
      {id == "pesan" ? (
        <textarea
          className="text-cust-teal-500 text-base font-medium rounded-lg resize-y"
          id={id}
          placeholder={placeHolder}
          name={name}
          cols="30"
          rows="3"
          autoComplete="off"
        ></textarea>
      ) : (
        <input
          className="text-cust-teal-500 text-sm sm:text-base font-medium rounded-lg"
          placeholder={placeHolder}
          name={name}
          type={type}
          autoComplete="off"
          id={id}
        />
      )}
    </div>
  );
};

const FormKontak = () => {
  const dispatch = useDispatch();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    dispatch(
      setPopup({
        show: true,
        type: "loading",
        title: "LOADING",
        message: "Sedang mengirim pesan ...",
      })
    );

    emailjs
      .sendForm(
        "service_hziqrzf",
        "template_2z5s64e",
        form.current,
        "C6ahhuh0WSjR1G4KU"
      )
      .then(
        (result) => {
          dispatch(
            setPopup({
              show: true,
              type: "success",
              title: "SUCCESS",
              message: "Pesan berhasil dikirim!",
              onConfirm: () => {
                dispatch(
                  setPopup({
                    show: false,
                  })
                );
              },
            })
          );
        },
        (error) => {
          dispatch(
            setPopup({
              show: true,
              type: "warning",
              title: "WARNING",
              message:
                "Terjadi kesalahan saat mengirim pesan. Silahkan coba lagi.",
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
      );
    e.target.reset();
  };

  return (
    <div className="relative cust-container flex justify-center py-5">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-10/12 md:w-8/12 flex flex-col gap-5"
      >
        <InputField
          placeHolder={"Isi nama lengkap kamu."}
          name="user_name"
          id="nama"
          type="text"
          labelName={"Nama Lengkap"}
        />
        <InputField
          placeHolder={"Isi email kamu."}
          name="user_email"
          id="email"
          type="email"
          labelName={"Alamat Email"}
        />
        <InputField
          placeHolder={"Isi pesan yang mau kamu sampaikan."}
          name="message"
          id="pesan"
          type="text"
          labelName={"Apa Pesanmu?"}
        />
        <button
          type="submit"
          className="w-fit cursor-pointer ms-auto bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-lg drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] transition-all duration-150"
        >
          Kirim Pesan
        </button>
      </form>
      <div className="hidden md:absolute bottom-36 left-8 w-24 h-24">
        <img src={ballPattern} className="w-full" alt="MissingIMG" />
      </div>
    </div>
  );
};

export default FormKontak;

InputField.propTypes = {
  placeHolder: propType.string.isRequired,
  id: propType.string.isRequired,
  name: propType.string.isRequired,
  type: propType.string.isRequired,
  labelName: propType.string.isRequired,
};
