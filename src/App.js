import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleCard from './TitleCard.js'
import Paragraph from './Paragraph.js'
import SkillsTable from './SkillsTable.js'
import SoftwareTable from './SoftwareTable.js'
import Icon from './Icon.js'
import Background from './Background.js'
import MediaQuery from 'react-responsive'
import ProjectView from './Projects.js'
import React from 'react';
import Title from './Title.js';
import Button from 'react-bootstrap/Button';
import Resume from './content/JoshuaWilliamsResume2020.pdf';
import Carousel from 'react-bootstrap/Carousel';
import LI from './images/LI-Logo.png';
import Github from './images/GitHub_Logo.png';

function App() {
  return (

    <div className="App">
      <Title/>
      <div className="BackgroundContainer">
      <Background/>
      <div>
      <TitleCard/>
      </div>
      <div className="TitleCardPlaceholder">
      </div>
     <br/><br/><br/><br/><br/><br/>
     
      <Paragraph fontStyle="ParagraphFont" contents="Hello! I'm Josh" delay={500}/>
    <br/><br/><br/>
    <MediaQuery minWidth={800}>
      <Paragraph fontStyle="ParagraphFont" contents="I'm a recent Clemson graduate with a passion for making high quality software." delay={750}/>
    </MediaQuery>
    <MediaQuery maxWidth={799}>
      <Paragraph fontStyle="ParagraphFont" contents="I'm a recent Clemson graduate with a passion for making high quality software." delay={0}/>
    </MediaQuery>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Paragraph fontStyle="SubHeader" contents="- ABOUT ME -" delay={0}/>
      <Paragraph fontStyle="ParagraphFont" contents="" delay={100}/>

      <Paragraph fontStyle="ParagraphFont" contents="I've enjoyed programming all my life and I'm always excited to learn new technologies." delay={100}/>
      <Button variant="light" href={Resume} className="ButtonResume" target>View Resume</Button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Paragraph fontStyle="SubHeader" contents="- SKILLS -" delay={0}/>

      <div >
      <SkillsTable/>

      
      <SoftwareTable/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Paragraph fontStyle="SubHeader" contents="- PROJECTS -"/>
      <ProjectView/>
      <br/>
      <br/>
      <Paragraph fontStyle="SubHeader" contents="- CONTACT -"/>

      <br/>
      <span className="ContactButton">
      <Button  variant="light" href="https://www.linkedin.com/"><img src={LI} className="LinkedIn"/></Button>
      </span>
      <span className="ContactButton">
      <Button variant="light" href="https://www.github.com/"><img src={Github} className="Github"/></Button>
      </span>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>
    </div>
    </div>
  );
}

export default App;
