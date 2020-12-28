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

function App() {
  return (
    <div className="App">
      <div className="BackgroundContainer">
      <Background/>
      <div>
      <TitleCard/>
      </div>
      <div className="TitleCardPlaceholder">
      </div>
     <br/><br/><br/><br/><br/><br/>
     
      <Paragraph fontStyle="ParagraphFont" contents="Greetings! My name is Josh!" delay={500}/>
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
      <Paragraph fontStyle="SubHeader" contents="- ABOUT ME -" delay={0}/>
      <br/>
      <br/>
      <br/>
      <Paragraph fontStyle="SubHeader" contents="- SKILLS -" delay={0}/>

      <div >
      <SkillsTable/>

      
      <SoftwareTable/>
      </div>
      <Paragraph fontStyle="ParagraphFont" contents="Insert" delay={0}/>
      <Paragraph fontStyle="ParagraphFont" contents="A couple of lines here" delay={0}/>
      <Paragraph fontStyle="ParagraphFont" contents="Talking about me" delay={0}/>
      <Paragraph fontStyle="ParagraphFont" contents="As a Person" delay={0}/>
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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>Hi</p>
      <br/>
    </div>
    </div>
  );
}

export default App;
