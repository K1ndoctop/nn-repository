import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePosts,
  getOnePost,
  getToggleLikes,
} from "../../store/posts/postsAction";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const PostsItem = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [likes, setLikes] = React.useState(false);
  const { isAdmin } = useSelector((state) => state.users);

  return (
    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-1/2 mt-5 m-auto flex flex-col">
      <img alt="Office" src={post.image} class="h-96 w-full object-cover" />

      <div class="bg-white p-4 sm:p-6">
        <time datetime="2022-10-10" class="block text-xs text-gray-500">
          10th Oct 2022
        </time>

        <a href="#">
          <h3 class="mt-0.5 text-lg text-gray-900">{post.name}</h3>
        </a>

        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {post.description}
        </p>
        <div className="flex items-center ml-4 mt-4">
          <p>{post.likes}</p>
          {likes ? (
            <AiFillHeart
              className="ml-2 text-xl text-red-600"
              onClick={() => {
                dispatch(getToggleLikes(post.id));
                setLikes(!likes);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="ml-2 text-xl "
              onClick={() => {
                dispatch(getToggleLikes(post.id));
                setLikes(!likes);
              }}
            />
          )}
        </div>
        {isAdmin && (
          <>
            <button
              class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 m-3"
              onClick={() => {
                navigate(`/edit-post/${post.id}`);
              }}
            >
              Изменить
            </button>
            <button
              class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              onClick={() => dispatch(deletePosts({ id: post.id }))}
            >
              Удалить
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default PostsItem;
