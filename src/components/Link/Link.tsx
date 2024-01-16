import styled from "styled-components";

const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.black};
  transition: color 0.1s ease-in-out;

  &:link,
  &:visited {
    color: ${props => props.theme.black};
  }

  &:hover,
  &:active {
    color: ${props => props.theme.primary};
  }
`;

export default LinkStyled;
