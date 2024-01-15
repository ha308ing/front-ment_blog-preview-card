import { styled } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  place-content: center;
  place-items: center;
  background-color: #f6d050;
  text-align: center;
  position: relative;
  top: 7px;

  @media (min-width: 1440px) {
    top: 5px;
  }
`;

export default Container;
