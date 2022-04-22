import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontSize};
  display: inline-block;
  animation: ${(props) => props.animationName} 1s;
  animation-fill-mode: both;
  text-align: center;
  min-width: 1rem;
  animation-delay: ${(props) => (props.idx * 1) / 5}s;
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
  fontSize = "24px",
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
        >
          {char}
        </StyledSpan>
      ))}
    </div>
  );
};

export default AnimatedLetters;

// rubberBand
