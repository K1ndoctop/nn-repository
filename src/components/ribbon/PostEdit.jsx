import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./post.module.css";
import { getOnePost } from "../../store/posts/postsAction";
import { useParams } from "react-router-dom";

const PostEdit = () => {
  const dispatch = useDispatch();
  const { onePost, loading } = useSelector((state) => state.posts);
  console.log(onePost);
  const [editPost, setEditPost] = useState(onePost);
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(getOnePost({ id: onePost }));
  // }, []);

  return (
    <>
      {loading ? (
        <h3>loading</h3>
      ) : (
        <>
          <div className={`w-full h-screen absolute ${styles.bg}`}></div>
          <div className="md:pl-32 w-full h-screen relative flex justify-center items-center overflow-hidden">
            <div className="lg:w-1/2">
              <h3 className="pt-2 pb-4 text-2xl text-center font-semibold">
                Изменить пост
              </h3>
              <div className="sm:flex">
                {/* <div className="w-32 h-32 mx-6 lg:w-1/2 lg:h-1/2">
                  {editPost.image ? (
                    <img
                      className="rounded-lg mx-4"
                      src={editPost.image}
                      alt={editPost.name}
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
                </div> */}
                <div className="flex flex-col lg:w-full">
                  <input
                    className="m-2 p-2 border rounded-lg"
                    type="text"
                    placeholder="Заголовок"
                    onChange={(e) =>
                      setEditPost({ ...onePost, title: e.target.value })
                    }
                  />
                  <textarea
                    className="m-2 p-2 border rounded-lg lg:h-32"
                    type="text"
                    placeholder="Описание"
                    onChange={(e) =>
                      setEditPost({ ...onePost, description: e.target.value })
                    }
                  />
                  {/* <input
                    className="m-2 p-2 border rounded-lg"
                    type="text"
                    placeholder="Фото"
                    onChange={(e) =>
                      setEditPost({ ...onePost, image: e.target.value })
                    }
                  /> */}
                  <input
                    className="m-2 p-2 border rounded-lg"
                    type="numbers"
                    placeholder="Категория"
                    onChange={(e) =>
                      setEditPost({ ...onePost, category: e.target.value })
                    }
                  />
                  <input
                    className="m-2 p-2 border rounded-lg"
                    type="text"
                    placeholder="Цена"
                    onChange={(e) =>
                      setEditPost({ ...onePost, price: e.target.value })
                    }
                  />
                  <button
                    className="m-2 p-2 border rounded-lg bg-blue-400 hover:bg-blue-500"
                    onClick={() => dispatch(editPost({ editPost }))}
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
  );
};

export default PostEdit;
