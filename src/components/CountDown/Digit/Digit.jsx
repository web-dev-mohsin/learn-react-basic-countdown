import React from 'react';
import './Digit'
const Digit = (props) => {
    return (
        <div className='Digit' style={{borderColor: props.color}}>
            <h1 style={{color: props.color}}>
                {props.value}
                </h1>
        </div>
    );
};

export default Digit;