import React, { useEffect } from "react";
import MainRoutes from "./routing/MainRoutes";
import { checkLogin, updateToken } from "./helpers/functions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getIsAdmin, getOneUser } from "./store/users/usersActions";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    updateToken();
    dispatch(getOneUser());
    dispatch(getIsAdmin());
  }, []);
  useEffect(() => {
    checkLogin();
    if (!checkLogin()) navigate("/");
    return;
  }, []);
  return (
    <div className=" bg-gray-300">
      <MainRoutes />
    </div>
  );
};

export default App;
