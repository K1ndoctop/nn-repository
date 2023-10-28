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
    const token = getToken();
    if (!token) return clearInterval(updateFunc);
    const Authorization = `Bearer ${token.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    const requestData = {
      refresh: token.refresh,
    };

    try {
      const res = await axios.post(TOKEN_FERFESH, requestData, config);
      console.log(res);
      addToken({ access: res.data.access, refresh: token.refresh });
      console.log(Authorization);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  }, 1000 * 5 * 1);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
};

export const checkLogin = () => {
  const data = localStorage.getItem("token");
  if (!data) return false;
  return true;
};

export const getEmail =() => {
  const email = JSON.parse(localStorage.getItem("email"))
  return email
}