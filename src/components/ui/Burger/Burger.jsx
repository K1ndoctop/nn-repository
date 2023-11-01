import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AiFillHome } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { BsFillFilePersonFill, BsFillChatDotsFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router";
import { checkLogin, logout } from "../../../helpers/functions";

const Burger = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function closeBurgerMenu() {
    setIsMenuOpen(false);
  }
  return (
    <div className=" z-20  h-full p-5 text-stone-200">
      <button className="burgerBtn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="burger--square__close cursor-pointer">
            <p className="font-bold text-3xl">X</p>
          </div>
        ) : (
          <div className="burger--square__open flex cursor-pointer">
            <p className=" font-bold text-3xl">&#9776;</p>
          </div>
        )}
      </button>
      {isMenuOpen && (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Burger;
