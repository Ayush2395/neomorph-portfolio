import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import ProjectDisplay from "../components/ProjectDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectList() {
  return (
    <>
      <div className="section container">
        <div className="main">
          <Form className="mt-4 mb-3 w-50 position-fixed">
            <InputGroup className="neo_btn_inner rounded-pill p-2 ps-3">
              <Form.Control
                id="search"
                type="search"
                placeholder="Search project"
              />
              <InputGroup.Text className="text-primary">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <ProjectDisplay loop={Infinity} />
        </div>
      </div>
    </>
  );
}
