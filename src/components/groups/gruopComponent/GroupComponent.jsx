import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers, getOneUser } from "../../../store/users/usersActions";
import { useNavigate } from "react-router-dom";

const GroupComponent = () => {
  const dispatch = useDispatch();
  const { oneUser, loading } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const [user, setUser] = useState([]);
  const [group, setGroups] = useState(["JS-35", "JS-36"]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneUser());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (users) {
      setUser(users);
    }
  }, [users]);

  return (
    <div className="students--group" style={{ width: "100%" }}>
      <div>
        <h1 style={{ width: "96%", textAlign: "center", fontSize: "36px" }}>
          {oneUser.groups}
        </h1>
        <div
          style={{
            width: "100%",
            margin: "20px auto",
            display: "flex",
            gap: "5%",
            flexWrap: "wrap",
          }}
        >
          {user.map((item) => {
            if (oneUser.groups === item.groups) {
              return (
                <div
                  onClick={() => navigate("/profile")}
                  style={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.first_name}
                      style={{
                        borderRadius: "20px",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  <div>
                    <p>{item.first_name}</p>
                    <p>{item.last_name}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
