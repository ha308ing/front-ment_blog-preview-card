import { PostPreviewContext as Context } from "../../PostPreview";
import { styled } from "styled-components";

import AuthorAvatar from "./AuthorAvatar";
import AuthorName from "./AuthorName";
import { type PropsWithChildrenClassName } from "react";
import Link from "@/components/Link";

const Author = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ author }) => {
      return (
        <Link href={author.link} className={className}>
          <AuthorAvatar src={author.avatar} alt={author.name} />
          <AuthorName>{author.name}</AuthorName>
        </Link>
      );
    }}
  </Context.Consumer>
);

const AuthorStyled = styled(Author)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  max-width: fit-content;
  font-size: 1em;

  & img {
    margin-right: 0.75em;
  }
`;

export default AuthorStyled;
