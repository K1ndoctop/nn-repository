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
    <Card sx={{ maxWidth: "100%", margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={post.image}
          alt={post.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
        <Button
          onClick={() => {
            navigate(`/edit-post/${post.id}`);
          }}
        >
          Edit
        </Button>
        <Button onClick={() => dispatch(deletePosts({ id: post.id }))}>
          Delete
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default PostsItem;
