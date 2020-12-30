import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import React, { useEffect, useState } from "react";
import MediaQuery from 'react-responsive'

export default class SoftwareTable extends React.Component {
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
           from={{opacity: 0, marginLeft: 300, marginRight: 300, float:"right"}}
            to={{opacity: isVisible ? 1 : 0, marginLeft: isVisible ? 0 : 300, marginRight: isVisible ? 0 : 300, float: isVisible ? "left" : "right"}}
            config={{delay: this.props.delay}}
            >
            {props =>(
            <div style={props}>
               <table className="SoftwareTable">
               <tbody>
               <tr>
                 <th className="TableHeaderCell">Software / Concepts</th>
                 
               </tr>
               <tr>
                 <td className="TableCell">Visual Studio (.NET Framework)</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">MySQL Workbench</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Linux Terminal</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Amazon Web Services</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Azure Devops</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Github</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">SSH</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Unity</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Docker</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Various IDEs</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">REST API</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Agile Development Practices</td>
               
               </tr>
               <tr>
                 <td className="TableFooterCell">Slack</td>
               
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
                 <th className="TableHeaderCell">Software</th>
                 
               </tr>
               <tr>
                 <td className="TableCell">Visual Studio (.NET Framework)</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">MySQL Workbench</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Linux Terminal</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Amazon Web Services</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Azure Devops</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Github</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">SSH</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">Unity</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Docker</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Various IDEs</td>
                 
               </tr>
               <tr>
                 <td className="TableCell">REST API</td>
                
               </tr>
               <tr>
                 <td className="TableCell">Microsoft Office Suite</td>
               
               </tr>
               <tr>
                 <td className="TableFooterCell">Sublime Text</td>
               
               </tr>
               </tbody>
               </table>

               </div>

      </MediaQuery>
      </>
      
    );
  }
}

