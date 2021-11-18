import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({}) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" || username.length <= 3) {
      setError("Invalid Username , must be more than 3 characters");
    } else if (password === "" || password.length < 6) {
      setError("Invalid Password , must be more than 6 characters");
    } else {
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <section className="container">
      <div className="jumbotron text-center  shadow">
        <h2 className="text-success p-2">Welcome,Back.</h2>
        <h5 className="p-3">Login to your Account</h5>
      </div>
      <div className="col-md-6 mx-auto p-4 border border-rounded">
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group my-2">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Enter Email Address / Username"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
