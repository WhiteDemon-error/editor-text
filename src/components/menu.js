import React from 'react';
import './menu.css';
import Font from './font.js';
import FontSize from './fontSize.js';
import Color from './color.js';
import CasesSettings from './casesSettings';
import Frescuras from './frescuras.js';
import FontsJSON from './fontsJSON.js';

export default class Menu extends React.Component{

    constructor(){
        super();
      console.log(FontsJSON[0].nome);
     
    }
    
    render(){
       
        return(
        <div className="menu">
           
              <div className="item">  <Font fontes={FontsJSON} /></div>
              <div className="item">  <FontSize /></div>
               <div className="item"> <Color /></div>
               <div className="item"> <CasesSettings /> </div>
               <div className="item"> <Frescuras /></div>
             
           
        </div>
        );
    }
}