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
import Routes from "./routes";

// import authorization 
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";

initFontAwesome();

const App = () => {
  const { loading, user } = useAuth0();
  console.log(loading)

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Routes loading={loading} user={user}>

          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
