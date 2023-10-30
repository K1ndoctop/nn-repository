import React, { useEffect } from "react";
import Burger from "../../components/ui/Burger/Burger";
import Chat from "./Chat";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneChatUser } from "../../store/users/usersActions";

const ChatPeople = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { oneChat, users } = useSelector((state) => state.users);

  //   useEffect(() => {
  //     dispatch(getOneChatUser(id));
  //   }, []);
  return (
    <>
      <Burger />
      <div className="w-3/4 h-screen relative">
        <div className="bg-slate-700 w-full h-4/5 flex absolute top-16 left-72 rounded-lg">
          <div className="w-1/5 border-r border-red-500">
            {users &&
              users.map((user) => (
                <div
                  key={user.id}
                  onClick={() => {
                    dispatch(getOneChatUser(user.id));
                    navigate(`/chat/${user.id}`);
                  }}
                  className="m-4 border-blue-500 border-2 hover:bg-blue-500 hover:text-white hover:duration-700 rounded-xl p-2"
                >
                  <h3>
                    {user.first_name} {user.last_name}
                  </h3>
                  <p>{user.groups}</p>
                </div>
              ))}
          </div>
          {oneChat && (
            <div className="pl-4 w-full h-12 bg-red-700 text-2xl font-normal flex items-center">
              <h3 className="ml-6">
                {oneChat.first_name} {oneChat.last_name}
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatPeople;
