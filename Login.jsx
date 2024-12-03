
import "./App.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleLogin = (e) => {
    e.preventDefault();
   
    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }
    if (username === "kshitij" && password === "kshitij620") {
      navigate("/TodoList");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>To-doList Login</h1>
      <hr style={{border: "2px solid black"}}></hr>
      <br></br>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            label="Enter username"
            variant="outlined"
            color="secondary"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            label="Enter Password"
            variant="outlined"
            type="password"
            color="secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          color="secondary"
          variant="outlined"
          sx={{ height: 40, width: 100, fontSize: 16 }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
