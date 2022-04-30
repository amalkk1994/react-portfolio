import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";
import styled from "styled-components";

const StyledDiv = styled.div``;

const ExpStyledSection = styled.section`
  ul {
    list-style-type: none;
  }
  li {
    line-height: 1.7;
  }
`;

const Experience = () => {
  return (
    <StyledDiv>
      <AnimatedLetters
        text={`Experience`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="40"
        fontColor={theme.secondaryColor}
      />
      <ExpStyledSection>
        <h1>Specialist</h1>
        <h2>Temenos India Pvt Ltd</h2>
        <h3>July 2021 - Present</h3>
        <ul>
          <li>
            High level analysis of issues and requirements raised by the client
            and provide solutions.
          </li>
          <li>
            Conduct daily status calls for maintenance team and keep track of
            all defect deliveries of the team.
          </li>
          <li>Mentor junior resources in the team</li>
          <li>Perform code reviews</li>
          <li>
            Perform regression analysis and provide solutions for inconsistent
            issues.
          </li>
        </ul>
      </ExpStyledSection>
      <ExpStyledSection>
        <h1>Software Engineer</h1>
        <h2>Temenos India Pvt Ltd</h2>
        <h3>July 2017 - July 2021</h3>
        <ul>
          <li>
            Enhancements for SWIFT mapping, SEPA mapping and delivery preview.
          </li>
          <li>
            Cooperate with customer support team to analyze client requirements
            and bugs.
          </li>
          <li>Develop project concepts and maintain optimal workflow.</li>
          <li>
            Work with senior developers to manage critical, complex design
            projects for clients.
          </li>
          <li>
            Complete detailed programming and development tasks for client
            requirements and bug fixes.
          </li>
          <li>
            Carry out quality assurance tests to discover errors and optimize
            usability.
          </li>
          <li>
            Worked on SWIFT payments, different types of clearings, Instant
            payments and non-xml messages.
          </li>
        </ul>
      </ExpStyledSection>
      <ExpStyledSection>
        <h1>Achievements</h1>
        <ul>
          <li>GEM (Going Extra Mile Award)</li>
          <li>On-site Support for OpenBank Spain</li>
        </ul>
      </ExpStyledSection>
    </StyledDiv>
  );
};

export default Experience;
