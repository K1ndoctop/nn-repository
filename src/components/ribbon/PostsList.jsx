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
    <div className="flex flex-col ml-80 w-1/2">
      {/* <div className="flex text-center justify-center mt-4"> */}
      <div className="flex text-center justify-center mt-4">
        <Button sx={{ width: "25%", marginRight: 2 }} variant="contained">
          JS
        </Button>
        <Button sx={{ width: "25%", marginLeft: 2 }} variant="contained">
          PY
        </Button>
        <Input
          sx={{
            width: "25%",
            marginLeft: 4,
            background: "lightgray",
            borderRadius: "5px",
          }}
          placeholder="Search"
          //   onChange={(e) => setSearchValue(e.target.value)}
          //   value={searchValue}
        />
        <Button sx={{ marginLeft: -6 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Button>
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
