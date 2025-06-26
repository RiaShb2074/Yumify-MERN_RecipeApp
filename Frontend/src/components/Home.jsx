import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const { recipe, savedRecipeById } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    if (recipe.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipe.length);
      setFeatured(recipe[randomIndex]);
    }
  }, [recipe]);

  const saved = async (id) => {
    const result = await savedRecipeById(id);
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
      transition: Bounce,
    });
  };

  const filtered = recipe.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const badgeColors = {
    Indian: "warning",
    Italian: "success",
    Chinese: "danger",
    Vegan: "info",
    Thai: "primary",
  };

  return (
    <>
      <ToastContainer />

      {/* 🌅 Hero Banner */}
      <div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-4 fw-bold">🍽️ Discover Global Flavors with Yumify!</h1>
          <p className="lead">Save, Explore, & Share your favorite dishes</p>
          <button
            className="btn btn-warning btn-lg mt-3"
            onClick={() => navigate("/add")}
          >
            + Add Your Recipe
          </button>
        </div>
      </div>

      {/* 🔍 Search */}
      <div className="container my-4">
        <input
          type="text"
          className="form-control form-control-sm shadow-sm"
          placeholder="🔍 Search for recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 💬 Testimonials */}
      <div className="container mb-4">
        <h5 className="text-light text-center mb-3">💬 What Our Users Say</h5>
        <div className="row g-3 justify-content-center">
          {[
            {
              name: "Marco",
              country: "🇮🇹",
              quote: `"This app helped me discover flavors I never knew existed!"`,
              avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Chef Mike",
              country: "🇺🇸",
              quote: `"Easy to use and packed with deliciousness!"`,
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Lina",
              country: "🇲🇽",
              quote: `"Finally a platform where I can share my grandma's recipes!"`,
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
          ].map((user, idx) => (
            <div key={idx} className="col-md-4">
              <div
                className="d-flex align-items-start bg-light rounded shadow-sm p-3 h-100"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="rounded-circle me-3"
                  style={{ width: "48px", height: "48px", objectFit: "cover" }}
                />
                <div>
                  <p className="mb-1 small text-dark fst-italic">{user.quote}</p>
                  <small className="text-muted">
                    — {user.name} {user.country}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 Featured Recipe */}
      {featured && (
        <div className="container mb-5">
          <h3 className="text-light text-center mb-4">🌟 Featured Recipe of the Day</h3>
          <div
            className="card bg-dark text-light shadow-lg mx-auto"
            style={{ maxWidth: 600 }}
          >
            <img
              src={featured.imgurl}
              className="card-img-top"
              alt={featured.title}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h4 className="card-title">{featured.title}</h4>
              {featured.cuisine && (
                <span
                  className={`badge bg-${
                    badgeColors[featured.cuisine] || "secondary"
                  } mb-2`}
                >
                  {featured.cuisine}
                </span>
              )}
              <p className="card-text mt-2">
                <button
                  className="btn btn-outline-danger me-2"
                  onClick={() => saved(featured._id)}
                >
                  Save
                </button>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => navigate(`/recipe/${featured._id}`)}

                >
                  View Recipe
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🥘 Recipes */}
      <div className="container my-5">
        <h2 className="text-center text-light mb-4">✨ All Recipes</h2>

        {filtered.length === 0 ? (
          <div className="alert alert-info text-center">
            No recipes found. Try searching or add a new one!
          </div>
        ) : (
          <div className="row justify-content-center">
            {filtered.map((data, index) => (
              <div key={data._id} className="col-md-4 col-lg-3 my-3">
                <div
                  className="card bg-dark text-light shadow-lg h-100"
                  style={{ transition: "transform 0.3s", borderRadius: "15px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div className="position-relative">
                    <img
                      src={data.imgurl}
                      className="card-img-top"
                      alt={data.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                      }}
                    />
                    {/* 🏷️ Cuisine */}
                    {data.cuisine && (
                      <span
                        className={`badge bg-${
                          badgeColors[data.cuisine] || "secondary"
                        } position-absolute top-0 start-0 m-2`}
                      >
                        {data.cuisine}
                      </span>
                    )}
                    {/* 🆕 New Badge */}
                    {index < 3 && (
                      <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{data.title}</h5>
                    <div className="my-3 d-flex justify-content-between px-2">
                      <button
                        className="btn btn-outline-danger rounded-pill px-4"
                        onClick={() => saved(data._id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-outline-warning rounded-pill px-4"
                        onClick={() => navigate(`/recipe/${data._id}`)}

                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
