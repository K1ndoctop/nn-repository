import React from "react";
import MainRoutes from "./routing/MainRoutes";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <>
      <SideBar />
      <MainRoutes />
    </>
  );
};

export default App;
