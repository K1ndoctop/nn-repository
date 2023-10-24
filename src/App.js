import React from "react";
import MainRoutes from "./routing/MainRoutes";
import PostsList from "./components/ribbon/PostsList";
import Navbar from "./components/ui/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <>
      {/* <SideBar/> */}
      <MainRoutes />
    </>
  );
};

export default App;
