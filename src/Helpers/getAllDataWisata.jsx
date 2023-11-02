const backendURL = "https://be-travel-go.vercel.app";
// const backendURL = "http://localhost:3000";

export const getAllDataWisata = async () => {
  try {
    let res = await fetch(`${backendURL}/api/data/wisata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    let data = await res.json();
    return data;

  } catch (error) {
    return {
      status: "error",
      message: "Data tidak berhasil diambil"
    };
  }
};


