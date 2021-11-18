import React from "react";
import Layout from "../components/Layout";
import avatar from "../assets/avatar.png";
const Profile = () => {
  return (
    <Layout page="Profile" icon="house-door-fill" path="/profile">
      <>
        <div className="row">
          <div className="col-3">
            <img src={avatar} alt="avatar" className="avatar-lg mt-3" />
          </div>
          <div className="col-9">
            <h4>Collaborator Console</h4>
            <form action="">
              <div className="form-group mb-2">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="">Organization</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <span className="">2FA</span>
                <input type="checkbox" name="" id="" className="mx-2" />
              </div>
              <div className="form-group">
                <button className="btn btn-success">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Profile;
