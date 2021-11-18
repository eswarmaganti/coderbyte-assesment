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
          <i class="bi bi-house-door-fill "></i> <span>Dashboard</span>
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
          <i class="bi bi-person-fill "></i> <span>Profile</span>
        </Link>
      </li>
      <li
        className="list-group-item mb-2"
        className={
          location.pathname === "/settings"
            ? "list-group-item mb-2 bg-primary text-white"
            : "list-group-item mb-2"
        }
      >
        <Link to="/settings">
          <i class="bi bi-gear-fill"></i> <span>Settings</span>
        </Link>
      </li>
      <li className="list-group-item mb-2">
        <Link to="/login">
          <i class="bi bi-box-arrow-right "></i> <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
