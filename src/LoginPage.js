import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        height: "100vh",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
        }}
      >
        Login
      </h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "60px 20px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#202020",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              marginBottom: "0px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#ffffff",
              textAlign: "center",
              padding: "10px",
            }}
            htmlFor="username"
          >
            USERNAME
          </label>
          <input
            style={{
              fontSize: "15px",
              height: "40px",
              border: "1px solid #6366f1",
              backgroundColor: "transparent",
              color: "#ffffff",
              borderRadius: "2px",
              marginTop: "5px",
              outline: "none",
            }}
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              marginBottom: "0px",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#ffffff",
              textAlign: "center",
              padding: "10px",
            }}
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input
            style={{
              fontSize: "15px",
              height: "40px",
              border: "1px solid #6366f1",
              backgroundColor: "transparent",
              color: "#ffffff",
              borderRadius: "2px",
              marginTop: "5px",
              outline: "none",
            }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#ffffff",
            height: "40px",
            width: "100",
            marginTop: "20px",
            marginBottom: "2px",
            backgroundColor: "#4f46e5",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            cursor: "pointer",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
