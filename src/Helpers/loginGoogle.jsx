const backendURL = "https://be-travel-go.vercel.app";
// const backendURL = "http://localhost:3000";

export const loginGoogle = async (response) => {
  console.log("Response : ", response.tokenId);
  if (response.tokenId) {
    try {
      const responseFromBackend = await fetch(`${backendURL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: response.tokenId,
        }),
      });

      console.log("Response : ", responseFromBackend);
      if (responseFromBackend.ok) {
        const data = await responseFromBackend.json();
        localStorage.setItem("token", data.token);
        console.log("Response : ", data);
        return data;
      } else {
        // console.error("Respons tidak berhasil");
        return {
          status: "error",
          message: "Respons tidak berhasil",
        };
      }
    } catch (error) {
      return {
        status: "error",
        message: "Server Error"
      };
    }
  } else {
    // Pengguna membatalkan otentikasi atau terjadi kesalahan
    console.error("Otentikasi dibatalkan atau terjadi kesalahan");
    return {
      status: "error",
      message: "Otentikasi dibatalkan atau terjadi kesalahan",
    };
  }
};
