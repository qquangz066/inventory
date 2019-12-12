import React, { useEffect } from "react";
import SideBar from "./Sidebar";
import Dashboard from "../../components/Dashboard";
import Inventory from "../../components/Inventory";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";

const Home = ({ match }) => {
  useEffect(() => {
    
  });

  return (
    <>
      <SideBar />
      <div className="main-content">
      <Navbar />
        <Switch>
          <Route exact path={`${match.path}`} component={Dashboard} />
          <Route path={`${match.path}/inventories`} component={Inventory} />
          <Redirect from="*" to="/" />;
        </Switch>
      </div>
    </>
  );
};

export default Home;
