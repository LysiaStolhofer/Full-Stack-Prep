import React from "react";
// import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

const Prep = () => {
  return (
    <Router>
      <div>Prep for an interview</div>
      <div>
        <ul>
          <li>
            <Link to="/">Done - back to Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default Prep;
