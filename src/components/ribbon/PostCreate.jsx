import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../../store/posts/postsAction";
import styles from "./post.module.css";

const PostCreate = () => {
  const dispatch = useDispatch();
  const [addPost, setAddPost] = useState({
    title: "",
    description: "",
    image: "",
    category: 0,
    price: "",
  });
  return (
    <>
      <div className={`w-full h-screen absolute ${styles.bg}`}></div>
      <div className="md:pl-32 w-full h-screen relative flex justify-center items-center overflow-hidden">
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
                onChange={(e) => setAddPost({ title: e.target.value })}
              />
              <textarea
                className="m-2 p-2 border rounded-lg lg:h-32"
                type="text"
                placeholder="Описание"
                onChange={(e) => setAddPost({ description: e.target.value })}
              />
              <input
                className="m-2 p-2 border rounded-lg"
                type="text"
                placeholder="Фото"
                onChange={(e) => setAddPost({ image: e.target.value })}
              />
              <input
                className="m-2 p-2 border rounded-lg"
                type="numbers"
                placeholder="Категория"
                onChange={(e) => setAddPost({ category: e.target.value })}
              />
              <input
                className="m-2 p-2 border rounded-lg"
                type="text"
                placeholder="Цена"
                onChange={(e) => setAddPost({ price: e.target.value })}
              />
              <button
                className="m-2 p-2 border rounded-lg bg-blue-400 hover:bg-blue-500"
                onClick={() => dispatch(setPosts({ addPost }))}
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
