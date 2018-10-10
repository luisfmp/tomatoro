import React, { Component } from 'react';

import { Col, Container, Row } from 'reactstrap';

import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Container id="contact" className="text-center">
                <Row>
                    <Col>
                        <h1>Get in touch</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>Tomatoro is an open source code project. You may play around with the code source and
                            apply it for your own projects.</p>

                        <p className="text-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/tonymtz/tomatoro">
                                Github</a>
                        </p>

                        <p className="text-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_tonymtz">Contact
                                the Author</a>
                        </p>

                        <p className="text-center">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScvGhHBkJE_3S05NtU10C7nt65rKNXU-UyBB393CYOAlR_gBQ/viewform"
                               target="_blank"
                               rel="noopener noreferrer">Leave your feedback</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;
