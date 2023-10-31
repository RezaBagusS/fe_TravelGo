import { getUser } from "../../Helpers/SessionHelper";
import edit from "../../assets/edit.svg";
import { useState } from "react";

const UploadIMGModal = () => {
  const handleFile = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // File yang diunggah ada, Anda dapat melakukan sesuatu dengan file ini.
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div
      id="default-modal"
      tabindex="-1"
      class="flex items-center justify-center w-10/12 bg-slate-700 h-fit rounded-md"
    >
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          onChange={handleFile}
          id="dropzone-file"
          type="file"
          class="hidden"
          accept=".svg, .png, .jpg, .gif"
        />
      </label>
    </div>
  );
};

const AdminProfile = () => {
  const { name, img, email } = getUser();
  const [modal, setModal] = useState(false);

  const DataComp = ({ label, content }) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-cust-gray-700 font-semibold text-lg sm:text-2xl">
          {label}
        </label>
        <div className="text-base sm:text-xl text-cust-gray-700 font-medium">
          {content}
        </div>
      </div>
    );
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <div className="cust-container relative bg-cust-teal-50 rounded-2xl py-14">
        {modal && (
          <div className="z-30 absolute top-0 w-full h-full rounded-2xl flex flex-col gap-3 justify-center items-center bg-white/70 backdrop-blur-sm py-14">
            <h2
              onClick={handleModal}
              className="relative cursor-pointer w-10/12 text-center text-2xl sm:text-3xl font-bold text-cust-gray-700 "
            >
              <span className="absolute top-1/2 -translate-y-1/2 left-0 text-lg font-medium underline-offset-1 hover:underline">
                {`<`} Back to profile
              </span>
              Upload your photo
            </h2>
            <UploadIMGModal />
          </div>
        )}
        <div className="w-full flex flex-col gap-5 px-10">
          <div className="relative flex justify-center gap-10 bg-cust-teal-50 z-10 items-center py-7">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-cust-gray-500">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1698735976/Group_8755_1_hqofkk.png"
                className="w-full object-cover"
                alt="MissingIMG"
              />
            </div>
            <div className="absolute">
              <div className=" w-32 h-32 rounded-full overflow-hidden border-4 border-cust-gray-500">
                <img
                  src={img}
                  className="w-full object-cover"
                  alt="MissingIMG"
                />
              </div>
              <span
                onClick={handleModal}
                className="absolute cursor-pointer w-10 h-10 rounded-full p-2 z-10 bg-gray-400 hover:bg-gray-300 right-0 bottom-0 border-2 border-cust-gray-500 transition-all duration-200"
              >
                <img src={edit} className="w-full" alt="MissingIcon" />
              </span>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-cust-gray-500">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1698735994/Group_8754_zcesis.png"
                className="w-full object-cover"
                alt="MissingIMG"
              />
            </div>
          </div>
          <DataComp label="Nama" content={name} />
          <DataComp label="Email" content={email} />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
