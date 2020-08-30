import React from 'react';
import './menu.css';
import Font from './font.js';
import FontSize from './fontSize.js';
import Color from './color.js';
import CasesSettings from './casesSettings';
import Frescuras from './frescuras.js';
//import Fonts from './fontsJSON.js';
export default class Menu extends React.Component{
    constructor(){
        super();
      //  console.log(Fonts);
    }
    render(){
        const  Fonts=[
            {nome:"Arial" , command:"Arial, Helvetica, sans-serif"},
            {nome:"Times New Roman" , command:"'Times New Roman', Times, serif"},
            {nome:"Bangers" , command:"'Bangers', cursive"},
            {nome:"Roboto" , command:"'Roboto', sans-serif"},
            {nome:"Russo One" , command:"'Russo One', sans-serif"},
        ];
        return(
        <div className="menu">
           
              <div className="item">  <Font fontes={Fonts} /></div>
              <div className="item">  <FontSize /></div>
               <div className="item"> <Color /></div>
               <div className="item"> <CasesSettings /> </div>
               <div className="item"> <Frescuras /></div>
               {console.log(Fonts)}
           
        </div>
        );
    }
}