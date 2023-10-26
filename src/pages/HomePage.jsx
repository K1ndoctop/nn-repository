import React from "react";
import PostsList from "../components/ribbon/PostsList";
import Burger from "../components/ui/Burger/Burger";

const HomePage = () => {
  return (
    <div>
      <Burger />
      <PostsList />
    </div>
  );
};

export default HomePage;
