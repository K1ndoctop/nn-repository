import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/users/usersActions";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "d",
      lastname: "d",
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "1-570-236-7033",
  });

  const postUser = () => {
    dispatch(addUser({ user: user }));
    setUser({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    });
  };

  return (
    <div>
      <h1>register user</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={postUser()}>add</button>
    </div>
  );
};

export default RegisterPage;
