import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../../store/posts/postsAction";

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
    <div className="w-full h-full relative">
      <div className="">
        {addPost.image ? (
          <img
            className="m-2 rounded-lg"
            src={addPost.image}
            alt={addPost.name}
            width="350"
            height="100"
          />
        ) : (
          <img
            className="m-2 rounded-lg"
            src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            alt="avatar"
            width="350"
            height="100"
          />
        )}
        <div className="">
          <input
            className="my-2 p-2 border rounded-lg"
            type="text"
            placeholder="Заголовок"
            onChange={(e) => setAddPost({ title: e.target.value })}
          />
          <input
            className="my-2 p-2 border rounded-lg"
            type="text"
            placeholder="Описание"
            onChange={(e) => setAddPost({ description: e.target.value })}
          />
          <input
            className="my-2 p-2 border rounded-lg"
            type="text"
            placeholder="Фото"
            onChange={(e) => setAddPost({ image: e.target.value })}
          />
          <input
            className="my-2 p-2 border rounded-lg"
            type="numbers"
            placeholder="Категория"
            onChange={(e) => setAddPost({ category: e.target.value })}
          />
          <input
            className="my-2 p-2 border rounded-lg"
            type="text"
            placeholder="Цена"
            onChange={(e) => setAddPost({ price: e.target.value })}
          />
          <button
            className="my-2 p-2 border rounded-lg"
            onClick={() => dispatch(setPosts({ addPost }))}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
