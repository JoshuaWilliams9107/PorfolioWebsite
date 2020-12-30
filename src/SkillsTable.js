import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import React, { useEffect, useState } from "react";
import MediaQuery from 'react-responsive'

export default class SkillTable extends React.Component {
  visible = false;
  constructor(props) {
    super(props);
  }
  onChangeVisibilityReversed = (isVisible) => {
    this.visible = !isVisible;
    this.forceUpdate();
  }
  onChangeVisibility = (isVisible) => {
    this.visible = isVisible;
    this.forceUpdate();
  }
  render(){
    const isMobile = window.innerWidth <= 500;
    return (
      <>
      <MediaQuery minWidth={800} onChange={this.onChangeVisibilityReversed}>
        <VisibilitySensor partialVisibility={true} active = {this.active} onChange={this.onChangeVisibility} active={!this.visible}>
        {({ isVisible }) => (
          <div className="floatRight">
            <Spring
           from={{opacity: 0, marginLeft: 300, marginRight: 300, float:"left"}}
            to={{opacity: isVisible ? 1 : 0, marginLeft: isVisible ? 0 : 300, marginRight: isVisible ? 0 : 300, float: isVisible ? "right" : "left"}}
            config={{delay: this.props.delay}}
            >
            {props =>(
            <div style={props}>
               <table className="SoftwareTable">
               <tbody>
               <tr>
                 <th className="TableHeaderCell">Languages / Frameworks</th>
                 
               </tr>
               <tr>
                 <td className="TableCell">C</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">C++</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Java</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Python</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">C#</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Javascript</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">HTML5</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">CSS</td>
                
               </tr>
               <tr>
                 <td className="TableCell">MySQL</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Redis</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Node JS</td>
                
               </tr>
               <tr>
                 <td className="TableCell">React</td>
               
               </tr>
               <tr>
                 <td className="TableFooterCell">PHP</td>
               
               </tr>
               </tbody>
               </table>
            </div>
            )}
            </Spring>
          </div>
          )}
        </VisibilitySensor>
      </MediaQuery>
      <MediaQuery maxWidth={799}>
        
        <div className="mobileTable">
        <table className="SoftwareTable">
        <tbody>
               <tr>
                 <th className="TableHeaderCell">Languages / Technologies</th>
                 
               </tr>
               <tr>
                 <td className="TableCell">C</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">C++</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Java</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Python</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">C#</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Javascript</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">HTML5</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">CSS</td>
                
               </tr>
               <tr>
                 <td className="TableCell">MySQL</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Redis</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Node JS</td>
                
               </tr>
               <tr>
                 <td className="TableCell">React</td>
               
               </tr>
               <tr>
                 <td className="TableFooterCell">PHP</td>
               
               </tr>
               </tbody>
               </table>

               </div>

      </MediaQuery>
      </>
      
    );
  }
}