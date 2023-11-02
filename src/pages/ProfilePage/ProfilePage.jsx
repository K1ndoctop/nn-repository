import React from "react";
import StudentsTasks from "../../components/studentsTasks/StudentsTasks";
import Burger from "../../components/ui/Burger/Burger";
import Sidebar from "../../components/ui/Sidebar/Sidebar";

const ProfilePage = () => {
  return (
    <div>
      <Sidebar />
      <StudentsTasks />
    </div>
  );
};

export default ProfilePage;
