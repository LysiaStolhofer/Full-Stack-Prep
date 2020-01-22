import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Landing from "./components/Landing";

// import needed Components
import { NavBar, Footer, Loading, PrivateRoute } from "./components";

// import needed pages (views)
import Home from "./views/Home";
import ExternalApi from "./views/ExternalApi";
import SignUp from "./views/SignUp";

// import authorization
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Add from "./views/Add";
import Take from "./views/Take";
import Prep from "./views/Prep";
initFontAwesome();

const Routes = props => {
  return (
    <Switch>
      {props.user && props.user ? (
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/Prep" component={Prep} />
          <PrivateRoute exact path="/Take" component={Take} />
          <Route exact path="/Add" component={Add} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/SignUp" component={SignUp} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      )}
    </Switch>
  );
};

export default Routes;