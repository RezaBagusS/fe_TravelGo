import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                Daftar
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
                Alamat E-mail
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm rounded-xl focus:border-none focus:outline-none bg-white"
                placeholder="Isi Nama Pengguna Kamu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
                Kata Sandi
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm rounded-xl focus:border-none focus:outline-none bg-white"
                placeholder="Isi Kata Sandi Kamu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
                Konfirmasi Kata Sandi
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm rounded-xl focus:border-none focus:outline-none bg-white"
                placeholder="Konfirmasi Kata Sandi"
              />
            </div>
            <div className="pt-5 flex flex-col gap-3">
              <button className="w-full bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-base md:text-lg font-bold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-150">
                Register
              </button>
              <p className="text-cust-gray-700 text-center text-sm sm:text-base">
                Sudah punya akun?{" "}
                <Link
                  to="/auth/login"
                  className="font-bold hover:text-cust-teal-500/70 transition-all duration-150"
                >
                  Masuk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
