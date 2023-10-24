import React, { useState } from "react";
import { LoginUser } from "../../store/users/usersActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email.trim() && password.trim()) {
      dispatch(LoginUser({ email: email, password: password }));
      setEmail("");
      setPassword("");
    } else {
      alert("empty");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" />
      <input type="text" />
      <button></button>
    </div>
  );
};

export default Login;
