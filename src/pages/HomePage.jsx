import React from "react";
import PostsList from "../components/ribbon/PostsList";
import Sidebar from "../components/ui/Sidebar/Sidebar";
import CommentsList from "../components/comments/CommentsList";

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <PostsList />
      <CommentsList />
    </div>
  );
};

export default HomePage;
