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
    if (!checkLogin()) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
