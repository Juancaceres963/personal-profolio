import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import CircularProgress from "./CircularProgress";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I firmly believe that skills are tools to transform ideas into
                realities. Throughout my career, I have honed key competencies
                that allow me to add value in any environment, whether through
                technology, strategy or innovation. My mindset is clear:
                constantly improving, learn quickly and apply each piece of
                knowledge with impact. I am ready to take on new challenges and
                generate significant changes.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={80}
                  />
                  <h5>JavaScript & React.js</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={65}
                  />
                  <h5>ASP.NET Core & C#</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={60}
                  />
                  <h5>SQL Server & Entity Framework</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={65}
                  />
                  <h5>Performance Optimization</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={80}
                  />
                  <h5>Project Management & Teamwork</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={55}
                  />
                  <h5>Digital Marketing and SEO</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={85}
                  />
                  <h5>Problem Solving</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={90}
                  />
                  <h5>Fast Learning & Adaptability</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={80}
                  />
                  <h5>Effective Communication</h5>
                </div>
                <div className="item">
                  <CircularProgress
                    className="circular-progress"
                    percentage={85}
                  />
                  <h5>Self-discipline & time management</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
