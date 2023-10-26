import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AiFillHome } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { BsFillFilePersonFill } from "react-icons/bs";
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
    <div className="fixed z-20 bg-[#000000a0] h-full p-5 text-stone-200">
      <button className="burgerBtn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="burger--square__close">
            <p className="font-bold text-3xl">X</p>
          </div>
        ) : (
          <div className="burger--square__open flex">
            <p className=" font-bold ml-2 mb-3 text-3xl">&#9776;</p>
          </div>
        )}
      </button>
      {isMenuOpen && (
        <div>
          <Sidebar closeBurgerMenu={closeBurgerMenu} />
          <div className="overlay" onClick={closeBurgerMenu}></div>
        </div>
      )}
      {!isMenuOpen && (
        <div className="flex flex-col h-1/4 justify-between">
          {/* <div onClick={() => navigate("/")}>
          <AiFillHome className="w-10 h-10 my-2" />
        </div> */}
          {/* <div onClick={() => navigate("/login")}>
            <BiLogIn className="w-10 h-10 my-2" />
          </div> */}
          <div onClick={() => navigate("/home")}>
            <AiFillHome className="w-10 h-10 my-2" />
          </div>
          <div onClick={() => navigate("/tasks")}>
            <FaListCheck className="w-10 h-10 my-2" />
          </div>
          <div onClick={() => navigate("/profile")}>
            <BsFillFilePersonFill className="w-10 h-10 my-2" />
          </div>
          <div onClick={() => navigate("/create-post")}>
            <IoMdAddCircle className="w-10 h-10 my-2" />
          </div>
          {checkLogin() && (
            <div
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              <BiLogOut className="w-10 h-10 my-2" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Burger;
