import React, { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/img/profile.svg";
import { useAppState } from "../context/ContextApi";
import { addDoc } from "firebase/firestore";

export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { messageCollection, error, setError } = useAppState();

  const handleMessage = async (event) => {
    event.preventDefault();
    setError("");
    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    )
      return setError({ error: true, msg: "Missing fields, please fill up." });

    const messageObj = {
      fname: fname,
      lname: lname,
      email: email,
      subject: subject,
      message: message,
    };

    await addDoc(messageCollection, messageObj)
      .then(() => {
        setError({
          error: false,
          msg: `Your message has been sent successfully ${fname} ${lname}`,
        });
      })
      .catch((err) => {
        setError({ error: true, msg: err.code });
      });

    setFname("");
    setLname("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <section className="section container" id="contact">
        <div className="main">
          <h1 className="text-dark display-3 my-4">Let's Talk</h1>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
              <Form
                onSubmit={handleMessage}
                className="neo_btn rounded p-4 mb-3"
              >
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="name">First name</Form.Label>
                      <Form.Control
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        type="text"
                        id="name"
                        className="neo_btn_inner rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="lastname">Last name</Form.Label>
                      <Form.Control
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        type="text"
                        id="lastname"
                        className="neo_btn_inner rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className="neo_btn_inner rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6" className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="subject">Subject</Form.Label>
                      <Form.Control
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        id="subject"
                        className="neo_btn_inner rounded-pill"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="12" lg="12" className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Control
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        as="textarea"
                        type="text"
                        id="message"
                        className="neo_btn_inner rounded resize-none"
                        placeholder="Message"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  type="submit"
                  className="neo_btn rounded-pill text-danger"
                >
                  Send <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                </Button>
              </Form>
              {error?.msg && (
                <Alert
                  variant={error?.error ? "danger" : "success"}
                  className="rounded-pill neo_btn bg-light"
                  dismissible
                  onClose={() => {
                    setError("");
                  }}
                >
                  {error?.msg}
                </Alert>
              )}
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg={{ order: "first" }}
              className="d-flex justify-content-center align-items-center mb-3"
            >
              <img src={profile} alt="" className="profile" width={450} />
            </Col>
          </Row>
        </div>
      </section>

      <Modal
        show={error?.error}
        onHide={() => {
          setError({ error: false });
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-danger"
          >
            {error?.error ? "Failed" : "Successfull"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{error?.msg}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
