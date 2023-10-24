import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/users/usersActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const postUser = () => {
    dispatch(
      registerUser({
        email: email,
        password: password,
        password_confirm: passwordConfirm,
      })
    );
    setPasswordConfirm("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div>
      <h1>register user</h1>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="text"
        placeholder="password_confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        value={passwordConfirm}
      />
      <button onClick={postUser}>add</button>
    </div>
  );
};

export default Register;
