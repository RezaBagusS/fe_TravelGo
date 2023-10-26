import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cust-outer-container bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1698304423/Group_12_1_rpb6gz.png')] bg-cover bg-center">
      <div className="cust-container grid grid-cols-2 h-screen max-h-[700px] py-5">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-full"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1698307120/Image_6_cpbori.png"
            alt="MissingIMG"
          />
        </div>
        <div className="p-5 flex justify-center">
          <div className="w-10/12 bg-white/60 p-7 rounded-2xl flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className="text-cust-gray-700 font-bold text-3xl">Daftar</h1>
              <img src={logo} className="" alt="MissingIMG" />
            </div>
            <div className="flex flex-col gap-4">
              <label>Alamat E-mail</label>
              <input type="text" placeholder="Isi Nama Pengguna Kamu" />
            </div>
            <div className="flex flex-col gap-4">
              <label>Kata Sandi</label>
              <input type="text" placeholder="Isi Kata Sandi Kamu" />
            </div>
            <div className="flex flex-col gap-4">
              <label>Konfirmasi Kata Sandi</label>
              <input type="text" placeholder="Konfirmasi Kata Sandi" />
            </div>
            <div className="pt-5 flex flex-col gap-3">
              <button className="w-full bg-cust-teal-500 hover:bg-cust-teal-500/70 text-white text-lg font-bold px-6 py-3 rounded-lg transition-all duration-150">
                Selanjutnya
              </button>
              <p className="text-center text-cust-gray-700">atau</p>
              <Link
                to="/auth/login"
                className="text-cust-gray-700 text-center hover:text-cust-teal-500/70 transition-all duration-150"
              >
                Sudah punya akun? <span className="font-bold">Masuk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
