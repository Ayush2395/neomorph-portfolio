import React from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 text-center" style={{ maxWidth: "400px" }}>
        <h1 className="display-1 text-danger">Page not found</h1>
        <Button
          onClick={() => {
            navigate("/");
          }}
          className="neo_btn rounded-circle bg-light p-3"
        >
          <FontAwesomeIcon icon="fa-solid fa-home" />
        </Button>
      </div>
    </Container>
  );
}
