import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getOneChatUser } from "../../store/users/usersActions";
import { Link, useNavigate } from "react-router-dom";
import { addUserChat } from "../../store/chat/chatAction";

// const FIELD = {
//   NAME: "username",
//   ROOM: "room",
// };

const Chat = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { NAME, ROOM } = FIELD;
  // const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  // const handleChange = (event) => {
  //   const { value, name } = event.target;
  //   setValues({ ...values, [name]: value });
  // };

  // const handleClick = (e) => {
  //   const isDisabled = Object.values(values).some((value) => !value);
  //   if (isDisabled) e.preventDefault();
  // };

  return (
    <div className="h-screen w-1/2 m-auto pt-20">
      <div className="flex justify-center">
        <button
          variant="contained"
          className=" border-blue-500 border-2  text-black w-60 h-12 rounded-xl hover:bg-blue-500 hover:text-white hover:duration-700 mr-1"
        >
          New chat
        </button>
        <button
          variant="contained"
          className=" border-blue-500 border-2  text-black w-60 h-12 rounded-xl hover:bg-blue-500 hover:text-white hover:duration-700 mr-1"
        >
          History
        </button>
        <button
          variant="contained"
          className=" border-blue-500 border-2  text-black w-60 h-12 rounded-xl hover:bg-blue-500 hover:text-white hover:duration-700 mr-1"
        >
          {users.groups}
        </button>
        <input type="name" />
        <input type="room" />
      </div>
      {users &&
        users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              dispatch(getOneChatUser(user.id));
              dispatch(addUserChat(user));
              navigate(`/chat/${user.id}`);
            }}
            className="m-4 border-blue-500 border-2 hover:bg-blue-500 hover:text-white hover:duration-700 rounded-xl p-4"
          >
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.groups}</p>
          </div>
        ))}
    </div>
  );
};

export default Chat;
