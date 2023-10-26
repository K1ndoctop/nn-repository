import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./post.module.css";
import { editPostFunc, getOnePost } from "../../store/posts/postsAction";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import { clearOnePost } from "../../store/posts/postsSlice";

const PostEdit = () => {
  const { loading } = useSelector((state) => state.posts);
  const [editPost, setEditPost] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getOnePost({ id }));
  //   setEditPost(onePost);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getOnePost(id));
        setEditPost(response.payload);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <Box sx={{ display: "flex", width: "50" }}>
            <CircularProgress />
          </Box>
          <h3 className="text-2xl font-semibold mt-4">Загрузка...</h3>
        </div>
      ) : (
        <>
          {editPost && (
            <>
              <div className={`w-full h-screen absolute ${styles.bg}`}></div>
              <div className="md:pl-32 w-full h-screen relative flex justify-center items-center overflow-hidden">
                <div className="lg:w-1/2">
                  <h3 className="pt-2 pb-4 text-2xl text-center font-semibold">
                    Изменить пост
                  </h3>
                  <div className="sm:flex">
                    <div className="flex flex-col lg:w-full">
                      <input
                        className="m-2 p-2 border rounded-lg"
                        type="text"
                        placeholder="Заголовок"
                        onChange={(e) =>
                          setEditPost({ ...editPost, title: e.target.value })
                        }
                        value={editPost.title}
                      />
                      <textarea
                        className="m-2 p-2 border rounded-lg lg:h-32"
                        type="text"
                        placeholder="Описание"
                        onChange={(e) =>
                          setEditPost({
                            ...editPost,
                            description: e.target.value,
                          })
                        }
                        value={editPost.description}
                      />
                      <select
                        className="m-2 p-2 border rounded-lg"
                        onChange={(e) =>
                          setEditPost({ ...editPost, category: e.target.value })
                        }
                        value={editPost.category.title}
                      >
                        <option disabled>Choose category</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                      </select>
                      <input
                        className="m-2 p-2 border rounded-lg"
                        type="text"
                        placeholder="Цена"
                        onChange={(e) =>
                          setEditPost({ ...editPost, price: e.target.value })
                        }
                        value={editPost.price}
                      />
                      <button
                        className="m-2 p-2 border rounded-lg bg-blue-400 hover:bg-blue-500"
                        onClick={() => {
                          dispatch(editPostFunc({ postEdit: editPost }));
                          dispatch(clearOnePost());
                          navigate("/home");
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PostEdit;
