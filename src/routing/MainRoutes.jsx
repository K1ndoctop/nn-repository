import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from '.././pages/HomePage'
import PostCreate from "../components/ribbon/PostCreate";
import PostEdit from "../components/ribbon/PostEdit";
import TasksPage from "../pages/TasksPage/TasksPage";
import TasksCreatePage from "../pages/TasksPage/TasksCreatePage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import TasksDetails from "../components/tasks/TasksDetails/TasksDetails";
import TasksEdit from "../components/tasks/TasksEdit/TasksEdit";
import ProfilePage from "../pages/ProfilePage/ProfilePage";


const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id:2,
      path: '/login',
      element: <Login/>
    },
    {
      id: 4,
      path: "/create-post",
      element: <PostCreate />,
    },
    {
      id: 5,
      path: "/edit-post",
      element: <PostEdit />,
    },
    {
      id: 6,
      path: "/tasks",
      element: <TasksPage />,
    },
    {
      id: 7,
      path: "/tasksCreate",
      element: <TasksCreatePage />,
    },
    {
      id: 8,
      path: "/register",
      element: <Register />,
    },
    {
      id: 10,
      path: "/tasks/:id",
      element: <TasksDetails />,
    },
    {
      id: 11,
      path: "/tasks-edit/:id",
      element: <TasksEdit />,
    },
    {
      id: 12,
      path: "/profile",
      element: <ProfilePage />,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
