import React, { Component } from 'react';
import './App.css';
import TomatoTimer from '../TomatoTimer';
import StepSelector from '../StepSelector';
import TomatorosCounter from '../TomatorosCounter';

import TopNav from '../TopNav/TopNav';
import HowItWorks from '../HowItWorks/HowItWorks';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import { requestPermission } from '../../lib/notification';

class App extends Component {
    componentWillMount() {
        requestPermission();
    }

    render() {
        return (
            <div className="app">
                <TopNav/>

                <div className="tomato container">
                    <div className="col-60">
                        <TomatoTimer/>
                    </div>

                    <div className="col-40">
                        <h1>Take your time. Get things done.</h1>

                        <TomatorosCounter/>

                        <StepSelector/>
                    </div>
                </div>

                <hr/>

                <HowItWorks/>

                <hr/>

                <Contact/>

                <Footer/>
            </div>
        );
    }
}

export default App;
