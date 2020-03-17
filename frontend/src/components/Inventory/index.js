import React from "react";
import ListProduct from "./List";
import { Switch, Route } from "react-router-dom";
import ViewProduct from "./View";
import Footer from "../../layouts/Footer";
import ScanProduct from "./Scan";
import CreateProduct from "./Create";

const Inventory = ({ match }) => {
  return (
    <>
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8"></div>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <Switch>
                <Route
                  path={`${match.path}/scan`}
                  component={ScanProduct}
                />
                 <Route
                  path={`${match.path}/create`}
                  component={CreateProduct}
                />
                <Route path={`${match.path}/upc/:upc`} component={ViewProduct} />
                <Route path={`${match.path}/:id`} component={ViewProduct} />
                <Route path={`${match.path}`} component={ListProduct} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Inventory;
