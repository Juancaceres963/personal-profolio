import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Logo_JCcode.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={10} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col
            size={12}
            sm={6}
            className="d-flex flex-column align-items-center align-items-sm-end gap-3 text-center text-sm-end"
          >
            <div className="social-icon d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/juan-caceres-orellana/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Juancaceres963" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/jc.code/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p style={{ color: "#fff" }} className="m-0">
              Copyright 2022. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
