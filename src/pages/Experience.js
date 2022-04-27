import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";

const Experience = () => {
  return (
    <div>
      <AnimatedLetters
        text={`Experience`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="40"
        fontColor={theme.secondaryColor}
      />
    </div>
  );
};

export default Experience;
