import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const { isAuthenticated, logOut } = useContext(AppContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="nav bg-dark p-3 d-flex justify-content-between align-items-center">
      {/* Left: Brand */}
      <Link
        to="/"
        className="text-white fw-bold fs-3 text-decoration-none"
      >
        Yumystic
      </Link>

      {/* Right: Nav Links */}
      <div className="d-flex align-items-center gap-3">
        {/* Home Button */}
        <Link
          to="/"
          className={`text-white text-decoration-none ${
            isActive("/") ? "border-bottom border-warning pb-1" : ""
          }`}
        >
          Home
        </Link>

        {isAuthenticated && (
          <>
            <Link
              to="/explore"
              className={`text-white text-decoration-none ${
                isActive("/explore") ? "border-bottom border-warning pb-1" : ""
              }`}
            >
              Explore
            </Link>
            <Link
              to="/add"
              className={`text-white text-decoration-none ${
                isActive("/add") ? "border-bottom border-warning pb-1" : ""
              }`}
            >
              Add
            </Link>
            <Link
              to="/profile"
              className={`text-white text-decoration-none ${
                isActive("/profile") ? "border-bottom border-warning pb-1" : ""
              }`}
            >
              Profile
            </Link>
            <span
              onClick={logOut}
              className="text-danger text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          </>
        )}

        {!isAuthenticated && (
          <>
            <Link
              to="/login"
              className={`text-white text-decoration-none ${
                isActive("/login") ? "border-bottom border-warning pb-1" : ""
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`text-white text-decoration-none ${
                isActive("/register") ? "border-bottom border-warning pb-1" : ""
              }`}
            >
              Register
            </Link>
          </>
        )}

        <Link
          to="/saved"
          className={`text-white text-decoration-none ${
            isActive("/saved") ? "border-bottom border-warning pb-1" : ""
          }`}
        >
          Saved
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
