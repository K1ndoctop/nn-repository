import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/create-post">Create Post</NavLink>
      <NavLink to="/tasks">Tasks List</NavLink>
    </div>
  );
};

export default Navbar;
