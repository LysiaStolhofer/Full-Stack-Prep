import React from "react";
import { Container, Row, Col } from "reactstrap";
import UserChart from '../components/UserChart';
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />
  }
  console.log(user)

  return (
    <Container className="mx-auto">
      <Row>
        
        <UserChart as={Col} />
      </Row>    
    </Container>
  );
};

export default Home;
