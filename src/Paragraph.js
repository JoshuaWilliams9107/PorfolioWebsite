import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import React from 'react';


export default class Paragraph extends React.Component {
  visible = false;
  constructor(props) {
    super(props);
  }
  
  onChangeVisibility = (isVisible) => {
    this.visible = isVisible;
    this.forceUpdate();
  }
  render(){

    return (
        <VisibilitySensor active = {this.active} onChange={this.onChangeVisibility} active={!this.visible}>
        {({ isVisible }) => (
          <div>
            <Spring
            from={{opacity: 0}}
            to={{opacity: isVisible ? 1 : 0}}
            config={{duration:500, delay: this.props.delay}}
            >
            {props =>(
            <div style={props}>
               <p className={this.props.fontStyle}>
                {this.props.contents}
                </p>
            </div>
            )}
            </Spring>
          </div>
          )}
        </VisibilitySensor>

      
    );
  }
}

