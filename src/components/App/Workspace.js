import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Error404 } from './Error404';

import { recoverSession } from '../../actions/SessionActions';
import { Dashboard } from '../Dashboard';

class Workspace extends Component {

    componentWillMount() {
        this.props.recoverSession();
    }

    render() {
        return (
            <main>
                <div id='workspace'>
                    <Switch>
                        <Route path='/' component={ Dashboard }/>

                        { /*<Redirect from='/' to='/dashboard'/>*/ }

                        <Route component={ Error404 }/>
                    </Switch>
                </div>
            </main>
        );
    }

}

export default connect(
    () => ({}),
    { recoverSession }
)(Workspace);
