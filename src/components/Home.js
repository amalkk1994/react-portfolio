import React from "react";
import AnimatedLetters from "./AnimatedLetters";
// import styled from "styled-components";

/*

const StyledMainHeader = styled.h1`
  font-size: 90px;
  animation: rubberBand 2s;
  animation-fill-mode: both;
`;

const StyledSpan = styled.span`
  font-size: 90px;
  display: inline-block;
  animation: rubberBand 2s;
  animation-fill-mode: both;
  animation-delay: ${(props) => (props.idx * 1 + 1) / 10}s;
  &:hover {
    color: red;
    animation: bounce 1s;
    animation-fill-mode: both;
  }
`;

*/

const Home = () => {
  // const sampleString = "Hello world";

  /*
  return (
    <div>
      <StyledMainHeader>Hello world</StyledMainHeader>
      {sampleString.split("").map((char, idx) => (
        <StyledSpan idx={idx}>{char}</StyledSpan>
      ))}
    </div>
  );
  */
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
