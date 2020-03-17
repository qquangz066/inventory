import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../../layouts/Footer";
import ListUser from "./List";

const User = ({ match }) => {
  return (
    <>
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8"></div>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <Switch>
                <Route path={match.path} component={ListUser} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default User;
