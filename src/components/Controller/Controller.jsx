import React, { Component } from 'react';

class  Controller extends Component {

    constructor(props){
        super(props)

        this.state ={
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }

    startHandler(event){
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true, 
        })
        this.props.start();
    }

    pauseHandler(event){
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: true,
            reset: true
        })
        this.props.pause();
    }
    resetHandler(event){
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }
    lapHandler(){
        this.props.laps()
    }
    getController(){
        let output = null;

        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button 
                    className='btn btn-success px-5 mt-5'
                    onClick={event => this.startHandler(event)}

                    >Start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
             output = (
                <div>
                    <button 
                    className='btn btn-primary px-5 mt-5 '
                    onClick={event => this.pauseHandler(event)} 
                    >Pause</button>

                    <button 
                    className='btn btn-warning px-5 mt-5 mx-5'
                    onClick={event => this.lapHandler(event)} 
                    >Lap</button> 
                </div>
                
             )
        }

        else if(this.state.start && this.state.reset){
            output = (
               <div>
                   <button 
                   className='btn btn-success px-5 mt-5 '
                   onClick={event => this.startHandler(event)} 
                   >Start</button> 

                   <button 
                   className='btn btn-danger px-5 mt-5 mx-5'
                   onClick={event => this.resetHandler(event)} 
                   >Reset</button>

                
               </div>
               
            )
       }

        return output;
    }
    render(){
        return  this.getController();
    }
};

export default Controller;