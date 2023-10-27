import React, { useEffect } from "react";
import MainRoutes from "./routing/MainRoutes";
import { checkLogin, updateToken } from "./helpers/functions";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/ui/Sidebar/Sidebar";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    updateToken();
  }, []);
  useEffect(() => {
    if (!checkLogin()) navigate("/");
    return;
  }, []);
  return (
    <div>
      {/* <Sidebar /> */}
      <MainRoutes />
    </div>
  );
};

export default App;
