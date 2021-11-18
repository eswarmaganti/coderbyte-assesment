import React from "react";
import Layout from "../components/Layout";

const Settings = () => {
  return (
    <Layout page="Settings" path="/ settings">
      <div className="container mt-5">
        <div className="my-3">
          <h5 className="bg-light p-2">Log Settings</h5>
          <div className="d-flex gap-2 align-items-center p-2 ">
            <p className="pt-3">Number of days to keep logs</p>
            <div className="col-4">
              <input
                type="text"
                placeholder="Enter no.of days to keep logs"
                className="form-control w"
              />
            </div>

            <button className="btn btn-success">Apply</button>
          </div>
        </div>

        <div className="my-3">
          <h5 className="bg-light p-2">SMTP Settings</h5>
          <form
            className="p-2"
            action="
            "
          >
            <div className="row">
              <div className="col-md-6">
                <table className="table-borderless ">
                  <tbody>
                    <tr>
                      <td>
                        <span>Host</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Username</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Use TLS</span>
                      </td>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table-borderless ">
                  <tbody>
                    <tr>
                      <td>
                        <span>Port</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Password</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Apply
            </button>
          </form>
        </div>

        <div className="my-3">
          <h5 className="bg-light p-2">Notification Settings</h5>
          <div className="row p-2">
            <div className="col-md-6">
              <label htmlFor="">Nodes Activity</label>{" "}
              <input type="checkbox" name="" id="" />
            </div>
            <div className="col-md-6">
              <label htmlFor="">Federation Activity</label>{" "}
              <input type="checkbox" name="" id="" />
            </div>
          </div>
        </div>

        <div className="my-3">
          <h5 className="bg-light p-2">F2A Settings</h5>
          <div className="row p-2">
            <div className="col-md-6">
              <label htmlFor="">F2A</label>{" "}
              <input type="checkbox" name="" id="" />
            </div>
            <div className="col-md-6 d-flex align-items-center gap-3 ">
              <label htmlFor="">F2AToken</label>{" "}
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                placeholder="Enter new F2A Token"
              />
            </div>
          </div>
        </div>

        <div className="my-3">
          <h5 className="bg-light p-2">Account Settings</h5>
          <div className="p-2">
            <div className="col-md-7">
              <table className="col-md-12 table-borderless ">
                <tbody>
                  <tr>
                    <td>
                      <span>UserName</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Enter username"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Password</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="password"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Confirm Password</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="ReEnter Password"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="my-3">
          <h5 className="bg-light p-2">Notification Settings</h5>
          <div className=" p-2">
            <div className="d-flex gap-4 align-items-center">
              <label htmlFor="">Auto Piolet Mode</label>{" "}
              <input type="checkbox" name="" id="" />
            </div>
          </div>
        </div>
        <div className="form-group my-5">
          <button type="submit" className="btn btn-success px-4">
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
