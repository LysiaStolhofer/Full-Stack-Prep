import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Home from "./Home";

const Prep = () => {
  return (
    <React.Fragment>
      <div>Prep for an interview</div>
      <div>
        <ul>
          <li>
            <Link to="/">Done - back to Dashboard</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
      </div>
    </React.Fragment>
  );
};

export default Prep;
