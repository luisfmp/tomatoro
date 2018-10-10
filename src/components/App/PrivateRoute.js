import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {

    constructor(props) {
        const properties = {
            component: props.component,
            isLogged: props.isLogged,
            ...props
        };
        super(properties.props);
    }

    render() {
        const ComponentToRender = this.props.component;

        return (
            <Route
                { ...this.props.props }
                render={ props => this.props.isLogged ?
                    (<ComponentToRender { ...props } />) :
                    (<Redirect to={ { pathname: '/login', state: { from: props.location } } }/>) }
            />
        );
    }

}

export default connect(
    (state) => ({ isLogged: state.session.isLogged }),
    {}
)(PrivateRoute);
