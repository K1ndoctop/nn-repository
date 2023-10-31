import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";
import { BiLogOut, BiSolidLogInCircle } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { BsFillFilePersonFill, BsFillChatDotsFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router";
import { checkLogin, logout } from "../../../helpers/functions";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="text-stone-200 flex flex-col">
      <img
        className="mt-2 mb-6"
        src="https://makers.kg/assets/logo_light-86cc27ce.svg"
        alt="logo"
      />
      <div
        className="flex bg-black hover:bg-green-500 m-2 rounded-md p-2 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <AiFillHome className="w-7 h-7 mr-2" />
        <h3 className="text-lg font-normal">Главная</h3>
      </div>
      {/* <div
        className="flex bg-black hover:bg-green-500 m-2 rounded-md p-2 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        <BiSolidLogInCircle className="w-7 h-7 mr-2" />
        <h3 className="text-lg font-normal">Авторизация</h3>
      </div> */}
      <div
        className="flex bg-black hover:bg-green-500 m-2 rounded-md p-2 cursor-pointer"
        onClick={() => navigate("/tasks")}
      >
        <FaListCheck className="w-7 h-7 mr-2" />
        <h3 className="text-lg font-normal">Задания</h3>
      </div>
      <div
        className="flex bg-black hover:bg-green-500 m-2 rounded-md p-2 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        <BsFillFilePersonFill className="w-7 h-7 mr-2" />
        <h3 className="text-lg font-normal">Профиль</h3>
      </div>
      <div
        className="flex bg-black hover:bg-green-500 m-2 rounded-md p-2 cursor-pointer"
        onClick={() => navigate("/chat")}
      >
        <BsFillChatDotsFill className="w-7 h-7 mr-2" />
        <h3 className="text-lg font-normal">Чат</h3>
      </div>
      <div
        className="flex bg-black hover:bg-green-500 m-2 rounded-md p-2 cursor-pointer"
        onClick={() => navigate("/create-post")}
      >
        <IoMdAddCircle className="w-7 h-7 mr-2" />
        <h3 className="text-lg font-normal">Создать пост</h3>
      </div>
      {checkLogin() && (
        <div
          className="flex bg-black hover:bg-green-500 m-2 rounded-md p-2 cursor-pointer"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <BiLogOut className="w-7 h-7 mr-2" />
          <h3 className="text-lg font-normal">Выйти</h3>
        </div>
      )}
      <button
        onClick={() => {
          navigate("/cart");
        }}
        style={{ backgroundColor: "#ffac04" }}
      >
        Оплатита за курс
      </button>
      <NavLink
        onClick={() => {
          navigate("/groups");
        }}
      >
        Группы
      </NavLink>
      {/* <NavLink
        to="/"
        className="text-xl w-28  bg-gray-500 rounded-md text-center"
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className="text-xl w-28 bg-gray-500 rounded-md text-center"
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="text-xl w-28 bg-gray-500 rounded-md text-center"
      >
        Register
      </NavLink>
      <NavLink
        to="tasks"
        className="text-xl w-28 bg-gray-500 rounded-md text-center"
      >
        Tasks List
      </NavLink>
      <NavLink
        to="/profile"
        className="text-xl w-28 bg-gray-500 rounded-md text-center"
      >
        ProfilePage
      </NavLink>
      <NavLink
        to="/create-post"
        className="text-xl w-28 bg-gray-500 rounded-md text-center"
      >
        Create Post
      </NavLink> */}
    </div>
  );
};

export default Sidebar;
