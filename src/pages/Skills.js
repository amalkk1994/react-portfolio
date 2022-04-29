import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";
import htmlIcon from "../assets/images/skills/html.png";
import cssIcon from "../assets/images/skills/css.png";
import jbaseIcon from "../assets/images/skills/jbase.png";
import jsIcon from "../assets/images/skills/js.png";
import mongoIcon from "../assets/images/skills/mongodb.png";
import nodeIcon from "../assets/images/skills/node-js.png";
import reactIcon from "../assets/images/skills/React.png";

import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 60px;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 50px;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 15px;
    animation: bounceIn 1s;
    transition: transform 1s;

    &:hover {
      transform: rotate(20deg);
    }

    h2 {
      display: inline-block;
      font-size: 16px;
      align-self: center;
    }

    img {
      width: 70px;
      align-self: center;
    }
  }
`;

const Skills = () => {
  return (
    <div>
      <AnimatedLetters
        text={`Skills`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="40"
        fontColor={theme.secondaryColor}
      />
      <StyledSection>
        <ul>
          <li>
            <img src={cssIcon} alt="css icon" />
            <h2>CSS</h2>
          </li>
          <li>
            <img src={htmlIcon} alt="css icon" />
            <h2>HTML</h2>
          </li>
          <li>
            <img src={jbaseIcon} alt="jbase icon" />
            <h2>JBASE</h2>
          </li>
          <li>
            <img src={jsIcon} alt="Javascript logo" />
            <h2>Javascript</h2>
          </li>
          <li>
            <img src={mongoIcon} alt="mongoDB logo" />
            <h2>mongoDB</h2>
          </li>
          <li>
            <img src={nodeIcon} alt="node logo" />
            <h2>Node JS</h2>
          </li>
          <li>
            <img src={reactIcon} alt="react logo" />
            <h2>React JS</h2>
          </li>
        </ul>
      </StyledSection>
    </div>
  );
};

export default Skills;
