import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(login({ username, password }));
    setUsername("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{auth.message}</p>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={e => {
          setUsername(e.target.value);
        }}
        required
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        required
      ></input>
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
