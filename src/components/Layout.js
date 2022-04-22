import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 5% 10% 5% 10%;
`;

const Layout = () => {
  return (
    <div>
      <NavBar />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </div>
  );
};

export default Layout;
