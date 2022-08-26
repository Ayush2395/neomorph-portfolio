import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiBootstrap,
  SiFirebase,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import cv from "../assets/cv/cv.pdf";

export default function About() {
  return (
    <section className="section container" id="about">
      <div className="main">
        <Row>
          <Col>
            <h1 className="display-1 text-dark fw-normal">Skills &</h1>
            <h1 className="display-1 text-dark fw-normal">Education</h1>
            <p className="intro">
              🦋 A spcialist in UI/UX design. ✨ A passion of mine is designing
              and solving problems through user experience, 😊 primarly on
              modern web UI.
            </p>
            <p className="text-primary fs-4 fw-bold">Skills</p>
            <Row className=" ms-2 skills">
              <Col xs="4" sm="4" md="4" lg="4" className="my-3">
                <div
                  className="mb-2 neo_btn d-flex justify-content-center align-items-center fs-5 bg-light rounded-circle"
                  style={{ height: "45px", width: "45px" }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-swatchbook" />
                </div>
                <p>Visual Design</p>
              </Col>
              <Col xs="4" sm="4" md="4" lg="4" className="my-3">
                <div
                  className="mb-2 neo_btn d-flex justify-content-center align-items-center fs-5 bg-light rounded-circle"
                  style={{ height: "45px", width: "45px" }}
                >
                  <SiAdobephotoshop />
                </div>
                <p className="w-50">Adobe Photoshop</p>
              </Col>
              <Col xs="4" sm="4" md="4" lg="4" className="my-3">
                <div
                  className="mb-2 neo_btn d-flex justify-content-center align-items-center fs-5 bg-light rounded-circle"
                  style={{ height: "45px", width: "45px" }}
                >
                  <SiAdobexd />
                </div>
                <p>Adobe XD</p>
              </Col>
              <Col xs="4" sm="4" md="4" lg="4" className="my-3">
                <div
                  className="mb-2 neo_btn d-flex justify-content-center align-items-center fs-5 bg-light rounded-circle"
                  style={{ height: "45px", width: "45px" }}
                >
                  <GrReactjs size="30px" />
                </div>
                <p>ReactJs</p>
              </Col>
              <Col xs="4" sm="4" md="4" lg="4" className="my-3">
                <div
                  className="mb-2 neo_btn d-flex justify-content-center align-items-center fs-5 bg-light rounded-circle"
                  style={{ height: "45px", width: "45px" }}
                >
                  <SiBootstrap size={25} />
                </div>
                <p>Bootstrap</p>
              </Col>
              <Col xs="4" sm="4" md="4" lg="4" className="my-3">
                <div
                  className="mb-2 neo_btn d-flex justify-content-center align-items-center fs-5 bg-light rounded-circle"
                  style={{ height: "45px", width: "45px" }}
                >
                  <SiFirebase />
                </div>
                <p>Firebase</p>
              </Col>
              <a
                href={cv}
                className="neo_btn mb-4 w-50 text-center rounded p-2 text-decoration-none text-dark"
              >
                Download CV &nbsp;
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-up"
                  className="fa-bounce"
                  style={{ rotate: "180deg" }}
                />
              </a>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <p className="display-6 fw-normal text-primary">Education</p>
            <Row className="ms-2 mb-5 p-2">
              <Row className="neo_btn rounded mb-2">
                <Col xs="3" md="3" sm="3" lg="3">
                  <p className="fs-5">2017</p>
                </Col>
                <Col xs="9" md="9" sm="9" lg="9">
                  <p className="text-info fs-5">Matriculation</p>
                  <p className="text-danger fs-3">
                    Govt. Model Sen. Sec. Smart School
                  </p>
                  <p>Ludhiana, Punjab</p>
                </Col>
              </Row>
              <Row className="neo_btn rounded mb-2">
                <Col xs="3" md="3" sm="3" lg="3">
                  <p className="fs-5">2019</p>
                </Col>
                <Col xs="9" md="9" sm="9" lg="9">
                  <p className="text-info fs-5">Non-medical</p>
                  <p className="text-danger fs-3">
                    Govt. Model Sen. Sec. Smart School
                  </p>
                  <p>Ludhiana, Punjab</p>
                </Col>
              </Row>
              <Row className="neo_btn rounded mb-2">
                <Col xs="3" md="3" sm="3" lg="3">
                  <p className="fs-5">2023</p>
                </Col>
                <Col xs="9" md="9" sm="9" lg="9">
                  <p className="text-info fs-5">B.Tech in CSE</p>
                  <p className="text-danger fs-3">Gulzar Group of Institutes</p>
                  <p>Khanna, Punjab</p>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
