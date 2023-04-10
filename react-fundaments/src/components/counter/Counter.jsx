import React, { Component } from "react";

import Display from "./Display";
import StepForm from "./StepForm";
import Buttons from "./Buttons";

import "./Counter.css";

export default class Counter extends Component {

    state = {
        number: this.props.initialValue || 0,
        step: this.props.step || 5,
    };

    setStep = newStep => {
        this.setState({
            step: newStep
        })
    }

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

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <StepForm step={this.state.step} setStep={this.setStep} />
                <Buttons setIncrement={this.increment} setDecrement={this.decrement} />
            </div>
        );
    }
}
