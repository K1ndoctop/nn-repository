import React, { useEffect } from "react";
import MainRoutes from "./routing/MainRoutes";
import { checkLogin, updateToken } from "./helpers/functions";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    updateToken();
  }, []);
  useEffect(() => {
    checkLogin();
    if (!checkLogin()) navigate("/");
    return;
  }, []);
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
