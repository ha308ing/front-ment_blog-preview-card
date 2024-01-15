import styled from "styled-components";
import { BlogTileContext } from "../BlogTile";
import { PropsWithChildren } from "react";

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;

  &:hover {
    color: #f6d050;
  }
`;

function Title(props: PropsWithChildren) {
  return (
    <BlogTileContext.Consumer>
      {({ data }) => {
        const { title } = data;
        return (
          <h2 {...props}>
            <StyledLink href="#">{title}</StyledLink>
          </h2>
        );
      }}
    </BlogTileContext.Consumer>
  );
}

const TitleStyled = styled(Title)`
  font-size: 21px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 17px;
  line-height: 1;
  letter-spacing:-.5px;

  @media (min-width: 1440px) {
    margin-bottom: 18px;
    font-size: 24px;
    letter-spacing: normal;
  }
`;

export default TitleStyled;
