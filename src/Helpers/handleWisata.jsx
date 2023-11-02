// const backendURL = "https://be-travel-go.vercel.app";
const backendURL = "http://localhost:3000";

export const addWisataApi = async (data) => {
  const response = await fetch(`${backendURL}/api/add/wisata`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
        data: data,
        token: localStorage.getItem("travelGo_U238T"),
    }),
  });

  const dataRes = await response.json();
  return {
    status: dataRes.status,
    message: dataRes.message,
  };
};

export const updateWisataApi = async (data) => {
  const response = await fetch(`${backendURL}/api/update/wisata`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
        data: data,
        token: localStorage.getItem("travelGo_U238T"),
    }),
  });

  const dataRes = await response.json();
  return {
    status: dataRes.status,
    message: dataRes.message,
  };
}

export const deleteWisataApi = async (id) => {
  const response = await fetch(`${backendURL}/api/delete/wisata`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
        id: id,
        token: localStorage.getItem("travelGo_U238T"),
    }),
  });

  const dataRes = await response.json();
  return {
    status: dataRes.status,
    message: dataRes.message,
  };
}
