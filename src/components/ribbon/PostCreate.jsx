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
    <div>
      <div className="">
        <div className="">
          <input
            type="text"
            placeholder="Заголовок"
            onChange={(e) => setAddPost({ title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Описание"
            onChange={(e) => setAddPost({ description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Фото"
            onChange={(e) => setAddPost({ image: e.target.value })}
          />
          <input
            type="numbers"
            placeholder="Категория"
            onChange={(e) => setAddPost({ category: e.target.value })}
          />
          <input
            type="text"
            placeholder="Цена"
            onChange={(e) => setAddPost({ price: e.target.value })}
          />
          <button onClick={() => dispatch(setPosts({ addPost }))}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
