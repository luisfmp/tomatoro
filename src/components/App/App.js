import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopNav from '../Common/TopNav';

import PrivateRoute from './PrivateRoute';
import Workspace from './Workspace';

import { Login } from '../Login';
import { Register } from '../Register';
import { recoverSession } from '../../actions/SessionActions';
import { Landing } from '../Landing';

class App extends Component {

    componentWillMount() {
        this.props.recoverSession();
    }

    render() {
        return (
            <Router>
                <main>
                    <TopNav/>

                    <Switch>
                        <Route path='/login' component={ Login }/>
                        <Route path='/register' component={ Register }/>

                        <PrivateRoute path='/dashboard' component={ Workspace }/>

                        <Route path='/' component={ Landing }/>
                    </Switch>
                </main>
            </Router>
        );
    }

}

export default connect(
    () => ({}),
    { recoverSession }
)(App);
