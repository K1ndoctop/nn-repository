import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts/postsAction";
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
    // setSearch(posts);
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
        <div className="relative flex items-center h-12">
          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-xl border-blue-500 py-2.5 pe-10 shadow-sm sm:text-sm h-12 border-[2px] outline-none bg-[#00000000] "
            // onChange={(e) => setSearchValue(e.target.value)}
            //   value={searchValue}
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

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
            </button>
          </span>
        </div>
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
