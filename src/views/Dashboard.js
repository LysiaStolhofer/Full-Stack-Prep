import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import Take from "./Take";
import Prep from "./Prep";
import Add  from "./Add";

const Dashboard = (props) => {
  const user = (props.user);
  const loading =(false); 

  if (loading || !user) {
    return <Loading />;
  }
  console.log(user); 

  return (
    <Container className="mb-5">
      <Row className="align-items-center Dashboard-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Dashboard"
            className="rounded-circle img-fluid Dashboard-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>

    

      <div>Dashboard-Page</div>
      <div>
        <ul>
          <li>
            <Link to="/Prep">Prep for inteview</Link>
          </li>
          <li>
            <Link to="/Take">Take a mock interview</Link>
          </li>
          <li>
            <Link to="/Add">Add an interview question</Link>
          </li>
        </ul>

        <hr />

        
      </div>
</Container>

  );
};

export default Dashboard;
