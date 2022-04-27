import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";

const Contact = () => {
  return (
    <div>
      <AnimatedLetters
        text={`Contact`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="40"
        fontColor={theme.secondaryColor}
      />
    </div>
  );
};

export default Contact;
