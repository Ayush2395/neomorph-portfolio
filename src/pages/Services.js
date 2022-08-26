import React from "react";
import { Col, Row } from "react-bootstrap";
import DisplayCard from "../components/DisplayCard";

export default function Services() {
  return (
    <>
      <section id="services" className="sercive_section container mb-9">
        <div className="main">
          <h1 className="text-dark display-1 w-100 text-center">Services</h1>
          <Row>
            <Col xs="12" sm="12" md="4" lg="4" className="mb-4">
              <DisplayCard
                icon="pen-ruler"
                title="UI/UX Design"
                text="I'm concerned with the entire process of product design, from branding to design to useability. I can build interfaces in software or other computerized devices."
                speed={2}
              />
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" className="mb-4">
              <DisplayCard
                icon="bezier-curve"
                title="Frontend"
                text="I can develop the graphical user interface of a website, through the use of HTML, CSS, JavaScript and ReactJs so that users can view and interact with that website."
                speed={0}
              />
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" className="mb-4">
              <DisplayCard
                icon="cubes"
                title="Full Stack"
                text="I can also give the service to create Full stack ReactJs Application using Firebase, you can check my GitHub for full stack web Application."
                speed={-2}
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
