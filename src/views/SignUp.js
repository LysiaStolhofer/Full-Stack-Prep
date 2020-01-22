import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Landing from "../components/Landing";

const SignUp = () => {
  return (
    <React.Fragment>
      <h2>THIS IS THE SIGN UP PAGE</h2>
      <div>
        <ul>
          <li>
            <Link to="/">Done - back to Splash-page</Link>
          </li>
        </ul>
        <Route exact path="/" component={Landing} />
      </div>
    </React.Fragment>
  );
};

export default SignUp;
