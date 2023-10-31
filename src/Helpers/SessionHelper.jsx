import { jwtDecode  } from "jwt-decode";
import { Navigate } from "react-router-dom";

export const invalidateSession = () => localStorage.clear();

export const setUserData = (userData, token) => {
  const exp = jwtDecode(token).exp;

  localStorage.setItem("travelGo_U9d72", btoa(JSON.stringify(userData)));
  localStorage.setItem("travelGo_U238T", token);
  localStorage.setItem("travelGo_E723S", exp);
};

export const getUser = () => {
  if (localStorage.getItem("travelGo_U238T") == null) {
    return {};
  } else if (Date.now() > localStorage.getItem("travelGo_E723S") * 1000) {
    alert("Your session is expired. Please login again.");
    invalidateSession();
    return {};
  } else {
    try {
      let decoded = atob(localStorage.getItem("travelGo_U9d72"));
      return JSON.parse(decoded);
    } catch (e) {
      return {};
    }
  }
};

export const getUserData = getUser();
export const getToken = localStorage.getItem("travelGo_U238T");

export const CheckUser = ({ forLoggedOut = false, red = false, children = null }) => {
  let hasToken =
    localStorage.getItem("travelGo_U238T") &&
    localStorage.getItem("travelGo_U9d72") &&
    Date.now() < localStorage.getItem("travelGo_E723S") * 1000;

  if (!forLoggedOut && !hasToken) {
    if (red) {
      invalidateSession();
      return <Navigate replace to="/login" />;
    }
    return null;
  } else if (forLoggedOut && hasToken) {
    if (red) return <Navigate replace to="/" />;
    return null;
  }
  if (children) return children;
  return null;
};

export const getActiveUser = () => {
  let hasToken =
    localStorage.getItem("travelGo_U238T") &&
    localStorage.getItem("travelGo_U9d72") &&
    Date.now() < localStorage.getItem("travelGo_E723S") * 1000;

  return hasToken;
};
