import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="tasks">Tasks List</NavLink>
      <NavLink to="/profile">ProfilePage</NavLink>
      <NavLink to="/create-post">Create Post</NavLink>
    </div>
  );
};

export default Sidebar;
