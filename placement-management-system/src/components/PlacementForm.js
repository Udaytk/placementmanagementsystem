import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PlacementForm.css"; // Import the CSS file

function PlacementForm() {
  const [placement, setPlacement] = useState({
    id: "",
    name: "",
    date: "",
    qualification: "",
    year: "",
    company: "", // New field
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlacement({ ...placement, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/placements", placement);
      alert("Placement added successfully");
      navigate(-1);
    } catch (error) {
      console.error("There was an error adding the placement!", error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5">
      <header className="header">
        <h2>ADD STUDENTS</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          className="form-control my-2"
          placeholder="ID"
          value={placement.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          className="form-control my-2"
          placeholder="Name"
          value={placement.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="form-control my-2"
          value={placement.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="qualification"
          className="form-control my-2"
          placeholder="Qualification"
          value={placement.qualification}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          className="form-control my-2"
          placeholder="Year"
          value={placement.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          className="form-control my-2"
          placeholder="Company"
          value={placement.company}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
      <button className="btn btn-secondary mt-3" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default PlacementForm;
