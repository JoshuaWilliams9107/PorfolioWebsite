import React, { useEffect, useState, useRef } from "react";
import Particles from 'react-particles-js';

export default function Background() {
  console.log(document.getElementById("root").offsetHeight);
  return (
      
        <div className="Background"> 
        <Particles className="Background" width="100%" height="100%"
          params={{ 

            particles: { 
              number: { 
                value: 50, 
                density: { 
                  enable: true, 
                  value_area: 1000, 
                }, 
              }, 
              color: {
                value: '#6FA6A4'
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
                    enable: false
                  },
                  move: {
                    speed: 1
                  }
            }, 
          }} 
        /> 
     
      </div> 


  );
}

