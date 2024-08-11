import { useEffect, useState } from "react";
import { Row, Col, Alert } from "react-bootstrap"

export const NewsLetter = ({ onValidated, status, message }) => {
    const [ email, setEmail ] = useState("");

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email && 
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail("");
    }

    return (
        <Col lg={12}>
            <div className="newsLetter-bx">
                <Row>
                    <Col lg={12} m={6} xl={5}>
                        <h3>Subscribe to our NewsLetter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}.</Alert>}
                        {status === 'success' && <Alert variant="success">{message}.</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-mail-bx">
                                <input value={email} type="mail" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}