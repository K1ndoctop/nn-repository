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
import Burger from "../Burger/Burger";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="text-stone-200 flex bg-black/75 justify-between items-center fixed w-full p-1">
      <img
        className="m-4"
        src="https://makers.kg/assets/logo_light-86cc27ce.svg"
        alt="logo"
      />
      <div className="flex justify-around items-center max-lg:hidden">
        <div
          className="flex  m-2 rounded-md p-2 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <h3 className="text-lg font-normal">Главная</h3>
        </div>
        <div
          className="flex  m-2 rounded-md p-2 cursor-pointer"
          onClick={() => navigate("/tasks")}
        >
          <h3 className="text-lg font-normal">Задания</h3>
        </div>
        <div
          className="flex  m-2 rounded-md p-2 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <h3 className="text-lg font-normal">Профиль</h3>
        </div>
        <div
          className="flex  m-2 rounded-md p-2 cursor-pointer"
          onClick={() => navigate("/chat")}
        >
          <h3 className="text-lg font-normal">Чат</h3>
        </div>
        <div
          className="flex  m-2 rounded-md p-2 cursor-pointer"
          onClick={() => navigate("/create-post")}
        >
          <h3 className="text-lg font-normal">Создать пост</h3>
        </div>
        {checkLogin() && (
          <div
            className="flex  m-2 rounded-md p-2 cursor-pointer"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            <h3 className="text-lg font-normal">Выйти</h3>
          </div>
        )}
        <div
          onClick={() => {
            navigate("/cart");
          }}
          className="flex  m-2 rounded-md p-2 cursor-pointer"
        >
          <button className="text-lg font-normal">Оплатита за курс</button>
        </div>
        <NavLink
          onClick={() => {
            navigate("/groups");
          }}
          className="text-lg font-normal"
        >
          Группы
        </NavLink>
      </div>
      <div className="lg:hidden">
        <Burger/>
      </div>
    </div>
  );
};

export default Sidebar;
