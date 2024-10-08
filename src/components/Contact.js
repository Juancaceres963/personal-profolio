import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttomText, setButtomText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.prevemtDefault();
        setButtomText('Sending...');
        let response = await fetch("http://locallhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Aplication/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtomText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully" })
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later" })
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="aling-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Image" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                                    <button type="submit"><span>{buttomText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}