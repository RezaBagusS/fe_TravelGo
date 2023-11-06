const backendURL = "https://be-travel-go.vercel.app";
// const backendURL = "http://localhost:3000";

export const uploadImage = async (data) => {
  // console.log("Data Upload nih bos : ", data);
  try {
    const formData = new FormData();
    formData.append("namaWisata", data.namaWisata);
    formData.append("token", localStorage.getItem("travelGo_U238T"));
    formData.append("file", data.file);

    let res = await fetch(`${backendURL}/api/upload/image`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    });

    let dataRes = await res.json();
    return dataRes;
  } catch (error) {
    return {
      status: "error",
      message: "Internal Server Error",
    };
  }
};

export const getAllDataEksplorasi = async () => {
  const res = await fetch(`${backendURL}/api/data/eksplorasi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token: localStorage.getItem("travelGo_U238T"),
    }),
  });

  const dataRes = await res.json();

  return dataRes;
};
