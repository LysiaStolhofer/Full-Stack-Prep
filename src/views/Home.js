import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
// import Take from "./Take";
// import Prep from "./Prep";
// import Add  from "./Add";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }
  console.log(user)

  return (
    <Container className="mb-5">
      <Row className="align-items-center Home-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user && user.picture}
            alt="Home"
            className="rounded-circle img-fluid Home-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user &&user.name}</h2>
          <p className="lead text-muted">{user && user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>

    

      <div>Home-Page</div>
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

      <Fragment>
    <Hero />
    <hr />
    <Content />
  </Fragment>
);
</Container>

  );
};

export default Home;