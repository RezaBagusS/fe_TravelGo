import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect, useRef, useState } from "react";
import { loginGoogle } from "../Helpers/loginGoogle";
import { loginApi } from "../Helpers/login";
import googleIcon from "../assets/google-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDataLogin } from "../redux/slices/reduxDataLoginSlice";
import { setLoading } from "../redux/slices/reduxLoadingSlice";
import { setMessage } from "../redux/slices/reduxMessageSlice";
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

  const responseLoginGoogle = async (response) => {
    dispatch(setLoading(true));
    let res = await loginGoogle(response);

    console.log("Response DATA : ", res);
    if (res.status == "Error") {
      dispatch(setLoading(false));
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
        navigate("/");
      }, 1000);
    } else {
      dispatch(setLoading(false));
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

    dispatch(setLoading(true));
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
        navigate("/");
      }, 1000);
    } else {
      dispatch(setLoading(false));
      let dataMessage = {
        status: res.status,
        content: res.message,
      };
      dispatch(setMessage(dataMessage));
    }
  };

  return (
    <div className="relative cust-outer-container bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1698304423/Group_12_1_rpb6gz.png')] bg-cover bg-center">
      {objLoading && (
        <div className="fixed z-50 w-full h-screen bg-black/50 flex justify-center items-center">
          <div className="rounded-3xl w-92 h-fit p-5 bg-white/50 backdrop-blur-lg">
            <svg
              aria-hidden="true"
              className="inline w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          </div>
        </div>
      )}
      <div className="cust-container grid grid-cols-1 lg:grid-cols-2 h-screen max-h-[700px] py-5">
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
                className="text-xs sm:text-sm rounded-xl focus:border-none focus:outline-none bg-white"
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
                  className="w-full text-xs sm:text-sm rounded-xl focus:border-none focus:outline-none bg-white"
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
