import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import { useOnClickOutside } from "../hooks";
import { useState, useRef } from "react";

const StyledContainer = styled.div`
  margin: 5% 10% 5% 10%;
`;

const Layout = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <NavBar />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </div>
  );
};

export default Layout;
