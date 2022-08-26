import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProjectDisplay from "../components/ProjectDisplay";

export default function Project() {
  const navigate = useNavigate();
  return (
    <>
      <section className="project_section container" id="projects">
        <div className="main">
          <h1 className="text-dark display-2 mb-3">Projects</h1>
          <ProjectDisplay loop={3} />
          <Button
            onClick={() => {
              navigate("/projects_list");
            }}
            className="neo_btn bg-light mb-3"
          >
            More Projects
          </Button>
        </div>
      </section>
    </>
  );
}
