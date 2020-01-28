import React from "react";
import { Route, Switch } from "react-router-dom";


// import needed Components
import { PrivateRoute } from "./components";

// import needed pages (views)
import Home from "./views/Home";
import ExternalApi from "./views/ExternalApi";
import Sandbox from "./views/Sandbox";
import Add from "./views/Add";
import Take from "./views/Take";
import Prep from "./views/Prep";
import Landing from "./components/Landing";

// styles
import "./assets/css/App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";

initFontAwesome();

const Routes = props => {
  return (
    <Switch>
      {props.user && props.user ? (
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/Prep" component={Prep} />
          <PrivateRoute exact path="/Take" component={Take} />
          <PrivateRoute exact path="/Add" component={Add} />
          <PrivateRoute exact path="/Sandbox" component={Sandbox} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      ) : (
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        )}
    </Switch>
  );
};

export default Routes;
