import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headderImg from '../assets/img/header-img.svg';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Profolio</span>
                        <h1>{`^Hi I'm webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>She fans herself with a magazine and bites into a block of gorgonzola. Mum eats cheese when she’s having a breakdown</p>
                        <button onClick={() => console.log('connet')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headderImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 

export default Banner;