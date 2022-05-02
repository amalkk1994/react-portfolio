import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";

const Home = () => {
  return (
    <div>
      <AnimatedLetters
        text="Hello,"
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="60"
        fontSizeMobile="30"
      />
      <AnimatedLetters
        text={`I'm`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="50"
        fontSizeMobile="25"
      />
      <AnimatedLetters
        text={`Amal K K`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="120"
        fontColor={theme.secondaryColor}
        fontSizeMobile="60"
      />
      <AnimatedLetters
        text="Web Developer"
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="65"
        fontSizeMobile="32.5"
      />
    </div>
  );
};

export default Home;
