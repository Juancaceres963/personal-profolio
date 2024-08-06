import { Container, Row, TabContainer, TabContent, Col, Nav, Tab} from "react-bootstrap"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>She fans herself with a magazine and bites into a block of gorgonzola. Mum eats cheese when she’s having a breakdown She fans herself with a magazine and bites into a block of gorgonzola.</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p>{project.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}