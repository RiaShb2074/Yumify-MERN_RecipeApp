// src/components/BackHomeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BackHomeButton = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center my-4">
      <button
        className="btn btn-lg btn-outline-warning px-4 py-2 shadow-sm rounded-pill"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default BackHomeButton;
