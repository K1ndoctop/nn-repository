import React, { useEffect } from "react";
import StudentsTasks from "../../components/studentsTasks/StudentsTasks";
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOneUser } from "../../store/users/usersActions";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { oneUser, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser());
  }, []);
  return (
    <>
      <Sidebar />
      <div
        style={{ height: "100%", paddingBottom: "100px" }}
        className="w-11/12 mx-auto h-screen"
      >
        <div>
          <div
            style={{
              paddingTop: "100px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            className="usersCont"
          >
            <div
              style={{ height: "250px", width: "250px", borderRadius: "100%" }}
              className="users--photo"
            >
              <img
                src={oneUser.image}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div style={{ fontSize: "24px" }} className="users--descr">
              <p>Name: {oneUser.first_name}</p>
              <p>Surname: {oneUser.last_name}</p>
              <p>Email: {oneUser.email}</p>
              <p>
                KPI: {oneUser.KPI}{" "}
                <button
                  style={{ color: "red" }}
                  onClick={() => navigate("/editKPI")}
                >
                  изменить
                </button>
              </p>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <StudentsTasks />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
