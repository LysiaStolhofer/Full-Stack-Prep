import React from "react";
// import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard  from "./Dashboard";

const Take = () => {
  return (
    <Router>
      <div>Take mock interview</div>
      <div>
        <ul>
          <li>
            <Link to="/Dashboard">Done - back to Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Dashboard} />
      </div>
    </Router>
  );
};

export default Take;
