import React from "react";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout page="Dashboard">
      <>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary">
            <i class="bi bi-code-slash text-white"></i> Bootstrap
          </button>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 shadow">
            <h5 className="font-bold px-2 py-3">
              <i class="bi bi-info-circle-fill"></i>
              Details
            </h5>
            <table className="table">
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>79</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>intelcol2</td>
                </tr>
                <tr>
                  <th>Token</th>
                  <td>
                    22222121 <i class="bi bi-clipboard"></i>
                  </td>
                </tr>
                <tr>
                  <th>FDQN</th>
                  <td>intelcol2</td>
                </tr>
                <tr>
                  <th>FLM Deps</th>
                  <td>Done</td>
                </tr>
                <tr>
                  <th>Connection</th>
                  <td className="text-danger">Disconnected .</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-8">
            <table class="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>FedTag</th>
                  <th>Fed Satus</th>
                  <th>Plan Name</th>
                </tr>
                <tr>
                  <td className="text-primary">Testfed123</td>
                  <td>
                    <button className="btn btn-success">success</button>
                  </td>
                  <td>@keras cms11</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
