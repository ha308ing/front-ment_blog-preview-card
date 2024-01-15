import styled from "styled-components";
import { PostTileContext as Context } from "../../PostTile";
import { type FC } from "react";

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.black};

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Title: FC = props => (
  <Context.Consumer>
    {({ title }) => {
      return (
        <h2 {...props}>
          <StyledLink href="#">{title}</StyledLink>
        </h2>
      );
    }}
  </Context.Consumer>
);

const TitleStyled = styled(Title)`
  font-size: 21px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 17px;
  line-height: 1;
  letter-spacing: -0.5px;

  @media (min-width: 1440px) {
    margin-bottom: 18px;
    font-size: 24px;
    letter-spacing: normal;
  }
`;

export default TitleStyled;
