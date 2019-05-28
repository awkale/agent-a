import React from 'react';
import styled from 'styled-components';

const MovingDot = styled.div`
  position: absolute;
  left: 0;
  top: 10%;
  z-index: -1;

  @media (max-width: ${props => props.theme.md}) {
    top: 20%;
  }
`;

function AnimatedGraph() {
  return (
    <MovingDot>
      <svg viewBox="0 0 1440 1024" version="1.1">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Desktop-HD">
            <path
              d="M191.996094,752 C365.677188,493.449557 1118.44847,39.7388503 1383.99609,687.268912"
              id="Path-2"
              stroke="#333333"
              strokeWidth="4"
            />
            <path
              d="M1282,859.353626 C1101.84847,620.282165 495.569682,15.8246026 239,510.640376"
              id="Path"
              stroke="#333333"
              strokeWidth="4"
            />
            <circle id="Oval" fill="#D22630" cx="240.5" cy="511.5" r="7.5" />
            <circle
              id="Oval-Copy"
              fill="#D22630"
              cx="191.5"
              cy="752.5"
              r="7.5"
            />
            <circle
              id="Oval-Copy-2"
              fill="#D22630"
              cx="1383.5"
              cy="688.5"
              r="7.5"
            />
            <circle id="Oval" fill="#D22630" cx="1282.5" cy="859.5" r="7.5" />
          </g>
        </g>
        <circle cx="" cy="" r="7" fill="#d22630">
          <animateMotion dur="10" repeatCount="indefinite">
            <mpath xlinkHref="#Path" />
          </animateMotion>
        </circle>
        <circle cx="" cy="" r="7" fill="#d22630">
          <animateMotion dur="14s" repeatCount="indefinite">
            <mpath xlinkHref="#Path-2" />
          </animateMotion>
        </circle>
      </svg>
    </MovingDot>
  );
}

export default AnimatedGraph;
