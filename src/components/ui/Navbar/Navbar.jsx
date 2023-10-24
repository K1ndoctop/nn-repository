import React from "react";
import { NavLink } from "react-router-dom";
import { checkLogin, logout } from "../../../helpers/functions";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/">Home</NavLink>
      {checkLogin() ? (
        <NavLink to="/" onClick={logout()}>
          logout
        </NavLink>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      <NavLink to="/create-post">Create Post</NavLink>
      <NavLink to="/tasks">Tasks List</NavLink>
    </div>
  );
};

export default Navbar;
