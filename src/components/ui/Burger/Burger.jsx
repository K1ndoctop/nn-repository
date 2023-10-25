import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function closeBurgerMenu() {
    setIsMenuOpen(false);
  }
  return (
    <div className="nav">
      <button className="burgerBtn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="burger--square__close">
            <p>X</p>
          </div>
        ) : (
          <div className="burger--square__open">
            <p>&#9776;</p>
          </div>
        )}
      </button>
      {isMenuOpen && (
        <div>
          <Sidebar closeBurgerMenu={closeBurgerMenu} />
          <div className="overlay" onClick={closeBurgerMenu}></div>
        </div>
      )}
    </div>
  );
};

export default Burger;
