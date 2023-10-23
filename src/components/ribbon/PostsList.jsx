import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts/postsAction";
import PostsItem from "./PostsItem";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
