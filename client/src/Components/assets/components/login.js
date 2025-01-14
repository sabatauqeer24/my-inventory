import "./signup.css";
//packages
import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //credentials
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/myInventory/login",
        { username, password },
        { withCredentials: true }
      );
      // const { userId } = response.data;
      // sessionStorage.setItem("userID", userId);
      console.log(response.data, "this is res");
    } catch (error) {
      console.log("Error with protected request:", error);
    }
  };

  return (
    //login form
    <div>
      <div className="logo">my Inventory</div>
      <form className="form" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form__input"
          id="username"
          autoComplete="off"
        />
        <label htmlFor="username" className="form__label">
          Username
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form__input"
          id="password"
          autoComplete="off"
        />
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </form>
      <div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};
export default Login;
