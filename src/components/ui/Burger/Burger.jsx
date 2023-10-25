import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AiFillHome } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { BsFillFilePersonFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router";

const Burger = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function closeBurgerMenu() {
    setIsMenuOpen(false);
  }
  return (
    <div className="fixed z-20 bg-[#00000080] h-full p-5">
      <button className="burgerBtn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="burger--square__close">
            <p className=" font-bold">X</p>
          </div>
        ) : (
          <div className="burger--square__open">
            <p className=" font-bold ml-2 mb-3">&#9776;</p>
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
          <div onClick={() => navigate('/')}>
            <AiFillHome  className="w-7 h-7"/>
          </div>
          <div onClick={() => navigate('/login')}>
            <BiSolidLogInCircle  className="w-7 h-7"/>
          </div>
          <div onClick={() => navigate('/register')}>
            <FaRegistered className="w-7 h-7" />
          </div>
          <div onClick={() => navigate('/tasks')}>
            <FaListCheck  className="w-7 h-7"/>
          </div>
          <div onClick={() => navigate('/profile')}>
            <BsFillFilePersonFill className="w-7 h-7"/>
          </div>
          <div onClick={() => navigate('/create-post')}>
            <IoMdAddCircle className="w-7 h-7" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;
