import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleCard from './TitleCard.js'
import Paragraph from './Paragraph.js'
import Header from './Header.js'
import SkillsTable from './SkillsTable.js'
import SoftwareTable from './SoftwareTable.js'
import Background from './Background.js'
import MediaQuery from 'react-responsive'
import ProjectView from './Projects.js'
import React from 'react';
import Title from './Title.js';
import Button from 'react-bootstrap/Button';
import Resume from './content/JoshuaWilliamsResume2020.pdf';

function App() {
  return (
    <div className="App">
      <Title/>
      <div className="BackgroundContainer">
      <header>
      <Background/>
      <div>
      <TitleCard/>
      </div>
      </header>
      <div className="TitleCardPlaceholder">
      </div>
      <div className="AboutMeContainer">
	      <Paragraph fontStyle="ParagraphFont" contents="Hello! I'm Josh" delay={500}/>
	      <MediaQuery minWidth={800}>
	      	<Paragraph fontStyle="ParagraphFontLeft" contents="I'm a recent Computer Science (BS) Clemson graduate with experience in the complete software development process.  I’ve loved programming and technology all of my life. I’m looking to find a position that allows me to constantly learn and use my experience as well as my passion to create valuable software." delay={500}/>
	      </MediaQuery>
	      <MediaQuery maxWidth={799}>
	      	<Paragraph fontStyle="ParagraphFontLeft" contents="I'm a recent Computer Science (BS) Clemson graduate with experience in the complete software development process.  I’ve loved programming and technology all of my life. I’m looking to find a position that allows me to constantly learn and use my experience as well as my passion to create valuable software." delay={0}/>
	      </MediaQuery>
	      <div className="Center">
	      	<Button variant="light" href={Resume} className="ButtonResume">View Resume</Button>
	      </div>
      </div>
      <Header fontStyle="SubHeader" contents="- SKILLS -" delay={0}/>
	    <SkillsTable/>
	    <SoftwareTable/>
      <Header fontStyle="SubHeader" contents="- PROJECTS -"/>
      <ProjectView/>
    <footer>
    <Header fontStyle="SubHeader" contents="- CONTACT -"/>
    <div>
      <span className="ContactButton">
      <Button  variant="light" href="https://www.linkedin.com/in/joshua-williams-computing/"><img src={process.env.PUBLIC_URL + "/images/LI-Logo.png"} className="LinkedIn"/></Button>
      </span>
    <MediaQuery maxWidth={799}>
    	<br/>
    </MediaQuery>
      <span className="ContactButton">
      <Button variant="light" href="https://github.com/JoshuaWilliams9107"><img src={process.env.PUBLIC_URL + "/images/GitHub_Logo.png"} className="Github"/></Button>
      </span>
    </div>
    </footer>
    </div>
    </div>
  );
}

export default App;
