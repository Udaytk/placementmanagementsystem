import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";
import PlacementForm from "./components/PlacementForm";
import PlacementList from "./components/PlacementList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<PlacementForm />} />
        <Route path="/list" element={<PlacementList />} />
      </Routes>
    </Router>
  );
}

export default App;
