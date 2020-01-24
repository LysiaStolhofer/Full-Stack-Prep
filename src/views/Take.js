import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Home from "./Home";

const Take = () => {
  return (
    <React.Fragment>
      <div>Take mock interview</div>
      <div>
        <Link to="/" className="btn btn-primary">
          Back to Dashboard
        </Link>
        <Route exact path="/" component={Home} />
      </div>
    </React.Fragment>
  );
};

export default Take;
