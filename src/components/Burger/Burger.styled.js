import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3 linear;
    position: relative;
    transform-origin: 1px;
  }
`;
