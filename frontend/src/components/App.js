import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import indexRoutes from "../routes";
import PrivateRoute from "../components/PrivateRoute";
import { useSelector } from "react-redux";
import Login from "../layouts/Login/Login";

const App = () => {
  const auth = useSelector(state => state.auth);
  return (
    <Switch>
      {auth.isAuthenticated ? null : <Route path="/login" component={Login} />}

      {indexRoutes.map((prop, key) => {
        if (prop.redirect) {
          return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
        } else {
          return (
            <PrivateRoute
              path={prop.path}
              key={key}
              component={prop.component}
              isAuthenticated={auth.isAuthenticated}
            />
          );
        }
      })}
    </Switch>
  );
};
export default App;
