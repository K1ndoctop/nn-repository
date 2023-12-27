import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePosts, getOnePost } from "../../store/posts/postsAction";
import { useNavigate, useParams } from "react-router-dom";

const PostsItem = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-1/2 mt-5 m-auto">
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
      </div>
    </article>
    // <Card sx={{ maxWidth: "100%", margin: 2 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image={post.image}
    //       alt={post.name}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {post.name}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {post.description}
    //       </Typography>
    //     </CardContent>
    //     <Button
    //       onClick={() => {
    //         navigate(`/edit-post/${post.id}`);
    //       }}
    //     >
    //       Edit
    //     </Button>
    //     <Button onClick={() => dispatch(deletePosts({ id: post.id }))}>
    //       Delete
    //     </Button>
    //   </CardActionArea>
    // </Card>
  );
};

export default PostsItem;
