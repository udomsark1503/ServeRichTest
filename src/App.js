import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const PrivateHome = () => {
    const isAuthenticated = sessionStorage.getItem('username');
    return isAuthenticated ? <Home /> : <Navigate to="/" replace /> };
    return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<PrivateHome />} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;