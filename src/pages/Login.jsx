import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { loginGoogle } from "../Helpers/loginGoogle";
import googleIcon from "../assets/google-icon.svg";

const idClient =
  "795806894004-tu43mnn3q0rf0g25hqpvnh2bhf7u37g4.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "Email Not Found",
    message: "Message Not Found",
    userId: "0",
  });

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
  }, []);

  const responseLoginGoogle = async (response) => {
    let res = await loginGoogle(response);

    console.log("Response DATA : ", res);
    if (res.userId) {
      setData({
        email: res.email,
        message: res.message,
        userId: res.userId,
      });
      navigate("/");
    }
  };

  return (
    <div className="cust-outer-container bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1698304423/Group_12_1_rpb6gz.png')] bg-cover bg-center">
      <div className="cust-container grid grid-cols-1 lg:grid-cols-2 h-screen max-h-[700px] py-5">
        <div className="w-full hidden lg:flex justify-center items-center">
          <img
            className="w-full"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1698307120/Image_6_cpbori.png"
            alt="MissingIMG"
          />
        </div>
        <div className="p-2 sm:p-5 flex justify-center">
          <div className="w-11/12 sm:10/12 md:w-8/12 lg:w-11/12 xl:w-10/12 bg-white/60 p-7 rounded-2xl flex flex-col gap-3">
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
            <div className="flex flex-col gap-2">
              <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
                Nama Pengguna
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm rounded-xl focus:border-none focus:outline-none bg-white"
                placeholder="Nama Pengguna Kamu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
                Kata Sandi
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm rounded-xl focus:border-none focus:outline-none bg-white"
                placeholder="Kata Sandi Kamu"
              />
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
              <button className="w-full bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-base md:text-lg font-bold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-150">
                Login
              </button>
              <p className="text-center text-cust-gray-700 text-sm sm:text-base">atau</p>
              <GoogleLogin
                clientId={idClient}
                render={(renderProps) => (
                  <button
                    onClick={() => {
                      renderProps.onClick();
                    }}
                    disabled={renderProps.disabled}
                    className="w-full flex gap-3 justify-center items-center bg-white hover:bg-white/70 text-cust-gray-700 text-xs md:text-base font-bold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-150"
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
                <Link to="/auth/register" className="font-bold hover:text-cust-teal-500/70 transition-all duration-150">
                  Daftar Gratis
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
