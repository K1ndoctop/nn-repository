import React, { useEffect } from "react";
import MainRoutes from "./routing/MainRoutes";
import { checkLogin, updateToken } from "./helpers/functions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOneUser } from "./store/users/usersActions";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    updateToken();
    dispatch(getOneUser());
  }, []);
  useEffect(() => {
    checkLogin();
    if (!checkLogin()) navigate("/");
    return;
  }, []);

  //!
  return (
    <div className=" bg-gradient-to-br from-slate-800 via-slate-500 to-gray-500 ">
      <MainRoutes />
    </div>
  );
};

export default App;
