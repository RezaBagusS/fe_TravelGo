import Lottie from "react-lottie";
import { motion } from "framer-motion";
import loadingAnimation from "../assets/popup/loadingAnimation.json";
import warningAnimation from "../assets/popup/warningAnimation.json";
import successAnimation from "../assets/popup/successAnimation.json";
import warning from "../assets/popup/warning.svg";
import success from "../assets/popup/success.svg";
import { useDispatch, useSelector } from "react-redux";
import { data } from "autoprefixer";

// Confirm(Message, Yes or No, func Yes & func No) - icon warning
// Loading(Message, waiting or oke, func oke) - icon loading
// Warning(Message, oke, func oke) - icon warning v
// Success(Message, oke, func oke) - icon check

const Popup = () => {
  const dispatch = useDispatch();
  const dataPopup = useSelector((state) => state.popup.data);

  const handleCancel = () => {
    if (dataPopup.onCancel) {
      dataPopup.onCancel();
    } else {
      console.log("No onCancel function");
    }
  };

  const handleConfirm = () => {
    if (dataPopup.onConfirm) {
      dataPopup.onConfirm();
    } else {
      console.log("No onConfirm function");
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const HandleImage = () => {
    switch (dataPopup.type) {
      case "loading":
        return <Lottie options={defaultOptions} />;
      case "warning":
        return (
          <div className="w-full flex justify-center items-center">
            <img src={warning} className="w-10/12" alt="MissingIMG" />
          </div>
        );
      case "success":
        return (
          <div className="w-full flex justify-center items-center">
            <img src={success} className="w-10/12" alt="MissingIMG" />
          </div>
        );
      default:
        return <Lottie options={defaultOptions} />;
    }
  };

  return (
    dataPopup.show && (
      <div className="w-screen h-screen fixed overflow-hidden flex justify-center items-center bg-black/70 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5/12 h-[40vh] relative rounded-3xl flex flex-col gap-5 items-center justify-center text-cust-gray-700 pt-20 pb-8 bg-cust-teal-50"
        >
          <div className="absolute -top-1/2 translate-y-1/2 flex justify-center items-center p-2 aspect-square w-32 border-8 border-cust-teal-50 rounded-full bg-white">
            <HandleImage />
          </div>
          <h2
            className={`font-bold text-3xl ${
              dataPopup.type == "loading" && "animate-pulse"
            }`}
          >
            {dataPopup.title}
          </h2>
          <p
            className={`font-medium text-lg w-7/12 text-center ${
              dataPopup.type == "loading" && "animate-pulse"
            }`}
          >
            {dataPopup.message}
          </p>

          {/* CONFIRM BUTTON */}
          {dataPopup.type == "confirm" && (
            <div className="w-full flex justify-center items-center gap-5">
              <button
                onClick={handleCancel}
                className="border-2 border-cust-teal-500 whitespace-nowrap hover:border-cust-teal-500/70  hover:bg-cust-teal-500/70 text-cust-teal-500 hover:text-white text-base font-semibold px-4 sm:px-6 py-2 text-center rounded-lg transition-all duration-150"
              >
                cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-150"
              >
                confirm
              </button>
            </div>
          )}

          {/* SUCCESS BUTTON */}
          {dataPopup.type == "success" && (
            <button
              onClick={handleConfirm}
              className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-150"
            >
              OKE
            </button>
          )}

          {/* WARNING BUTTON */}
          {dataPopup.type == "warning" && (
            <button
              onClick={handleConfirm}
              className="bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-150"
            >
              OKE
            </button>
          )}
        </motion.div>
      </div>
    )
  );
};

export default Popup;
