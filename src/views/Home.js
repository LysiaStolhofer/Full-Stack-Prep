import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import UserChart from '../components/UserChart';
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import { MainBtns } from "../components";

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
        <MainBtns as={Col} />
      </Row>
      <Row>
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
      </div>
    </Container>
  );
};

export default Home;