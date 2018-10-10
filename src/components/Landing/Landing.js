import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { Tomatoro } from '../Tomatoro';

import HowItWorks from '../HowItWorks/HowItWorks';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class Landing extends Component {

    onSettingsChange = (newSettings) => {
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={ 12 } lg={ { size: 8, offset: 2 } }>
                        <p>Welcome</p>

                        <Tomatoro
                            onSettingsChange={ this.onSettingsChange }
                        />
                    </Col>
                </Row>

                <HowItWorks/>

                <Contact/>

                <Footer/>
            </Container>
        );
    }

}

export default connect(
    (state) => ({}),
    {}
)(Landing);
