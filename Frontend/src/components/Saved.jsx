import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";

const Saved = () => {
  const { savedRecipe, isAuthenticated } = useContext(AppContext);

  if (!isAuthenticated) {
    return (
      <div className="text-center text-light mt-5">
        <h4>Please login to view your saved recipes</h4>
      </div>
    );
  }

  if (!savedRecipe || savedRecipe.length === 0) {
    return (
      <div className="text-center text-light mt-5">
        <h4>No saved recipes found</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {savedRecipe.map((recipe, index) => (
  <div className="col-md-4 col-sm-6 mb-4" key={recipe._id || index}>
    <FetchRecipeById id={recipe._id} />
  </div>
))}

      </div>
    </div>
  );
};

export default Saved;
