import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import TasksCreatePage from "../pages/TasksPage/TasksCreatePage";
import TasksPage from "../pages/TasksPage/TasksPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="tasks" element={<TasksPage />} />
      <Route path="/tasksCreate" element={<TasksCreatePage />} />
    </Routes>
  );
};

export default MainRoutes;