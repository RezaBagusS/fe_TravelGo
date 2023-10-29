// const backendURL = "https://be-travel-go.vercel.app";
const backendURL = "http://localhost:3000";

export const loginApi = async (data) => {
  const response = await fetch(`${backendURL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });

  const dataRes = await response.json();
  localStorage.setItem("token", dataRes.token);
  return {
    status: dataRes.status,
    message: dataRes.message,
    data: dataRes.data,
    token: dataRes.token,
  };
};