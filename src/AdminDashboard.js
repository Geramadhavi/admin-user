import React, { useState } from "react";

function AdminDashboard({ users, onAddUser, onDeleteUser, onLogout }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("");

  const handleAddUser = () => {
    if (newUsername && newPassword && newRole) {
      onAddUser({
        username: newUsername,
        password: newPassword,
        role: newRole,
      });
      setNewUsername("");
      setNewPassword("");
      setNewRole("");
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000",
    }}
    >
      <h1 style={{
          color: "#ffffff",
        }} >Admin Dashboard</h1>
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "60px 20px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#202020",
        }} >
        <h3 style={{
          color: "#ffffff",
        }}>Add New User</h3>
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
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
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
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <select 
        style={{
          fontSize: "15px",
          height: "40px",
          border: "1px solid #6366f1",
          backgroundColor: "transparent",
          color: "#ffffff",
          borderRadius: "2px",
          marginTop: "5px",
          outline: "none",
        }} value={newRole} onChange={(e) => setNewRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="Admin" style={{color:"#000000"}}>Admin</option>
          <option value="User" style={{color:"#000000"}}>User</option>
        </select>
        <button style={{
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
          }} onClick={handleAddUser}>Add User</button>
      </div>
      <h3 style={{ color:"#ffffff",}}>Users List</h3>
      <ul style={{ color:"#ffffff",}}>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} ({user.role})
            {user.role !== "Admin" && (
              <button style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#ffffff",
                height: "40px",
                width: "100",
                marginTop: "20px",
                marginBottom: "2px",
                marginLeft:"10px",
                backgroundColor: "#4f46e5",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                cursor: "pointer",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}onClick={() => onDeleteUser(user.username)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
      <button style={{
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
          }} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
