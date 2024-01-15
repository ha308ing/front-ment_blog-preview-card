import { type FC } from "react";
import { PostTileContext as Context } from "../../PostTile";
import { styled } from "styled-components";

import AuthorAvatar from "./AuthorAvatar";
import AuthorName from "./AuthorName";

const Author: FC = props => (
  <Context.Consumer>
    {({ author }) => {
      return (
        <a href={author.link} {...props}>
          <AuthorAvatar src={author.avatar} />
          <AuthorName>{author.name}</AuthorName>
        </a>
      );
    }}
  </Context.Consumer>
);

const AuthorStyled = styled(Author)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  text-decoration: none;
  max-width: fit-content;
  font-size: 1em;

  &:link,
  &:visited {
    color: ${props=>props.theme.black};
  }

  &:hover,
  &:active {
    color: ${props=>props.theme.primary};
  }

  & img {
    margin-right: 0.75rem;
  }

  @media (min-width: 1440px) {
    letter-spacing: normal;
    font-size: 14px;
  }
`;

export default AuthorStyled;
