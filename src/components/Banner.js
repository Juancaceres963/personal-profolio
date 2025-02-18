import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headderImg from "../assets/img/banner_marco3.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container style={{ marginTop: -130 }}>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <img
              className="banner-img"
              src={headderImg}
              alt="Headder Img de Juan Cáceres"
            />
          </Col>
          <Col xs={12} md={6} xl={7} className="banner-col-text">
            <span style={{ color: "#fff" }} className="tagline">
              Welcome to my Profolio
            </span>
            <div>
              <h1 className="container_banner_h1">
                {`Hi I'm webdecoded`}
                <br />
                <span className="wrap">{text}</span>
              </h1>
            </div>
            <p style={{ fontSize: 25 }}>
              Building the future with well-designed, <br />
              scalable, and maintainable software solutions.
            </p>
            <button onClick={() => console.log("connet")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
