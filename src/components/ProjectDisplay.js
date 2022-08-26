import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useAppState } from "../context/ContextApi";
import { getDocs } from "firebase/firestore";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ProjectDisplay({ loop }) {
  const { projectCollection } = useAppState();
  const [projects, setProjects] = React.useState([]);
  const fetchProjectData = async () => {
    await getDocs(projectCollection)
      .then((data) => {
        setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  const fadeIn = {
    hide: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "tween" },
    },
  };

  const ref = useRef(null);
  const control = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    fetchProjectData();
    isInView ? control.start("visible") : control.start("hide");
  }, [control, isInView]);

  return (
    <>
      <div className="row" ref={ref}>
        {projects.slice(0, loop).map((item, id) => {
          return (
            <motion.div
              variants={fadeIn}
              initial="hide"
              animate={control}
              className="col-sm-12 col-xs-12 col-md-4 col-lg-4 mb-3"
              key={id}
            >
              <Card>
                <Card.Body className="p-2 neo_btn bg-light rounded">
                  <Card.ImgOverlay>
                    <Card.Img src={item.img} alt="projects" />
                  </Card.ImgOverlay>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card-title position-absolute bottom-0 neo_btn w-50 text-center text-decoration-none p-1 rounded container mb-2"
                  >
                    {item.project}
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
