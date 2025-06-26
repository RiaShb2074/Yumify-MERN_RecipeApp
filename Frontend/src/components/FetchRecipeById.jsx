import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const FetchRecipeById = ({ id: propId }) => {
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState(null);

  const { id: routeId } = useParams();
  const id = propId || routeId;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getRecipeById(id);
        setRecipe(res.data.recipe);
      } catch (error) {
        console.error("Error fetching recipe by ID:", error);
      }
    };

    if (id) fetch();
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center text-light mt-5">
        <h4>Loading recipe...</h4>
      </div>
    );
  }

  return (
    <div className="container my-5 text-light">
      <div
  className="card bg-dark text-light shadow-lg mx-auto"
  style={{
    maxWidth: "500px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderRadius: "15px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  }}
>
        <img
          src={recipe.imgurl}
          className="card-img-top"
          alt={recipe.title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h4 className="card-title">{recipe.title}</h4>
          <p><strong>Instruction:</strong> {recipe.ist}</p>
          <ul className="list-group list-group-flush">
            {[1, 2, 3, 4].map((i) =>
              recipe[`ing${i}`] && recipe[`qty${i}`] ? (
                <li
                  key={i}
                  className="list-group-item bg-dark text-white border-0 px-0"
                  style={{ fontSize: "1rem" }}
                >
                  {recipe[`ing${i}`]}: {recipe[`qty${i}`]}
                </li>
              ) : null
            )}
          </ul>


          {/* Show Close button if this is being rendered on a dedicated detail route */}
          {!propId && (
            <div className="text-center mt-4">
              <button className="btn btn-warning" onClick={() => navigate(-1)}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchRecipeById;
