import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navmenu() {
  return (
    <Navbar fixed="top" collapseOnSelect expand={false} className=" my-3">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="neo_btn ms-auto bg-light"
        >
          <div className="toggler-icon bar-1"></div>
          <div className="toggler-icon bar-2"></div>
          <div className="toggler-icon bar-3"></div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="bg-light">
          <Nav className="position-absolute bg-light w-75 d-flex justify-content-center align-items-center p-2 neo_btn rounded start-10">
            <Row>
              <Col xs="12" sm="4" md="4" lg="12" className="my-3">
                <Nav.Link
                  className="neo_btn m-auto me-auto rounded flex-column d-flex justify-content-center align-items-center"
                  href="#home"
                >
                  <FontAwesomeIcon icon="fa-solid fa-home" />
                  Home
                </Nav.Link>
              </Col>
              <Col xs="12" sm="4" md="4" lg="12" className="my-3 ">
                <Nav.Link
                  className="neo_btn m-auto rounded me-auto flex-column d-flex justify-content-center align-items-center"
                  href="#about"
                >
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                  About
                </Nav.Link>
              </Col>
              <Col xs="12" sm="4" md="4" lg="12" className="my-3">
                <Nav.Link
                  className="neo_btn m-auto rounded flex-column d-flex justify-content-center align-items-center"
                  href="#services"
                >
                  <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
                  Services
                </Nav.Link>
              </Col>
              <Col xs="12" sm="4" md="4" lg="12" className="my-3 ">
                <Nav.Link
                  className="neo_btn rounded m-auto flex-column d-flex justify-content-center align-items-center"
                  href="#projects"
                >
                  <FontAwesomeIcon icon="fa-solid fa-sheet-plastic" />
                  Projects
                </Nav.Link>
              </Col>
              <Col xs="12" sm="4" md="4" lg="12" className="my-3 ">
                <Nav.Link
                  className="neo_btn m-auto rounded flex-column d-flex justify-content-center align-items-center"
                  href="#contact"
                >
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  Contact
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
