import { PostTileContext as Context } from "../../PostTile";
import styled from "styled-components";
import { type PropsWithChildrenClassName } from "react";

const Snippet = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ snippet }) => {
      return <div className={className}>{snippet}</div>;
    }}
  </Context.Consumer>
);

const SnippetStyled = styled(Snippet)`
  color: ${props => props.theme.subtle};
  margin-bottom: 1.5em;
  line-height: 1.5;
  font-weight: 600;

  @media (width >= 1440px) {
    font-weight: 500;
  }
`;

export default SnippetStyled;
