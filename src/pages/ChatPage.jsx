import React from "react";
import Burger from "../components/ui/Burger/Burger";
import Chat from "../chat/chatFront/Chat";
import Sidebar from "../components/ui/Sidebar/Sidebar";

const ChatPage = () => {
  return (
    <div>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default ChatPage;
