import React, { useEffect, useState, useRef } from "react";
import Particles from 'react-particles-js';

export default function CanvasBackground() {

  return (
      <div className="Canvas"> 
      <Particles style ={{float:"left"}} width="35%" height="550px"
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              }, 
            }, 
            color: {
              value: '#99C1B9'
              },
              opacity: {
                value: 0.5,
                anim: {
                    enable: true
                    }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                      enable: true,
                      speed: 3
                  }
                },
                line_linked: {
                  color: {
                    value: '#99C1B9'
                  },
                  enable: true
                },
                move: {
                  speed: 1.5
                }
          }, 
        }} 

      /> 
   <Particles style ={{float:"right"}} width="35%" height="550px"
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              }, 
            }, 
            color: {
              value: '#99C1B9'
              },
              opacity: {
                value: 0.5,
                anim: {
                    enable: true
                    }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                      enable: true,
                      speed: 3
                  }
                },
                line_linked: {
                  color: {
                    value: '#99C1B9'
                  },
                  enable: true
                },
                move: {
                  speed: 1.5
                }
          }, 
        }} 
        />
    </div> 

  );
}

