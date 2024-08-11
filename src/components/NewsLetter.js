import { useState } from "react";

export const NewsLetter = ({ subscribe, status, message }) => {
    const [ email, setEmail ] = useState("");
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