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
import ResetPassword from "../components/auth/ResetPassword";
import VotingPage from "../pages/ProfilePage/VotingPage";
import Cart from "../components/cart/Cart";
import ChatPage from "../pages/ChatPage";
import ChatPeople from "../chat/chatFront/ChatPeople";
import GroupPage from "../pages/GroupPage/GroupPage";
import Rating from "../components/groups/rating/Rating";
import Voting from "../components/groups/voting/Voting";
import CreateVoting from "../components/groups/voting/CreateVoting/CreateVoting";
import EditKPI from "../components/editKPI/EditKPI";

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
      id: 14,
      path: "/reset",
      element: <ResetPassword />,
    },
    {
      id: 15,
      path: "/voting",
      element: <VotingPage />,
    },
    {
    id:16,
      path: "/cart",
      element: <Cart />,
    },
    {
      id: 17,
      path: "/chat",
      element: <ChatPage />,
    },
    {
      id: 18,
      path: "/chat/:id",
      element: <ChatPeople />,
    },
    {

      id: 19,
      path: "/group",
      element: <GroupPage />,
    },
    {
      id: 20,
      path: "/rating",
      element: <Rating />,
    },
    {
      id: 21,
      path: "/voting",
      element: <Voting />,
    },
    {
      id: 22,
      path: "/createVoting",
      element: <CreateVoting />,
    },
    {
      id: 20,
      path: "/editKPI",
      element: <EditKPI />,
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
