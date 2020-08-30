import React from 'react';

export default class Color extends React.Component{

    constructor(){
        super();
        this.state={
            colorDefault:"black",
            color:"black",
        };
    }

    colorChange=()=>{
        console.log(document.querySelector("input").value);
        this.setState({
            color: document.querySelector("input").value
        });
    }
    render(){
        return(
            <div>
                <input type="color" onChange={this.colorChange}></input>
             <center>   <p>{this.state.color}</p></center>
            </div>
        );
    }
}
