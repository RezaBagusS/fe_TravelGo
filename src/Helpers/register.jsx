const backendURL = "https://be-travel-go.vercel.app";
// const backendURL = "http://localhost:3000";

export const registerApi = async (data) => {
  const response = await fetch(`${backendURL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });

  const dataRes = await response.json();
  return {
    status: dataRes.status,
    message: dataRes.message,
  };
};