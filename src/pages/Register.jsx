import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import { registerApi } from "../Helpers/register";
import openEye from "../assets/openEye.svg";
import closeEye from "../assets/closeEye.svg";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../redux/slices/reduxLoadingSlice";
import { setMessage } from "../redux/slices/reduxMessageSlice";

const Register = () => {
  const [eye, setEye] = useState(false);

  const form = useRef();
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.message.message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    const res = await registerApi({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    console.log("Response DATA : ", res);
    if (res.status == "success") {
      let dataMessage = {
        status: res.status,
        content: res.message,
      };
      setTimeout(() => {
        dispatch(setMessage(dataMessage));
      }, 2000);
    }

    e.target.reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    form.current.reset();
  }, []);

  const handleModal = () => {
    dispatch(setLoading(false));
    dispatch(setMessage({ status: "", content: "" }));
    message.status == "success" && navigate("/auth/login");
  };

  return (
    <div className="cust-outer-container bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1698304423/Group_12_1_rpb6gz.png')] bg-cover bg-center">
      {loading && (
        <div className="fixed z-50 w-full h-screen bg-black/50 flex justify-center items-center">
          <div className="rounded-3xl w-96 h-fit p-5 bg-white/50 backdrop-blur-lg">
            {message.status ? (
              <div className="w-full flex flex-col gap-5 justify-between items-center">
                <h1 className="text-cust-gray-700 font-bold text-center text-xl sm:text-2xl">
                  {message.status == "success"
                    ? "Akun berhasil dibuat🎉"
                    : "Gagal membuat akun😣"}
                </h1>
                <p className="text-cust-gray-700 font-medium text-base sm:text-lg">
                  {message.content}
                </p>
                <button
                  className="w-full bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-base md:text-lg font-bold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-150 mt-5"
                  onClick={handleModal}
                >
                  {
                    message.status == "success"
                      ? "Masuk ke akun"
                      : "Coba lagi"
                  }
                </button>
              </div>
            ) : (
              <div className="p-3 flex justify-center">
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
            )}
          </div>
        </div>
      )}
      <div className="cust-container grid grid-cols-1 lg:grid-cols-2 h-screen max-h-[700px] py-3">
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
                Nama Pengguna
              </label>
              <input
                required
                autoComplete="off"
                type="text"
                name="name"
                pattern="[A-Za-z\s]{3,}"
                className="text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
                placeholder="Isi Nama Pengguna Kamu"
              />
              <p className="text-xs text-cust-gray-500">
                *Nama Pengguna harus terdiri dari huruf dan minimal 3 karakter.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-cust-gray-700 font-medium text-base sm:text-xl">
                Email Pengguna
              </label>
              <input
                required
                autoComplete="off"
                type="email"
                name="email"
                className="text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
                placeholder="Isi Kata Sandi Kamu"
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
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                  type={eye ? "text" : "password"}
                  name="password"
                  className="w-full text-xs sm:text-sm rounded-xl text-cust-teal-500  font-medium focus:border-none focus:outline-none bg-white"
                  placeholder="Konfirmasi Kata Sandi"
                />
                <img
                  src={eye ? openEye : closeEye}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setEye((prev) => !prev)}
                  alt="icon"
                />
              </div>
              <p className="text-xs text-cust-gray-500">
                *Kata sandi harus mengandung setidaknya 1 huruf kecil, 1 huruf
                besar, 1 angka, dan memiliki panjang minimal 8 karakter.
              </p>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
