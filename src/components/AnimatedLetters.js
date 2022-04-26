import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontSize}px;
  display: inline-block;
  animation: ${(props) => props.animationName} 1s;
  animation-fill-mode: both;
  text-align: center;
  min-width: 1rem;
  color: ${({ fontColor }) => fontColor};
  animation-delay: ${(props) => (props.idx * 1) / 5}s;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${(props) => (props.fontSize * 1) / 2}px;
  }

  &:hover {
    color: red;
    animation: ${(props) => props.animationHover} 1s;
    animation-fill-mode: both;
  }
`;

const AnimatedLetters = ({
  text,
  animationName = "fadeIn",
  animationHover = "fadeOut",
  fontSize = "24",
  fontColor = "#343434",
  colorHover = "red",
}) => {
  const [animationIn, setAnimationIn] = useState(animationName);
  useEffect(() => {
    setTimeout(() => {
      setAnimationIn("none");
    }, 4000);
  }, []);

  return (
    <div>
      {text.split("").map((char, idx) => (
        <StyledSpan
          animationName={animationIn}
          idx={idx}
          animationHover={animationHover}
          fontSize={fontSize}
          fontColor={fontColor}
          colorHover={colorHover}
        >
          {char}
        </StyledSpan>
      ))}
    </div>
  );
};

export default AnimatedLetters;

// rubberBand
