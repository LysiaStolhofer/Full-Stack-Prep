import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => (
  <Spinner animation="border" size="md" variant="success" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default Loading;
