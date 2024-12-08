import React, { useState } from "react";
import LoginPage from "./LoginPage";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import './App.css';

const initialUsers = [
  { username: "admin", password: "admin123", role: "Admin" },
  { username: "user", password: "user123", role: "User" },
];

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);

  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setLoggedInUser(user);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
  };

  return (
    <div>
      {!loggedInUser ? (
        <LoginPage onLogin={handleLogin} />
      ) : loggedInUser.role === "Admin" ? (
        <AdminDashboard
          users={users}
          onAddUser={handleAddUser}
          onDeleteUser={handleDeleteUser}
          onLogout={handleLogout}
        />
      ) : (
        <UserDashboard user={loggedInUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;

