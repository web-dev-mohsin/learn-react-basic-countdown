import React from 'react';
import Digit from './Digit/Digit';

const CountDown = (props) => {
    return (
        <div className='d-flex gap-5 '>
            <Digit color="green" value={props.min}></Digit>
            <Digit color="red" value={props.sec}></Digit>
            <Digit color="yellow" value={props.mili}></Digit> 
        </div>
    );
};

export default CountDown;