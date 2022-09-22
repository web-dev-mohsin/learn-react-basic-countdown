import React, {Component} from 'react';
import './Title'

class Title extends Component{

    constructor(props){
        super(props)

        this.state = {
            title: "This is  a dummy title",
            isInput: false,
        }
    }
    changeHandler(){
       this.setState({
        ...this.state,
        isInput: true,
       })
    }
    inputChange(event){
        this.setState({
            ...this.state,
            title: event.target.value
            
        })
    }
    keyChangeHandler(event){
        if(event.key === 'Enter'){
           this.setState({
            ...this.state,
                isInput: false,
           })
        }
    }
    blurHandler(){
        this.setState({
            ...this.state,
            isInput: false
        })
    }
   
    render(){

        let output =null
        if(this.state.isInput){
             output  =(
                    <div className='Title'>
                        <input className='form-control'
                            type="text"
                            value={this.state.title }
                            onChange= {event => this.inputChange(event)}
                            onKeyPress= {event => this.keyChangeHandler(event)}
                            onBlur = {event => this.blurHandler(event)}
                        />
                    </div>
                  )
        }else{
            output = (
                <div className='d-flex justify-content-between Title bg-info'>
                    <h1 >{this.state.title}</h1>
                    <span onClick={()=>this.changeHandler()} className='px-5 edit-icon'>
                         <i className="fa-regular fa-pen-to-square"></i>
                    </span>
                </div>
            )
        }
        return(
           <div>
                {output}
           </div>
        )
    }
} 





export default Title;