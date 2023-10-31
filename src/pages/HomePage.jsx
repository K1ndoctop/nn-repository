import React from "react";
import PostsList from "../components/ribbon/PostsList";
import Burger from "../components/ui/Burger/Burger";
import CommentsList from "../components/comments/CommentsList";

const HomePage = () => {
  return (
    <div>
      <Burger />
      <PostsList />
      <CommentsList />
    </div>
  );
};

export default HomePage;
