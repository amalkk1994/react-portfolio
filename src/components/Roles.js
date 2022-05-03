import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledRoles = styled.div`
  display: flex;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

const StyledRole = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  animation: backInLeft 1s;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 20px;
    flex-direction: row;
  }

  button {
    background: none;
    border: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    border-right: solid 2px ${({ theme }) => theme.secondaryColor};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      border-right: none;
      border-bottom: solid 2px ${({ theme }) => theme.secondaryColor};
    }
    &:hover {
      background: rgba(21, 170, 191, 0.5);
    }
  }
`;

const StyledRoleRes = styled.div`
  padding-left: 20px;
  animation: backInDown 1s;

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.8rem;
  }

  ul {
    margin-top: 10px;
    list-style-type: none;
  }

  ul li {
    font-size: 1rem;
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    text-align: start;
  }
  ul li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

const Roles = ({ workHistory }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  return (
    <StyledRoles>
      <StyledRole>
        {workHistory.map((rl, idx) => (
          <button
            onClick={() => {
              setRoleIndex(idx);
            }}
          >
            {rl.role}
          </button>
        ))}
      </StyledRole>
      <StyledRoleRes>
        <h1>{workHistory[roleIndex].role}</h1>
        <h2>{workHistory[roleIndex].company}</h2>
        <h3>{workHistory[roleIndex].duration}</h3>
        <ul>
          {workHistory[roleIndex].responsibilites.map((res) => (
            <li>{res}</li>
          ))}
        </ul>
      </StyledRoleRes>
    </StyledRoles>
  );
};

export default Roles;
