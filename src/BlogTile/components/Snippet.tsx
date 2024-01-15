import { PropsWithChildren } from "react";
import { BlogTileContext } from "../BlogTile";
import styled from "styled-components";

function Snippet(props: PropsWithChildren) {
  return (
    <BlogTileContext.Consumer>
      {({ data }) => {
        const { snippet } = data;
        return <div {...props}>{snippet}</div>;
      }}
    </BlogTileContext.Consumer>
  );
}

const SnippetStyled = styled(Snippet)`
  color: hsl(0, 0%, 50%);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  @media (min-width: 1440px) {
    margin-bottom: 24px;
    font-weight: 500;
  }
`;

export default SnippetStyled;
