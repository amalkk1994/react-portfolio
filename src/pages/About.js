import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledLinksSection = styled.section`
  ul {
    list-style-type: none;
    animation: backInLeft 1s;
  }
  li {
    display: inline-block;

    a {
      &:hover svg {
        color: ${({ theme }) => theme.secondaryColor};
      }
    }
  }
`;

const About = () => {
  return (
    <div>
      <AnimatedLetters
        text={`About`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="40"
        fontColor={theme.secondaryColor}
      />
      <section>
        <p>
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          Currently i'm working as Specialist in banking domain with 4+ yrs of
          experience in T24 Temenos Payments Hub maintenance and development.
          Experienced with all stages of the development cycle for various
          clearings and core payments banking solutions. Worked for clients like
          Open Bank, ABN AMRO, CITCO, BIL, Varo Money, DFCC, DEKA Bank.
        </p>
        <p>
          I graduated from Rajagiri School of Engineering and Technology
          Kakkanad, Kerala as Bachelor of Technology in Computer Science and
          Enginerring in 2017 with 8.08 CGPA.
        </p>
      </section>
      <StyledLinksSection>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/amal-k-k-a54373226/"
            >
              <FontAwesomeIcon icon={faLinkedin} color={theme.tertiaryColor} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/amalkk1994"
            >
              <FontAwesomeIcon icon={faGithub} color={theme.tertiaryColor} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/amalkk1994"
            >
              <FontAwesomeIcon icon={faCodepen} color={theme.tertiaryColor} />
            </a>
          </li>
        </ul>
      </StyledLinksSection>
    </div>
  );
};

export default About;
