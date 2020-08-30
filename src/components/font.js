import React from 'react';
//import Fonts from './fontsJSON.js';


export default class Font extends React.Component{


    getFont=()=>{
      let font=  document.querySelector("select").options[document.querySelector("select").selectedIndex].text;
      console.log(font);
    }
    render(){
        const fonts=this.props.fontes;
        return(
            <div>
                <select onClick={this.getFont}>
                     {fonts.map((font , index)=>{})
                
                     }
                   
                </select>
            </div>
        );
    }
}