import React from 'react';


const Laps = (props) => {
    return ( 
            <ul className='list-group list-group-flush pt-5  '>
                  {props.lap.map((lap, index) => {
                        return(
                            <li key={index} className='list-group-item p-2 border'>
                                <span className='p-5'>Min: {lap.min}</span>
                                <span className='p-5'>Sec: {lap.sec}</span>
                                <span className='p-5'>Mili: {lap.mili}</span>
                            </li>
                        )
                  })}
            </ul>
        
    );
};

export default Laps;