import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { motion, useTransform, useScroll } from "framer-motion";

export default function DisplayCard({ icon, title, text, speed }) {
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(
    scrollYProgress,
    [1, 0.2],
    [speed * 2, 100 * speed]
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        style={{ y: scrollY }}
        className="main"
      >
        <Card className="position-relative">
          <Card.Body className="neo_btn rounded bg-light border-none">
            <div className="w-100 m-auto">
              <FontAwesomeIcon
                icon={`fa-solid fa-${icon}`}
                className="neo_btn ms-auto p-3 text-primary  rounded-circle text-center"
              />
            </div>
            <Card.Title className="text-center w-100 text-warning">
              {title}
            </Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </>
  );
}
