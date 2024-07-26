import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home() {
  return (
    <div className="container mt-5">
      <header className="header">
        <h1>Welcome to the Placement Management System</h1>
      </header>
      <div className="button-container">
        <Link className="btn" to="/add">
          Add Student
        </Link>
        <Link className="btn" to="/list">
          View Students
        </Link>
      </div>
      <button className="go-back-btn" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
}

export default Home;
