import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";

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
    </div>
  );
};

export default Skills;
