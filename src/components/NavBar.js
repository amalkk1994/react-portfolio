import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  display: none;
`;

const StyledNav = styled.nav`
  display: inline-block;
`;

const StyledNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;

  a {
    margin-right: 60px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo>A</Logo>
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
