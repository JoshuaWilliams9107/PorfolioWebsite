import portrait from './images/JoshuaWilliams.jpg';
import { Spring } from 'react-spring/renderprops';
import {Keyframes} from 'react-spring/renderprops';
import CanvasBackground from './Canvas.js'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive'

export default function ProjectView(){
  const [radioState, setRadioState] = useState('1');
  
  return(
    <div>
      <CategorySelector/>
      <ButtonArea/>
    </div>
    )

  
  function doStuff(number){
    setRadioState(number);
  }
  function ButtonArea(){
    const WebApps = [
    {
    exists:true, name:"Metube", thumbnail:require("./images/Metube.png"), link:"https://github.com/JoshuaWilliams9107/Metube",
    exists2:true,name2:"DriverHub", thumbnail2:require("./images/DriverHub.png"), link2:"https://github.com/JoshuaWilliams9107/DriverHub",
    exists3:true, name3:"This Website", thumbnail3:require("./images/PortfolioWebsite.png"), link3:"http://www.google.com/"
    }]
    const DesktopApps = [
    {exists:true, name:"Chess Program", thumbnail:require("./images/Chess.png"), link:"https://github.com/JoshuaWilliams9107/Chess",
     exists2:true, name2:"Rune Importer", thumbnail2:require("./images/RuneImporter.png"), link2:"http://www.google.com/",
     exists3:true, name3:"OpenGL Model Viewer", thumbnail3:require("./images/OpenGL.png"), link3:"http://www.google.com/"
    }]
    const VideoGames = [
    {exists:true, name:"VR Fishing Simulator", thumbnail:require("./images/FishingSimulator.png"), link:"http://www.google.com/",
     exists2:true, name2:"3D Tetris", thumbnail2:require("./images/3DTetris.png"), link2:"http://www.google.com/",
     exists3:true, name3:"Rubix Cube", thumbnail3:require("./images/RubixCube.png"), link3:"http://www.google.com/"
    }
    ]
    if(radioState == 1){
      return <DisplayTable projects={WebApps}/>;
    }else if(radioState == 2){
      return <DisplayTable projects={DesktopApps}/>;
    }else if(radioState == 4){
      return <DisplayTable projects={VideoGames}/>;
    }
  }
  //./images/blankPixel.png
  
  function DisplayTable(props) {
    const WebApps = props.projects.map((proj) => (

    <>
      <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{duration:500, delay: 0}}
            >
            {props =>(
            <span style={props}>
              <MediaQuery minWidth={800}>
                <tr>
                {proj.exists ? 
                	(
                <td className="ThumbnailBox">
                  <Button variant="dark" className="ButtonProject" href={proj.link}>
                    <img src={proj.thumbnail.default} alt = {proj.name} className="Thumbnail"/>
                    <p className="ParagraphFont">{proj.name}</p>
                  </Button>
                </td>
                ) : null}
                {proj.exists2 ? 
                	(
                <td className="ThumbnailBox">
                  <Button variant="dark" className="ButtonProject" href={proj.link2}>
                    <img src={proj.thumbnail2.default} alt = {proj.name2} className="Thumbnail"/>
                    <p className="ParagraphFont">{proj.name2}</p>
                  </Button>
                </td>
                ) : null}
                {proj.exists3 ? 
                	(
                <td className="ThumbnailBox">
                  <Button variant="dark" className="ButtonProject" href={proj.link3}>
                    <img src={proj.thumbnail3.default} alt = {proj.name3} className="Thumbnail"/>
                    <p className="ParagraphFont">{proj.name3}</p>
                  </Button>
                </td>
                ) : null}
                </tr>
              </MediaQuery>
              <MediaQuery maxWidth={799}>
              {proj.exists ? 
                	(
                <tr>
                <td className="ThumbnailBox">
                  <Button variant="dark" className="ButtonProject" href={proj.link}>
                  <img src={proj.thumbnail.default} alt = {proj.name} className="Thumbnail"/>
                  <p className="ParagraphFont">{proj.name}</p>
                  </Button>
                </td>
                </tr>
                ) : null}
                {proj.exists2 ? 
                	(
                <tr>
                <td className="ThumbnailBox">
                  <Button variant="dark" className="ButtonProject" href={proj.link2}>
                  <img src={proj.thumbnail2.default} alt = {proj.name2} className="Thumbnail"/>
                  <p className="ParagraphFont">{proj.name2}</p>
                  </Button>
                </td>
                </tr>
                ) : null}
                {proj.exists3 ? 
                	(
                <tr>
                <td className="ThumbnailBox">
                  <Button variant="dark" className="ButtonProject" href={proj.link3}>
                  <img src={proj.thumbnail3.default} alt = {proj.name3} className="Thumbnail"/>
                  <p className="ParagraphFont">{proj.name3}</p>
                  </Button>
                </td>
                </tr>
                 ) : null}
              </MediaQuery>
              </span>
            )}
            </Spring>
              </>
      ));

    return(
      <div className="ProjectBackground">
      <table className="ProjectTable">
        {WebApps}
      </table>
      </div>
      );
  }
  


  function CategorySelector() {
    const [checked, setChecked] = useState(false);


    const radios = [
      { name: 'Web Apps', value: '1' },
      { name: 'Desktop Apps', value: '2' },
      { name: 'Video Games', value: '4' }
    ];

    return (
      <div>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="outline-dark"
              name="radio"
              value={radio.value}
              checked={radioState === radio.value}
              onChange={
                (e) => {
                doStuff(e.currentTarget.value);
                }}
              size="lg"
              className="SelectorButton"
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}