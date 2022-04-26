import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";

const Home = () => {
  return (
    <div>
      <AnimatedLetters
        text="Hi There,"
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="60"
      />
      <AnimatedLetters
        text={`I'm`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="50"
      />
      <AnimatedLetters
        text={`Amal K K`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="120"
        fontColor={theme.secondaryColor}
      />
      <AnimatedLetters
        text="Web Developer"
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="65"
      />
    </div>
  );
};

export default Home;
