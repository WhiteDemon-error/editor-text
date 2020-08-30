import React from 'react';
//import Fonts from './fontsJSON.js';


export default class Font extends React.Component{


    getFont=()=>{ //pega o nome da fonta qu eesta selecionada
      let font=  document.querySelector("select").options[document.querySelector("select").selectedIndex].text;
      
    }
    render(){ // exibi os nome de todas as fontes cadastradas
        const fonts=this.props.fontes;
        return(
            <div>
                <select onClick={this.getFont}>
                     {/*fonts.map(font =>{
                      return   <option>{font.nome} </option>
                     })  */   
                     }
                   
                </select>
            </div>
        );
    }
}