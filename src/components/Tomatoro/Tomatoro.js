import React, { Component } from 'react';
import { connect } from 'react-redux';

const other = {
    pomodoroDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
};

class Tomatoro extends Component {

    state = {
        interval: null,
        onSession: false,
        timer: 25
    };

    tick = () => {
        this.setState({
            timer: this.state.timer - 1
        })
    };

    startSession = () => {
        this.setState({
            onSession: true,
            interval: setInterval(this.tick, 1000)
        });
    };

    pauseSession = () => {
        clearInterval(this.state.interval);
        this.setState({
            onSession: false,
            interval: null,
        });
    };

    resetSession = () => {
        clearInterval(this.state.interval);
        this.setState({
            timer: 25,
            onSession: false,
            interval: null,
        });
    };

    render() {
        const { timer, onSession } = this.state;
        return (
            <section>
                <p>{ timer }</p>

                <button onClick={ this.startSession } disabled={ onSession }>Play</button>
                <button onClick={ this.pauseSession } disabled={ !onSession }>Pause</button>
                <button onClick={ this.resetSession }>Reset</button>
            </section>
        );
    }

}

export default connect(
    (state) => ({}),
    {}
)(Tomatoro);
