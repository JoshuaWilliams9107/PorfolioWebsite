import { Spring } from 'react-spring/renderprops';
import {Keyframes} from 'react-spring/renderprops';
import CanvasBackground from './Canvas.js'

export default function TitleCard() {
  return (
    <div className="TitleCard">
    
    <Spring

    from={{marginTop: '-50vh'}}
    to={{marginTop: '0px auto'}}
    
    >
    {props =>(
      <div style={props}>
        <Spring

        from={{opacity: 0, zIndex: 1}}
        to={{opacity: 1, zIndex: 1}}

        >
        {props =>(
        <div style={props}>

          <div className="InnerTitle"> 
            <CanvasBackground/>
            <img className="CircleImage" src={process.env.PUBLIC_URL + "/images/JoshuaWilliams.jpg"}/>
            <h1 className="WhiteHeader">Joshua Williams</h1>
            <p className="WhiteFooter"> Full-Stack Developer </p>
        </div>
        </div>
        )}
        </Spring>
      </div>
      )}
    
    </Spring>
    </div>
  );
}

