import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Detail = () => {
  const { id } = useParams();
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await getRecipeById(id);
        if (res.data && res.data.recipe) {
          setRecipe(res.data.recipe);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
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
      <div className="card bg-dark text-light shadow-lg mx-auto" style={{ maxWidth: 600 }}>
        <img
          src={recipe.imgurl}
          className="card-img-top"
          alt={recipe.title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h4 className="card-title">{recipe.title}</h4>
          <p><strong>Instruction:</strong> {recipe.ist}</p>

          <div className="mt-3">
  <h5 className="mb-3">Ingredients:</h5>
  {[1, 2, 3, 4].map((i) => {
    const ing = recipe[`ing${i}`];
    const qty = recipe[`qty${i}`];
    return ing && qty ? (
      <p key={i} style={{ color: "white", margin: "0.3rem 0" }}>
        • {ing}: {qty}
      </p>
    ) : null;
  })}
</div>


          <div className="text-center mt-4">
            <button className="btn btn-warning" onClick={() => navigate(-1)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
