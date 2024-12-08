import React from "react";

function UserDashboard({ user, onLogout }) {
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
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "60px 20px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#202020",
        }}>
        <h1 style={{ color: "#ffffff" }}>Welcome, {user.username}</h1>
        <h3 style={{ color: "#ffffff" }}>Role: {user.role}</h3>
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
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
