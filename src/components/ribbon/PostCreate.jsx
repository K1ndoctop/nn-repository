import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../../store/posts/postsAction";
import styles from "./post.module.css";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState({
    title: "",
    description: "",
    price: "",
    category: {},
  });
  return (
    <>
      <div className={`w-full h-screen absolute ${styles.bg}`}></div>
      <div className="md:pl-32 w-full h-screen relative flex justify-center items-center overflow-hidden ml-6">
        <div className="lg:w-1/2">
          <h3 className="pt-2 pb-4 text-2xl text-center font-semibold">
            Добавить пост
          </h3>
          <div className="sm:flex">
            <div className="w-32 h-32 mx-6 lg:w-1/2 lg:h-1/2">
              {addPost.image ? (
                <img
                  className="rounded-lg mx-4"
                  src={addPost.image}
                  alt={addPost.name}
                  width="350"
                  height="100"
                />
              ) : (
                <img
                  className="rounded-lg mx-4"
                  src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                  alt="avatar"
                  width="350"
                  height="100"
                />
              )}
            </div>
            <div className="flex flex-col lg:w-full">
              <input
                className="m-2 p-2 border rounded-lg"
                type="text"
                placeholder="Заголовок"
                onChange={(e) =>
                  setAddPost({ ...addPost, title: e.target.value })
                }
              />
              <textarea
                className="m-2 p-2 border rounded-lg lg:h-32"
                type="text"
                placeholder="Описание"
                onChange={(e) =>
                  setAddPost({ ...addPost, description: e.target.value })
                }
              />
              <input
                className="m-2 p-2 border rounded-lg"
                type="text"
                placeholder="Цена"
                onChange={(e) =>
                  setAddPost({ ...addPost, price: e.target.value })
                }
              />
              <select
                className="m-2 p-2 border rounded-lg"
                onChange={(e) =>
                  setAddPost({ ...addPost, category: e.target.value })
                }
                value={addPost.category.title}
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
              <button
                className="m-2 p-2 border rounded-lg bg-blue-400 hover:bg-blue-500"
                onClick={() => {
                  dispatch(setPosts({ addPost }));
                  // navigate("/");
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCreate;
