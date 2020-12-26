import React from 'react';


export default class Icon extends React.Component {
  visible = false;
  constructor(props) {
    super(props);
  }
  
  onChangeVisibility = (isVisible) => {
    this.visible = isVisible;
    this.forceUpdate();
  }
  render(){
    let imgSrc = require("./images/svg/" + Math.floor(Math.random() * 149+1) + ".svg");
    let style = {top: Math.floor(Math.random() * 130) + "%", right: Math.floor(Math.random() * 100) + "%"};
    return (

        <img src={imgSrc.default} className="Icon" style={style}/>
      
    );
  }
}

