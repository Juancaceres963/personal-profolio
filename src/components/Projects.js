import { useEffect, useState } from "react";
import {
  Container,
  Row,
  TabContainer,
  TabContent,
  Col,
  Nav,
  Tab,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData"; // ✅ Importamos la lista de proyectos
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("first");

  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const { clientX: x, clientY: y } = e;
        const {
          top: t,
          left: l,
          width: w,
          height: h,
        } = el.getBoundingClientRect();
        el.style.setProperty("--posX", x - l - w / 2);
        el.style.setProperty("--posY", y - t - h / 2);
      });
    });

    return () => {
      projects.forEach((el) => {
        el.removeEventListener("pointermove", () => {}); // Limpieza de eventos
      });
    };
  }, []);

  const categoryDescriptions = {
    first:
      "I am a developer passionate about creating efficient and scalable solutions, with a focus on designing systems that optimize processes and improve user experience. I specialize in web development using technologies such as CSS, Bootstrap, Javascript, React, Router, Redux, SQL and ASP.NET, creating efficient APIs, implementing optimized databases in SQL Server, and integrating cloud tools for scalability. I have worked on projects where data structure optimization and interface improvement resulted in more efficient performance and a smooth user experience.",
    second:
      "Throughout my career, I have worked on developing marketing and visual design strategies for brands, using tools such as Canva and Figma to create engaging content such as images, logos, slides, and brochures. These tools have allowed me to collaborate in real time with teams, optimizing creative processes and improving the visual experience in each project. \n\n In the area of ​​digital marketing, I apply my knowledge of Meta tools (Facebook, Instagram, WhatsApp) to boost the social media presence of various brands. Although my experience in online sales is still in progress, he managed content campaigns and profile optimization with the aim of generating greater interaction and reach. My focus has always been on improving visibility and communication with the audience, through relevant and engaging content.",
    third:
      "My management experience focuses on technology project management, process optimization, and team coordination for the development of efficient solutions. I worked on the implementation of management systems with Google Sheets, using advanced formulas, AppScript, and AppSheets to automate tasks and improve operational efficiency. \n\n I also led teams in various environments, assuming multiple responsibilities to ensure the effective execution of projects. My ability to coordinate processes, optimize resources, and work in dynamic environments has allowed me to provide structured and scalable solutions in each initiative in which I participate.",
  };

  const formatTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              What sets me apart is not just my technical ability, but my
              strategic approach and my constant pursuit of excellence. I don't
              just execute tasks; I understand the purpose of each project,
              optimize processes, and generate real impact. My experience in
              programming, marketing, and management allows me to offer
              comprehensive solutions, combining creativity with structure and a
              long-term vision. I don't see these disciplines as separate areas,
              but rather as complementary tools to create innovative and
              scalable experiences. If you're looking for someone who not only
              executes, but drives the growth of your team or company, here I
              am.
            </p>

            <TabContainer
              id="projects-tabs"
              activeKey={selectedCategory}
              onSelect={(key) => setSelectedCategory(key)}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-3 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Software Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Marketing & Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Management</Nav.Link>
                </Nav.Item>
              </Nav>

              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  marginBottom: "20px",
                }}
              >
                <p className="mb-0">
                  {formatTextWithLineBreaks(
                    categoryDescriptions[selectedCategory]
                  )}
                </p>
              </div>

              <TabContent>
                <TabContent>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects
                        .filter((project) => project.category === "first") // Filtra solo los de programación
                        .map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row className="row-projects-container">
                      {projects
                        .filter((project) => project.category === "second") // Filtra solo los de marketing y diseño
                        .map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects
                        .filter((project) => project.category === "third") // Filtra solo los de management
                        .map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                  </Tab.Pane>
                </TabContent>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};