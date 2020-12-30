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

  
  function changeState(number){
    setRadioState(number);
  }
  function ButtonArea(){
    const WebApps = [
    {
    key: 1, exists:true, name:"Metube", thumbnail:process.env.PUBLIC_URL + "/images/Metube.png", link:"https://github.com/JoshuaWilliams9107/Metube",
    exists2:true,name2:"DriverHub", thumbnail2:process.env.PUBLIC_URL + "/images/DriverHub.png", link2:"https://github.com/JoshuaWilliams9107/DriverHub",
    exists3:true, name3:"Porfolio Website", thumbnail3:process.env.PUBLIC_URL + "/images/PortfolioWebsite.png", link3:"https://github.com/JoshuaWilliams9107/PorfolioWebsite"
    }]
    const DesktopApps = [
    {key: 2, exists:true, name:"Chess Program", thumbnail:process.env.PUBLIC_URL + "/images/Chess.png", link:"https://github.com/JoshuaWilliams9107/Chess",
     exists2:true, name2:"Rune Importer", thumbnail2:process.env.PUBLIC_URL + "/images/RuneImporter.png", link2:"https://github.com/JoshuaWilliams9107/RuneImporter"
    }]
    const VideoGames = [
    {key: 3, exists:true, name:"VR Fishing Simulator", thumbnail:process.env.PUBLIC_URL + "/images/FishingSimulator.png", link:"https://gitlab.com/group-6-vr/fishing-simulator",
     exists2:true, name2:"Falling Puzzle Game", thumbnail2:process.env.PUBLIC_URL + "/images/FallingPuzzleGame.png", link2:"https://github.com/JoshuaWilliams9107/Falling-Puzzle-Game",
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
      <Spring
            key={proj.key}
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{duration:500, delay: 0}}
            >
            {props =>(
            <div style={props} className="table-row">
              <MediaQuery minWidth={800}>
                
                {proj.exists ? 
                	(
                <div className="cell">
                  <Button variant="dark" className="ButtonProject" href={proj.link}>
                    <img src={proj.thumbnail} alt = {proj.name} className="Thumbnail"/>
                    <p className="ParagraphFont">{proj.name}</p>
                  </Button>
                </div>
                ) : null}
                {proj.exists2 ? 
                	(
                <div className="cell">
                  <Button variant="dark" className="ButtonProject" href={proj.link2}>
                    <img src={proj.thumbnail2} alt = {proj.name2} className="Thumbnail"/>
                    <p className="ParagraphFont">{proj.name2}</p>
                  </Button>
                </div>
                ) : null}
                {proj.exists3 ? 
                	(
                <div className="cell">
                  <Button variant="dark" className="ButtonProject" href={proj.link3}>
                    <img src={proj.thumbnail3} alt = {proj.name3} className="Thumbnail"/>
                    <p className="ParagraphFont">{proj.name3}</p>
                  </Button>
                </div>
                ) : null}
                <br/>
              </MediaQuery>
              <MediaQuery maxWidth={799}>
              
              {proj.exists ? 
                	(
                <>
                <div className="table-row">
                  <Button variant="dark" className="ButtonProject" href={proj.link}>
                  <img src={proj.thumbnail} alt = {proj.name} className="Thumbnail"/>
                  <p className="ParagraphFont">{proj.name}</p>
                  </Button>
                </div>
                <br/>
                </>
                ) : null}
                {proj.exists2 ? 
                	(
                <>
                <div className="table-row">
                  <Button variant="dark" className="ButtonProject" href={proj.link2}>
                  <img src={proj.thumbnail2} alt = {proj.name2} className="Thumbnail"/>
                  <p className="ParagraphFont">{proj.name2}</p>
                  </Button>
                </div>
                <br/>
                </>
                ) : null}
                {proj.exists3 ? 
                	(
                <>
                <div className="table-row">
                  <Button variant="dark" className="ButtonProject" href={proj.link3}>
                  <img src={proj.thumbnail3} alt = {proj.name3} className="Thumbnail"/>
                  <p className="ParagraphFont">{proj.name3}</p>
                  </Button>
                </div>
                <br/>
                </>
                 ) : null}
              </MediaQuery>
              </div>
            )}
            </Spring>
      ));

    return(
      <div className="ProjectBackground">
      <div className="ProjectTable">
        {WebApps}
      </div>
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
                changeState(e.currentTarget.value);
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