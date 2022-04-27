import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";

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
      </section>
    </div>
  );
};

export default About;
