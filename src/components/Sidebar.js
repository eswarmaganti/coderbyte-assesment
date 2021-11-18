import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <ul className="list-group">
      <li
        className={
          location.pathname === "/dashboard"
            ? "list-group-item mb-2 bg-primary text-white"
            : "list-group-item mb-2"
        }
      >
        <Link to="/dashboard">
          <i class="bi bi-house-door-fill "></i> Dashboard
        </Link>
      </li>
      <li
        className="list-group-item mb-2"
        className={
          location.pathname === "/profile"
            ? "list-group-item mb-2 bg-primary text-white"
            : "list-group-item mb-2"
        }
      >
        <Link to="/profile">
          <i class="bi bi-person-fill "></i> Profile
        </Link>
      </li>
      <li className="list-group-item mb-2">
        <Link to="/login">
          <i class="bi bi-box-arrow-right "></i> Logout
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
