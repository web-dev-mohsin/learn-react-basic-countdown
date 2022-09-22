import React, { Component }  from 'react';
import CountDown from './components/CountDown/CountDown';
import Title from './components/Title/Title';
import './components/Title/Title.css';
import './components/CountDown/Digit/Digit.css'
import Controller from './components/Controller/Controller';
import Laps from './components/Laps/Laps';


class App extends Component {

    constructor(props){
      super(props)

      this.state = {
        time: {
          min: 0,
          sec: 0,
          mili: 0, 
          
        },
        laps: [],
        
      }
      
    }

    getStart(){
      this.intervalIDs = setInterval(()=>{
        let min = this.state.time.min
        let sec = this.state.time.sec
        let mili = this.state.time.mili
        

        if(mili >= 10){
          sec = sec + 1;
          mili = 0;
        }
        if(sec >= 60){
          min = min + 1;
          sec = 0;
        }
        
        this.setState({
            ...this.state,
            time: {
              min,
              sec,
              mili: mili + 1,
             
            }
            
        })
        

     }, 100)
    }

    getLap(){
      let time = {
        ...this.state.time,
      }
      this.setState({
        ...this.state,
        laps: [time, ...this.state.laps] 

      })
    }
   
    
    getPause(){
      clearInterval(this.intervalIDs)
    }

    getReset(){
      this.setState({
        ...this.state,
         time:{
          min:0,
          sec: 0,
          mili: 0,
         },
         laps: []
      })
    }
    
    
  render(){
    return (
      <div className="App">
           <div className="container p-5">
              <div className="row">
                  <div className="col-sm-8 offset-sm-2 gap-5">
                    <Title Title="Twinkle Cats"></Title> 
                    <CountDown min={this.state.time.min} sec={this.state.time.sec} mili={this.state.time.mili}></CountDown>
                    <Controller
                      start={this.getStart.bind(this)}
                      pause={this.getPause.bind(this)}
                      reset={this.getReset.bind(this)}
                      laps={this.getLap.bind(this)}
                    ></Controller>
                    <Laps lap={this.state.laps}></Laps>
                  </div>
                 
  
              </div>
  
           </div>
      </div>
    );
  }
}

export default App;
