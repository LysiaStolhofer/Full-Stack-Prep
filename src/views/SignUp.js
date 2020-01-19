import React from "react";
// import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Landing from "../components/Landing";

const SignUp = () => {
  return (
    <Router>
      <h2>THIS IS THE SIGN UP PAGE</h2>

      <div>
        
        <ul>
          <li>
            <Link to="/">Done - back to Splash-page</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
};

export default SignUp;
