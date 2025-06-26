import React, { useEffect, useState } from "react";
import { AppContext } from "./App_Context";
import axios from "axios";

const App_State = (props) => {
  const url = import.meta.env.VITE_API_URL;
  const [token, setToken] = useState("");
  const [recipe, setrecipe] = useState([]);
  const [savedRecipe, setsavedRecipe] = useState([]);
  const [user, setuser] = useState(null);
  const [userId, setuserId] = useState("");
  const [userRecipe, setuserRecipe] = useState([]);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [reload, setreload] = useState(true);

  // Load token from localStorage on first render
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
      setisAuthenticated(true);
    }
  }, []);

  // Save token to localStorage if it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  // Fetch data when token or reload changes
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const api = await axios.get(`${url}/`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setrecipe(api.data.recipe);
      } catch (error) {
        console.error("Failed to fetch recipes", error);
      }
    };

    fetchRecipe();
    getSavedRecipeById();
    profile();
  }, [token, reload]);

  // Fetch user-specific recipes when userId is available
  useEffect(() => {
    if (userId) {
      recipeByUser(userId);
    }
  }, [userId]);

  // Register
  const register = async (name, gmail, password) => {
    const api = await axios.post(
      `${url}/register`,
      { name, gmail, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return api;
  };

  // Login
const login = async (gmail, password) => {
  try {
    const api = await axios.post(
      `${url}/login`,
      { gmail, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    if (api.data.token) {
      setToken(api.data.token);
      setisAuthenticated(true);
    }

    return api;
  } catch (error) {
    return { error: true, message: error.response?.data?.message || "Login failed" };
  }
};


  // Add Recipe
  const addRecipe = async (
    title,
    ist,
    ing1,
    ing2,
    ing3,
    ing4,
    qty1,
    qty2,
    qty3,
    qty4,
    imgurl
  ) => {
    const api = await axios.post(
      `${url}/add`,
      { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl },
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    setreload(!reload);
    return api;
  };

  // Get Recipe by ID
  const getRecipeById = async (id) => {
    const api = await axios.get(`${url}/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return api;
  };

  // Save Recipe by ID
  const savedRecipeById = async (id) => {
    const api = await axios.post(
      `${url}/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    setreload(!reload);
    return api;
  };

  // Get Saved Recipes
const getSavedRecipeById = async () => {
  try {
    const api = await axios.get(`${url}/saved`, {
      headers: {
        "Content-Type": "application/json",
        Auth: token,  // ✅ send token
      },
      withCredentials: true,
    });
    setsavedRecipe(api.data.recipe);
  } catch (error) {
    console.error("Failed to fetch saved recipes", error);
  }
};


  // Get Profile
  const profile = async () => {
    try {
      const api = await axios.get(`${url}/user`, {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      });

      const userData = api?.data?.user;
      if (userData && userData._id) {
        setuserId(userData._id);
        setuser(userData);
      } else {
        console.warn("User data not found in profile response", api.data);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  // Get Recipe by User
  const recipeByUser = async (id) => {
    try {
      const api = await axios.get(`${url}/user/${id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setuserRecipe(api.data.recipe);
    } catch (error) {
      console.error("Error fetching user's recipes", error.message);
    }
  };

  //fetchrecipes
  const fetchUserRecipes = async () => {
    if (!userId) return;
    try {
      const res = await axios.get(`${url}/user/${userId}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setuserRecipe(res.data.recipe);
      return res.data.recipe; 
    } catch (err) {
      console.error("Failed to fetch user recipes:", err.message);
    }
  };


  // Logout
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    setisAuthenticated(false);
    setuser(null);
    setuserId("");
    setuserRecipe([]);
    setsavedRecipe([]);
  };


  //detele
  const deleteRecipeById = async (id) => {
    const api = await axios.delete(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    setreload(!reload); // refresh recipe list
    return api;
  };


  return (
    <AppContext.Provider
      value={{
        login,
        register,
        addRecipe,
        recipe,
        getRecipeById,
        savedRecipeById,
        savedRecipe,
        userRecipe,
        user,
        logOut,
        isAuthenticated,
        setisAuthenticated,
        deleteRecipeById,
        fetchUserRecipes,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );

};

export default App_State;
