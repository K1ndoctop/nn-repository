import React from "react";
import MainRoutes from "./routing/MainRoutes";

import PostsList from "./components/ribbon/PostsList";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import Burger from "./components/ui/Burger/Burger";

const App = () => {
  return (
    <div>
      <Burger />
      <MainRoutes />
    </div>
  );
};

export default App;
