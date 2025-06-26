import React, { useState } from "react";
import recipes from "../data/recipes";

const Explore = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const cuisines = ["All", "Indian", "Chinese", "Japanese", "Thai", "Italian", "Mexican", "American"];

  const filtered = recipes.filter((r) => {
    const matchesCuisine = selectedCuisine === "All" || r.cuisine === selectedCuisine;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Explore Recipes by Cuisine</h2>

      {/* Cuisine Filter Buttons */}
      <div className="mb-3 text-center">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className={`btn btn-${selectedCuisine === cuisine ? "light" : "outline-light"} mx-1`}
            onClick={() => setSelectedCuisine(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Search Bar BELOW cuisine buttons */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control"
          style={{
            maxWidth: "600px",
            height: "36px",
            fontSize: "14px",
            padding: "5px 12px",
            marginTop: "10px",
            display: "inline-block"
          }}
        />
      </div>

      {/* Recipe Cards */}
      <div className="row">
        {filtered.length === 0 ? (
          <p className="text-center text-muted">No recipes found.</p>
        ) : (
          filtered.map((recipe) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={recipe.id}>
              <div
                className="card h-100 recipe-card text-white bg-dark shadow-sm"
                style={{ cursor: "pointer", transition: "0.3s", fontSize: "14px" }}
                onClick={() => openModal(recipe)}
              >
                <img
                  src={recipe.imgurl}
                  className="card-img-top"
                  alt={recipe.title}
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body text-center p-2">
                  <h6 className="card-title mb-1" style={{ fontSize: "16px" }}>{recipe.title}</h6>
                  <p className="card-text mb-0">
                    <small className="text-muted" style={{ fontSize: "12px" }}>
                      {recipe.cuisine} Cuisine
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Popup */}
      {showModal && selectedRecipe && (
        <div
          className="modal d-block fade show"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1050 }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRecipe.title}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
              </div>
              <div className="modal-body row">
                <div className="col-md-6">
                  <img
                    src={selectedRecipe.imgurl}
                    alt={selectedRecipe.title}
                    className="img-fluid rounded"
                    style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="col-md-6">
                  <h6><strong>Instructions:</strong></h6>
                  <p style={{ fontSize: "14px" }}>{selectedRecipe.instruction}</p>

                  <h6 className="mt-3"><strong>Ingredients:</strong></h6>
                  <ul style={{ fontSize: "14px", paddingLeft: "20px" }}>
                    {selectedRecipe.ingredients.map((ing, idx) => (
                      <li key={idx}>
                        {ing.name}: {ing.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-light" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style>
        {`
          .recipe-card:hover {
            transform: scale(1.03);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Explore;
