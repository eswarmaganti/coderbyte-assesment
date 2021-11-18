import React from "react";
import avatar from "../assets/avatar.png";
const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light shadow">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <div class="d-flex gap-3">
          <div className="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-text">
              <i class="bi bi-search"></i>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <img src={avatar} alt="avatar" className="avatar" />
            <span className="inline">Hello,</span>
            <span className="fs-6 d-inline">JohnWilson</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
