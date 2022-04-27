import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  letter-spacing: -8px;
  color: ${({ theme }) => theme.secondaryColor};
`;

const StyledNav = styled.nav`
  display: inline-block;
`;

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

  a {
    margin-right: 60px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #343434;
    padding: 10px;
    border-radius: 10px;

    &:hover {
      background-color: rgba(21, 170, 191, 0.5);
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo>AKK</Logo>
      <StyledNav>
        <NavLink exact="true" activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          About
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/experience">
          Experience
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/skills">
          Skills
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          Contact
        </NavLink>
      </StyledNav>
    </StyledNavBar>
  );
};

export default NavBar;
