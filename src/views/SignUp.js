import React from "react";
// import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

const SignUp = () => {
  return (
    <Router>
      <div>Sign-up Page</div>
      <div>
        <ul>
          <li>
            <Link to="/Home">Done - back to Home</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default SignUp;
