import React, { Component } from 'react';

import { Col, Container, Row } from 'reactstrap';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <Container>
                    <Row>
                        <Col md={ 6 }>
                            <ul className="social">
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href="https://www.facebook.com/mytomatoro/">
                                        <img src="svg/icon-facebook.svg" alt="icon-facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mytomatoro">
                                        <img src="svg/icon-twitter.svg" alt="icon-twitter"/>
                                    </a>
                                </li>
                            </ul>

                            <a href="http://softwaredevtools.com/" target="_blank" rel="noopener noreferrer">
                                <img src="svg/logo-softwaredevtools-white.svg" alt="logo-softwaredevtools"
                                     className="logo"/>
                            </a>
                        </Col>

                        <Col md={ 3 }>
                            <h2>Tools</h2>

                            <ul>
                                <li>
                                    <a href="https://planningwith.cards/" target="_blank"
                                       rel="noopener noreferrer">PlanningWith.Cards</a>
                                </li>
                                <li>
                                    <a href="http://softwaredevtools.com/retrospectives/" target="_blank"
                                       rel="noopener noreferrer">Retrospectives for Confluence</a>
                                </li>
                                <li>
                                    <a href="http://softwaredevtools.com/retrospectives/jira" target="_blank"
                                       rel="noopener noreferrer">Retrospectives for Jira</a>
                                </li>
                                <li>
                                    <a href="http://softwaredevtools.com/scrum-poker/" target="_blank"
                                       rel="noopener noreferrer">Scrum Poker</a>
                                </li>
                                <li>
                                    <a href="https://softwaredevtools.com/stand-bot/" target="_blank"
                                       rel="noopener noreferrer">Standbot for Slack</a>
                                </li>
                                <li>
                                    <a href="https://softwaredevtools.com/freshdesk-trello-powerup/" target="_blank"
                                       rel="noopener noreferrer">Freshdesk PowerUp</a>
                                </li>
                            </ul>
                        </Col>

                        <Col md={ 3 }>
                            <h2>Get In Touch</h2>

                            <ul>
                                <li>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScvGhHBkJE_3S05NtU10C7nt65rKNXU-UyBB393CYOAlR_gBQ/viewform"
                                       target="_blank" rel="noopener noreferrer">Support</a>
                                </li>
                                <li>
                                    <a href="http://softwaredevtools.com/blog/" target="_blank"
                                       rel="noopener noreferrer">Medium Blog</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className="copy">
                                ©2017 Nearsoft Labs. All Rights Reserved —&nbsp;
                                <a target="_blank" rel="noopener noreferrer" href="/privacy">Terms and Conditions</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
