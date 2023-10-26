import axios from "axios";
import { TOKEN_FERFESH } from "./consts";

export const getTotalPages = async (url) => {
  const { data } = await axios.get(url);
  const totalPages = Math.ceil(data.length / 8);
  return totalPages;
};

export const addToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const addEmail = (email) => {
  localStorage.setItem("email", JSON.stringify(email));
};

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
};

export const updateToken = () => {
  let updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem("token"));
    if (!tokens) return clearInterval(updateFunc);
    const Authorization = `Bearer ${tokens.access}`;
    const { data } = await axios.post(
      TOKEN_FERFESH,
      { refresh: tokens.refresh },
      { headers: { Authorization } }
    );
    localStorage.setItem(
      "tokens",
      JSON.stringify({ refresh: tokens.refresh, access: data.access })
    );
    console.log(Authorization);
  }, 1000 * 60 * 5);
};

export const getEmail = () => {
  const email = localStorage.getItem("email");
  return email;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
};

export const checkLogin = () => {
  const data = localStorage.getItem("token");
  if (data) return true;
  return false;
};
