import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="mt-10 ">
      <NavLink to="/" className="text-xl w-28  bg-gray-500 rounded-md text-center">Home</NavLink>
      <NavLink to="/login" className="text-xl w-28 bg-gray-500 rounded-md text-center">Login</NavLink>
      <NavLink to="/register" className="text-xl w-28 bg-gray-500 rounded-md text-center">Register</NavLink>
      <NavLink to="tasks" className="text-xl w-28 bg-gray-500 rounded-md text-center">Tasks List</NavLink>
      <NavLink to="/profile" className="text-xl w-28 bg-gray-500 rounded-md text-center">ProfilePage</NavLink>
      <NavLink to="/create-post" className="text-xl w-28 bg-gray-500 rounded-md text-center">Create Post</NavLink>
    </div>
  );
};

export default Sidebar;
