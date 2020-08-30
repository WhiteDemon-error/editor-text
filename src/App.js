import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu.js';


export default class App extends React.Component{
  
textSelected=()=>{
  var txtarea = document.querySelector("textarea");
    // obtain the index of the first selected character
    var start = txtarea.selectionStart;
    // obtain the index of the last selected character
    var finish = txtarea.selectionEnd;
    // obtain the selected text
    var textSelect = txtarea.value.substring(start, finish);
       
}
  render(){
    return(
      <div>
        <Menu />
       <textarea onMouseUp={this.textSelected} />
      </div>
    );
  }
}
