import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/defaultStyle.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import './App.css'
import Card from "./components/Card";
import Dashboard from "./pages/HomePage";
const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} />
          <Route path="card" element={<Card />} />
          <Route path="dash" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
