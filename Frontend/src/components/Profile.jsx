import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/App_Context';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { user, fetchUserRecipes, deleteRecipeById } = useContext(AppContext);
  const [localRecipes, setLocalRecipes] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const loadRecipes = async () => {
      const recipes = await fetchUserRecipes(); // We'll update this function to return data
      if (recipes) setLocalRecipes(recipes);
    };

    if (user) loadRecipes();
  }, [user]);

  const badgeColors = {
    Indian: "warning",
    Italian: "success",
    Chinese: "danger",
    Vegan: "info",
    Thai: "primary",
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteRecipeById(id);
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
        transition: Bounce,
      });
      // Update local state to remove deleted recipe
      setLocalRecipes(prev => prev.filter(recipe => recipe._id !== id));
    } catch (error) {
      toast.error("Failed to delete recipe", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  if (!user) return null;

  return (
    <>
      <ToastContainer />
      <div
        className="min-vh-100 d-flex flex-column align-items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512058564366-c9e2f1db59d0')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />
        <div className="container text-center text-white my-5" style={{ zIndex: 2 }}>
          <h1>Welcome {user?.name} to Yumystic Recipe App</h1>
          <h3>Your journey to delicious discovery starts here!</h3>
        </div>

        <div className="container mb-5" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            {localRecipes && localRecipes.length > 0 ? (
              localRecipes.map((data) => (
                <div key={data._id} className="col-md-4 col-sm-6 col-10 my-3">
                  <div
                    className="card bg-dark text-white h-100 shadow-lg"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <div className="position-relative">
                      <img
                        src={data.imgurl}
                        className="card-img-top"
                        alt={data.title}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      {data.cuisine && (
                        <span
                          className={`badge bg-${badgeColors[data.cuisine] || "secondary"} position-absolute top-0 start-0 m-2`}
                        >
                          {data.cuisine}
                        </span>
                      )}
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{data.title}</h5>
                      <div className="d-flex justify-content-between mt-3">
                        <button
                          className="btn btn-outline-warning rounded-pill px-3"
                          onClick={() => navigate(`/recipe/${data._id}`)}

                        >
                          View More
                        </button>
                        <button
                          className="btn btn-outline-danger rounded-pill px-3"
                          onClick={() => {
                            const confirmDelete = window.confirm(`Are you sure you want to delete "${data.title}"?`);
                            if (confirmDelete) handleDelete(data._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4 className="text-white text-center">No recipes found!</h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
