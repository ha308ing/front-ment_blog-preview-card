import { ImgHTMLAttributes, PropsWithChildren } from "react";
import { BlogTileContext } from "../BlogTile";
import { styled } from "styled-components";

function Avatar(
  props: PropsWithChildren & ImgHTMLAttributes<HTMLImageElement>
) {
  return <img {...props} />;
}

const AvatarStyled = styled(Avatar)`
  clip-path: circle();
  height: 2rem;
`;

function AuthorName(props: PropsWithChildren) {
  return <span {...props} />;
}

const AuthorNameStyled = styled(AuthorName)`
  font-weight: 800;
`;

function Author(props: PropsWithChildren) {
  return (
    <BlogTileContext.Consumer>
      {({ data }) => {
        const { author } = data;
        return (
          <a href="/author" {...props}>
            <AvatarStyled src={author.avatar} />
            <AuthorNameStyled>{author.name}</AuthorNameStyled>
          </a>
        );
      }}
    </BlogTileContext.Consumer>
  );
}

const AuthorStyled = styled(Author)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  text-decoration: none;
  max-width: fit-content;
  font-size: 1em;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #000;
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
