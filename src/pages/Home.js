import React, { useEffect, useRef } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import profile from "../assets/img/profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";
import { motion, useInView, useAnimation } from "framer-motion";
import About from "./About";
import Services from "./Services";
import { useTypewriter } from "react-simple-typewriter";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  const fadeIn = {
    hide: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    isInView ? control.start("visible") : control.start("hide");
  }, [isInView, control]);

  const { text } = useTypewriter({
    words: ["ReactJs", "UI/UX Design", "Full-Stack"],
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
    loop: true,
  });
  return (
    <>
      <section className="section container" id="home" ref={ref}>
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate={control}
          className="main"
        >
          <Row className="mt-3">
            <Col xs={{ order: "last" }} sm={{ order: "last" }} md="6" lg="6">
              <p className="display-1 fw-bold">I Have</p>
              <p className="display-1 fw-bold text-warning">{text}_</p>
              <p className="display-1 fw-bold">Experience</p>
              <p className="intro">
                Hi, I'm Ayush, Full-Stack Web Developer - creating bold & brave
                interface design and web application for companies all across
                the world.
              </p>
              <Stack direction="horizontal" gap="3" className="mb-3">
                <a
                  href="#contact"
                  className="p-2 text-decoration-none rounded neo_btn"
                >
                  Let's Talk&nbsp;{" "}
                  <FontAwesomeIcon
                    icon="fa-solid fa-paper-plane"
                    className="fa-fade"
                  />
                </a>
                <a
                  href="#projects"
                  className="p-2 text-decoration-none rounded neo_btn"
                >
                  Projects &nbsp;
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-up"
                    className="fa-bounce"
                    style={{ rotate: "45deg" }}
                  />
                </a>
              </Stack>
              <div className="my-4 d-flex flex-wrap">
                <a
                  href="https://github.com/Ayush2395"
                  className="neo_btn rounded-circle p-1 mx-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size="35px" />
                </a>
                <a
                  href="https://instagram.com/official_mandal_saab"
                  className="neo_btn rounded-circle p-1 mx-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size="35px" />
                </a>
                <a
                  href="https://www.buymeacoffee.com/ayush27"
                  className="neo_btn rounded-circle p-1 mx-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiBuymeacoffee size="35px" />
                </a>
              </div>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg={{ order: "last" }}
              className="mt-2 d-flex justify-content-center align-items-center"
            >
              <img
                src={profile}
                alt="profile"
                className="profile"
                width={450}
              />
            </Col>
          </Row>
        </motion.div>
      </section>
      <About />
      <Services />
      <Project />
      <Contact />
    </>
  );
}
