import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { Tomatoro } from '../Tomatoro';

class Dashboard extends Component {

    onSettingsChange = (newSettings) => {
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={ 12 } lg={ { size: 8, offset: 2 } }>
                        <p>Hello</p>

                        <Tomatoro
                            onSettingsChange={ this.onSettingsChange }
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default connect(
    (state) => ({}),
    {}
)(Dashboard);
