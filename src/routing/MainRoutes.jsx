import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import PostEdit from "../components/ribbon/PostEdit";
import TasksPage from "../pages/TasksPage/TasksPage";
import TasksCreatePage from "../pages/TasksPage/TasksCreatePage";
import PostCreatePage from "../pages/PostCreatePage";
import TasksDetails from "../components/tasks/TasksDetails/TasksDetails";
import TasksEdit from "../components/tasks/TasksEdit/TasksEdit";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Cart from "../components/cart/Cart";
import ChatPage from "../pages/ChatPage";
import ChatPeople from "../chat/chatFront/ChatPeople";
import GroupPage from "../pages/GroupPage/GroupPage";
import Rating from "../components/groups/rating/Rating";
import Voting from "../components/groups/voting/Voting";
import CreateVoting from "../components/groups/voting/CreateVoting/CreateVoting";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <RegisterPage />,
    },
    {
      id: 2,
      path: "/login",
      element: <LoginPage />,
    },
    {
      id: 4,
      path: "/create-post",
      element: <PostCreatePage />,
    },
    {
      id: 5,
      path: "/edit-post/:id",
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
      path: "/home",
      element: <HomePage />,
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
    {
      id: 13,
      path: "/cart",
      element: <Cart />,
    },
    {
      id: 14,
      path: "/chat",
      element: <ChatPage />,
    },
    {
      id: 15,
      path: "/chat/:id",
      element: <ChatPeople />,
    },
    {
      id: 16,
      path: "/group",
      element: <GroupPage />,
    },
    {
      id: 17,
      path: "/rating",
      element: <Rating />,
    },
    {
      id: 18,
      path: "/voting",
      element: <Voting />,
    },
    {
      id: 19,
      path: "/createVoting",
      element: <CreateVoting />,
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
