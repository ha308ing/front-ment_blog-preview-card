import { styled } from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  place-items: center;
  background-color: ${props => props.theme.primary};
  text-align: center;
  padding: 3em 5em;
  gap: 3em;
`;

export default Container;
