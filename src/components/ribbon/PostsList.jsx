import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, totalPagePosts } from "../../store/posts/postsAction";
import PostsItem from "./PostsItem";
import { Button, Input } from "@mui/material";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import { changePostPage } from "../../store/posts/postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, currentPage, totalPages } = useSelector(
    (state) => state.posts
  );
  //   const [search, setSearch] = useState([]);
  //   const [searchValue, setSearchValue] = useState("");

  const handleChange = (event, value) => {
    dispatch(changePostPage({ page: value }));
    dispatch(getPosts());
  };

  useEffect(() => {
    dispatch(getPosts());
    // dispatch(totalPagePosts());
  }, []);

  return (
    // <div className="flex flex-col ml-80 w-1/2">
    <div className="flex flex-col m-auto w-1/2">
      {/* <div className="flex text-center justify-center mt-4"> */}
      <div className="flex text-center justify-center mt-4 max-md:flex-col items-center">
        <button
          variant="contained"
          className=" border-blue-500 border-[2px]  text-black w-60 h-12 rounded-xl hover:bg-blue-500 hover:text-white hover:duration-700 mr-1"
        >
          JS
        </button>
        <button
          variant="contained"
          className=" border-blue-500 border-[2px]  text-black w-60 h-12 rounded-xl hover:bg-blue-500 hover:text-white hover:duration-700 mr-1"
        >
          PY
        </button>
      </div>
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
      <div className="flex text-center justify-center mt-4 mb-20">
        <Stack sx={{ marginTop: "0" }} className="pagination">
          <Pagination
            className="paginationBody"
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};

export default PostsList;
