import React, { Component } from 'react';

import { Col, Container, Row } from 'reactstrap';

import './HowItWorks.css';

class HowItWorks extends Component {
    render() {
        return (
            <Container id="how-it-works" className="text-center">
                <Row>
                    <Col>
                        <h1>How to be more productive</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={ 4 }>
                        <img src="svg/graphic-set-time.svg" alt="graphic-set-time"/>
                        <h2>Set the Time</h2>
                    </Col>

                    <Col xs={ 4 }>
                        <img src="svg/graphic-take-break.svg" alt="graphic-take-break"/>
                        <h2>Take a Break</h2>
                    </Col>

                    <Col xs={ 4 }>
                        <img src="svg/graphic-repeat.svg" alt="graphic-repeat"/>
                        <h2>Repeat</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>To boost your productivity use the Pomodoro technique. Just alternate cycles of
                            hyper-focus on work with short breaks of relaxation.</p>
                        <p>For each 25 mins of work or Tomatoros, take a 5 mins break. After completing 3
                            Tomatoros, take a longer 15 mins break. Repeat this cycle!</p>

                        <p className="text-center">
                            <a href="https://softwaredevtools.com/blog/the-pomodoro-technique/?utm_source=jlene&utm_medium=page&utm_campaign=post51"
                               target="_blank"
                               rel="noopener noreferrer">Read more about Pomodoro</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HowItWorks;
