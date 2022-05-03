import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";
import styled from "styled-components";
import Roles from "../components/Roles";

const StyledDiv = styled.div``;

const ExpStyledSection = styled.section`
  h1,
  h2,
  h3 {
    animation: backInLeft 1s;
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
    animation: backInDown 1s;
  }

  li {
    line-height: 1.7;
    text-align: start;
    font-size: 1rem;
    position: relative;
    padding-left: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 5px;
    }
  }

  ul li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.secondaryColor};
  }

  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.8rem;
  }
`;

const Experience = () => {
  const workHistory = [
    {
      role: "Specialist",
      company: "Temenos India Pvt Ltd",
      duration: "2021 July - Present",
      responsibilites: [
        "High level analysis of issues and requirements raised by the client and provide solutions.",
        "Conduct daily status calls for maintenance team and keep track of all defect deliveries of the team.",
        "Mentor junior resources in the team",
        "Perform code reviews",
        "Perform regression analysis and provide solutions for inconsistent issues.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Temenos India Pvt Ltd",
      duration: "2017 July - 2021 July",
      responsibilites: [
        "Enhancements for SWIFT mapping, SEPA mapping and delivery preview.",
        "Cooperate with customer support team to analyze client requirements and bugs.",
        "Develop project concepts and maintain optimal workflow.",
        "Work with senior developers to manage critical, complex design projects for clients.",
        "Complete detailed programming and development tasks for client requirements and bug fixes.",
        "Carry out quality assurance tests to discover errors and optimize usability.",
        "Worked on SWIFT payments, different types of clearings, Instant payments and non-xml messages.",
      ],
    },
  ];

  return (
    <StyledDiv>
      <AnimatedLetters
        text={`Experience`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="40"
        fontColor={theme.secondaryColor}
      />
      <Roles workHistory={workHistory} />
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
