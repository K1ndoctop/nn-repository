import React from "react";
import PostsList from "../components/ribbon/PostsList";
import Sidebar from "../components/ui/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <PostsList />
    </div>
  );
};

export default HomePage;
