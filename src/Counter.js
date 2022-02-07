
import { Component } from 'react/cjs/react.production.min';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import OverNine from './OverNine';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 500,
            showClock: true,
        };

    }


    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
            let currentStepValue = prevState.stepValue;

            if (action === 'add') {
                currentCounterValue += currentStepValue;

            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            });
        });
    }

    changeStep = (stepValue, value) => {                

            this.setState({[stepValue]: parseInt(value)});
     
    }



    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }



    render() {

        let clockElement = '';
        if (this.state.showClock) {
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
            // clockElement = <Clock toggleClockMethod={this.toggleClock}/>;
        } else {
            clockElement = <span className="show-clock" onClick={this.toggleClock}>show clock</span>
        }


        return (
            <div className="counter">
                <p>Bet u can't go over 9k ;)</p>
                <p>Counter:
                    <Display displayValue={this.state.counterValue} />
                </p>
                <ButtonsPanel buttonMethod={this.changeValue} />
                {clockElement}
                <Step changeStep={this.changeStep} />

                <OverNine displayValue={this.state.counterValue} />
            </div>
        );
    }
}

// function Counter (props) {
//     let randomNumber = Math.floor(Math.random() * 108 + 1);
//     return (
//         <div className = "counter">
//             Counter:
//             <span className = "value">
//                 {props.initValue}
//             </span>
//         </div>
//     );  
// }

export default Counter;