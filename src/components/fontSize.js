import React from 'react';

export default class FontSize extends React.Component{
    constructor(){
        super();
        this.state={
            fontSize: 10,
        };
    }
    little=()=>{
        if(this.state.fontSize>1){
            this.setState({
                fontSize: this.state.fontSize - 1,
            });
        }else{
            alert("Operação invalida, pq? pq sim");
        }
      
    }
    moreBig=()=>{
        this.setState({
            fontSize: this.state.fontSize + 1,
        });
    }
    render(){
        return(
            <div>
              <center>  <p>{this.state.fontSize}</p></center>
                <button onClick={this.moreBig}>+</button>
                <button onClick={this.little}>-</button>
            </div>
        );
    }
}