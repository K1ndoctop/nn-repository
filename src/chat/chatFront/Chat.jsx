import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getOneChatUser } from "../../store/users/usersActions";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:9999");

const Chat = () => {
  const [state, setState] = useState([]);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const socket = io("http://localhost:9999");

  const { search } = useLocation();
  const [params, setParams] = useState(null);

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, []);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      setState((_state) => ({ ..._state, data }));
    });

    // Не забудьте отписаться от события при размонтировании компонента
    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  console.log(users);
  return (
    <div className="h-screen w-1/2 m-auto pt-12">
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
      </div>
      {users &&
        users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              dispatch(getOneChatUser(user.id));
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
