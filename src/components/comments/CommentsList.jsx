import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { useDispatch, useSelector } from "react-redux";
import { getComments, postComment } from "../../store/comments/commentActions";
import { getOneUser } from "../../store/users/usersActions";


const CommentsList = () => {
  const [show, setShow] = useState(false);
  const [com, setCom] = useState("");
  const { oneUser } = useSelector((state) => state.users);
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser());
    dispatch(getComments());
  }, []);

  function addComment() {
    if (com.trim()) {
      const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
      ];
      const randomIndex = Math.floor(Math.random() * colors.length);

      const randomColor = colors[randomIndex];

      const obj = {
        first_name: oneUser.first_name,
        last_name: oneUser.last_name,
        comment: com,
        userId: oneUser.id,
        likes: [],
        color: randomColor,
        likes: []
      };
      dispatch(postComment(obj));
    }
    setCom("");
  }


  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="w-1/2">
        {!comments? (<p>no</p>): (
            <h1 className="text-gray-700">{comments.length} -  коментариев</h1>
            )}
        </div>
      </div>
      <div className="flex justify-center">
        <input
          onChange={(e) => setCom(e.target.value)}
          value={com}
          onClick={() => setShow(true)}
          type="text"
          placeholder="введите коментарий"
          className="text-gray-500 peer h-8 w-1/2 border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </div>
      <div className="flex justify-center mb-8 ">
        <hr className="w-1/2 h-[2px] bg-gray-400" />
      </div>
      <div className="flex justify-center mb-8 ">
        {show && (
          <div className="w-1/2 flex justify-end">
            <a
              onClick={addComment}
              className="mr-4 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            >
              добавить
            </a>

            <a
              onClick={() => {
                setShow(false);
                setCom("");
              }}
              className="ml-4 inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
            >
              отмена
            </a>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="w-1/2">
          {comments.map((item) => (
            <CommentItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentsList;
