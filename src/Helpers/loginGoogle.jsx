const backendURL = "https://be-travel-go.vercel.app";

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

      if (responseFromBackend.ok) {
        const data = await responseFromBackend.json();
        // console.log("Response : ", data);
        return data;
      } else {
        // console.error("Respons tidak berhasil");
        return {
          message: "Error - " + "Respons tidak berhasil",
        };
      }
    } catch (error) {
      return {
        message: "Error - " + "Server Error"
      };
    }
  } else {
    // Pengguna membatalkan otentikasi atau terjadi kesalahan
    console.error("Otentikasi dibatalkan atau terjadi kesalahan");
    return {
      message: "Error - " + "Otentikasi dibatalkan atau terjadi kesalahan",
    };
  }
};
