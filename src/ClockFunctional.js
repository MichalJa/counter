import React, { useState, useEffect } from 'react';

import './Clock.css';

const ClockFunctional = (props) => {

    // console.log('Initialization lifeCycle: setting state [date, setdate]');

    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date());

    useEffect(() => {
        let timerID = setInterval(
            () => {tick()},
            1000
        );
        // console.log('Mounting && Updating lifeCycle: componentDidMount() && componentDidUpdate()');

        return(() => {
            clearInterval(timerID);
            // console.log('Unmounting lifeCycle: componentWillUnmount()');
        })
    }, [date]);

    return(
            <div className="clock">
                <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
            </div>
        );
}
export default ClockFunctional;