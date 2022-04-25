import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";

const Home = () => {
  return (
    <div>
      <AnimatedLetters
        text="Hi There,"
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="60px"
      />
      <AnimatedLetters
        text={`I'm`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="50px"
      />
      <AnimatedLetters
        text={`Amal K K`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="120px"
      />
      <AnimatedLetters
        text="Web Developer"
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="65px"
      />
    </div>
  );
};

export default Home;
