import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { Dashboard, Home } from "./pages";

import "./app.scss";

const App = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const localEmail = localStorage.getItem("email");

    if (localEmail) {
      navigate("/dashboard");
      return;
    }
    navigate("/");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
