import React from "react";
import SideBar from "./Sidebar";
import Dashboard from "../../components/Dashboard";
import Inventory from "../../components/Inventory";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import User from "../../components/User";

const Home = ({ match }) => {
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Navbar />
        <Switch>
          <Route exact path={`${match.path}`} component={Dashboard} />
          <Route path={`${match.path}/users`} component={User} />
          <Route path={`${match.path}/inventories`} component={Inventory} />
          <Redirect from="*" to="/" />;
        </Switch>
      </div>
    </>
  );
};

export default Home;
