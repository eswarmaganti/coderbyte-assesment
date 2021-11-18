import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Layout = ({ icon, page, path, children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="app-dashboard-layout">
        <Sidebar />
        <section className="container py-2">
          <h4>{page}</h4>
          <div>
            <i class="bi bi-chevron-right mr-2 fs-5"></i>
            <i class={`bi bi-house-door-fill fs-5`}></i>
            <span>{path}</span>
          </div>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Layout;
