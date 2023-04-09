import React, { Component } from "react";

import "./Counter.css";

export default class Counter extends Component {

    state = {
        number: this.props.initialValue || 0,
        step: this.props.step || 5,
    };

    increment = () => {
        this.setState({
            number: this.state.number + this.state.step
        });
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.step
        });
    }

    setStep = e => {
        this.setState({
            step: + e.target.value
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <p>Initial value: {this.state.number}</p>
                <div>
                    <label htmlFor="stepInput">Step: </label>
                    <input id="stepInput" type="number" value={this.state.step} onChange={this.setStep} />
                </div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}
