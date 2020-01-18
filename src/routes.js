import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

// import needed Components 
import { NavBar, Footer, Loading, PrivateRoute } from "./components";

// import needed pages (views)
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
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

const Routes= (props) => {

  return (

 
          <Switch>
            <Route path="/" exact component={Home} />            
            <Route path="/SignUp" component={SignUp} />
            <PrivateRoute path="/Dashboard" component={Dashboard}/>
            <PrivateRoute path="/external-api" component={ExternalApi} />
            <PrivateRoute exact path="/" component={Dashboard}/>
          <PrivateRoute exact path="/Prep" component={Prep} />
          <PrivateRoute exact path="/Take" component={Take} />
          <Route exact path="/Add" component={Add} />
          </Switch>

  );
};

export default Routes;
