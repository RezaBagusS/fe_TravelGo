import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect, useRef, useState } from "react";
import { loginGoogle } from "../Helpers/loginGoogle";
import { loginApi } from "../Helpers/login";
import googleIcon from "../assets/google-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slices/reduxLoadingSlice";
import { setMessage } from "../redux/slices/reduxMessageSlice";
import { setPopup } from "../redux/slices/reduxPopupSlice";
import openEye from "../assets/openEye.svg";
import closeEye from "../assets/closeEye.svg";
import { setUserData } from "../Helpers/SessionHelper";

const Login = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();
  const objLoading = useSelector((state) => state.loading.loading);
  const idClient = useSelector((state) => state.idClient.data);
  const { content, status } = useSelector((state) => state.message.message);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: idClient,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setMessage({ status: "", content: "" }));
  }, []);

  const closePopupAndNavigate = () => {
    setTimeout(() => {
      dispatch(setPopup({ show: false }));
      navigate("/");
    }, 400);
  };

  const responseLoginGoogle = async (response) => {
    dispatch(
      setPopup({
        show: true,
        type: "loading",
        title: "LOADING",
        message: "Tunggu sebentar ya . . .",
      })
    );

    let res = await loginGoogle(response);

    console.log("Response DATA : ", res);
    if (res.status == "Error") {
      dispatch(setPopup({ show: false }));
    }

    if (res.status == "success") {
      setUserData(res, res.token);
      dispatch(
        setMessage({
          status: "",
          content: "",
        })
      );
      setTimeout(() => {
        dispatch(
          setPopup({
            show: true,
            type: "success",
            title: "SUCCESS",
            message: "Berhasil Login",
            onConfirm: () => {
              closePopupAndNavigate();
            },
          })
        );
      }, 1000);
    } else {
      dispatch(setPopup({ show: false }));
      dispatch(
        setMessage({
          status: res.status,
          content: res.message,
        })
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // dispatch(setLoading(true));
    dispatch(
      setPopup({
        show: true,
        type: "loading",
        title: "LOADING",
        message: "Tunggu sebentar ya . . .",
      })
    );
    let data = {
      name: form.current[0].value,
      password: form.current[1].value,
    };
    // console.log("SEND DATA: ", data);
    let res = await loginApi(data);

    // console.log("Response DATA : ", res);
    if (res.status == "success") {
      setUserData(res.data, res.token);
      e.target.reset();
      setTimeout(() => {
        dispatch(
          setPopup({
            show: true,
            type: "success",
            title: "SUCCESS",
            message: "Berhasil Login",
            onConfirm: () => {
              closePopupAndNavigate();
            },
          })
        );
      }, 1000);
    } else {
      // dispatch(setLoading(false));
      dispatch(setPopup({ show: false }));
      let dataMessage = {
        status: res.status,
        content: res.message,
      };
      dispatch(setMessage(dataMessage));
    }
  };

  return (
    <div className="relative cust-outer-container bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1698304423/Group_12_1_rpb6gz.png')] bg-cover bg-center">
      <div className="cust-container grid grid-cols-1 lg:grid-cols-2 items-center h-screen max-h-[700px] py-5">
        <div className="w-full hidden lg:flex justify-center items-center">
          <img
            className="w-full"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1698307120/Image_6_cpbori.png"
            alt="MissingIMG"
          />
        </div>
        <div className="p-2 sm:p-5 flex justify-center">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-11/12 sm:10/12 md:w-8/12 lg:w-11/12 xl:w-10/12 bg-white/60 p-7 rounded-2xl flex flex-col gap-3"
          >
            <div className="flex justify-center sm:justify-between">
              <h1 className="text-cust-gray-700 font-bold text-2xl sm:text-3xl">
                Masuk
              </h1>
              <Link to={"/"}>
                <img
                  src={logo}
                  className="cursor-pointer hidden sm:flex sm:w-16 sm:h-16"
                  alt="MissingIMG"
                />
              </Link>
            </div>
            {status == "error" && (
              <div className="bg-red-500 p-2 rounded-lg">
                <p className="text-cust-teal-50 text-sm text-center">
                  {content}
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2">
              <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
                Nama Pengguna
              </label>
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
                className="text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
                placeholder="Nama Pengguna Kamu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  required
                  autoComplete="off"
                  type={eye ? "text" : "password"}
                  name="password"
                  className="w-full text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
                  placeholder="Kata Sandi Kamu"
                />
                <img
                  src={eye ? openEye : closeEye}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setEye((prev) => !prev)}
                  alt="icon"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                to="/auth/register"
                className="text-cust-gray-700 hover:text-cust-teal-500/70 text-sm sm:text-base transition-all duration-150"
              >
                Lupa kata sandi?
              </Link>
            </div>
            <div className="pt-5 flex flex-col gap-3">
              <button
                type="submit"
                className="w-full bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-base md:text-lg font-bold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-150"
              >
                Login
              </button>
              <p className="text-center text-cust-gray-700 text-sm sm:text-base">
                atau
              </p>
              <GoogleLogin
                clientId={idClient}
                render={(renderProps) => (
                  <button
                    onClick={() => {
                      renderProps.onClick();
                    }}
                    disabled={renderProps.disabled}
                    className="w-full cursor-pointer flex gap-3 justify-center items-center bg-white hover:bg-white/70 text-cust-gray-700 text-xs md:text-base font-bold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-150"
                  >
                    <img
                      src={googleIcon}
                      className="w-8 h-8"
                      alt="MissingIcon"
                    />
                    With Google
                  </button>
                )}
                onSuccess={responseLoginGoogle}
                onFailure={responseLoginGoogle}
                cookiePolicy="single_host_origin"
              />
              <p className="text-cust-gray-700 text-center text-sm sm:text-base">
                Belum punya akun?{" "}
                <Link
                  to="/auth/register"
                  className="font-bold hover:text-cust-teal-500/70 transition-all duration-150"
                >
                  Daftar Gratis
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
