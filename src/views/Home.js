import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />
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
      <div>
          <Link to="/Prep" className="btn btn-primary">
          Prep for inteview
        </Link><Link to="/Take" className="btn btn-primary">
        Take a mock interview
        </Link><Link to="/Add" className="btn btn-primary">
        Add an interview question
        </Link> 
      </div>
      </Container>
);
};

export default Home;