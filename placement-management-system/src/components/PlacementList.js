import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./PlacementList.css";

function PlacementList() {
  const [placements, setPlacements] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/placements");
        setPlacements(response.data);
      } catch (error) {
        console.error("There was an error fetching the placements!", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/placements/${id}`);
      setPlacements(placements.filter((p) => p.id !== id));
    } catch (error) {
      console.error("There was an error deleting the placement!", error);
    }
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="placement-list-container">
      <header className="placement-list-header">
        <h1>STUDENT PLACEMENT LIST</h1>
      </header>
      <div className="card-container">
        {placements.map((placement) => (
          <div key={placement.id} className="placement-card">
            <h2>{placement.name}</h2>
            <p>
              <strong>Qualification:</strong> {placement.qualification}
            </p>
            <p>
              <strong>Year:</strong> {placement.year}
            </p>
            <p>
              <strong>Company:</strong> {placement.company}
            </p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(placement.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="btn-donate go-back-btn" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}

export default PlacementList;
