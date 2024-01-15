import { BlogTileContext } from "../BlogTile";
import { styled } from "styled-components";
import { PropsWithChildren } from "react";

function Tag(props: PropsWithChildren) {
  return <a {...props} />;
}

const TagStyled = styled(Tag)`
  font-weight: 800;
  background-color: #f6d050;
  padding: 6px 12px 7px;
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  line-height: 1.1;
  letter-spacing: -0.1px;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #000;
  }
  &:focus-visible {
    color: #000;
    outline: 2px solid #000 !important;
  }

  @media (min-width: 1440px) {
    padding: 7px 13px;
  }
`;

function Tags(props: PropsWithChildren) {
  return (
    <BlogTileContext.Consumer>
      {({ data }) => (
        <ul {...props}>
          {data.tags.map(t => (
            <li key={t.url}>
              <TagStyled as="a" href={t.url}>
                {t.name}
              </TagStyled>
            </li>
          ))}
        </ul>
      )}
    </BlogTileContext.Consumer>
  );
}

const TagsStyled = styled(Tags)`
  list-style: none;
  padding-left: 0;
  display: flex;
  font-size: 0.875em;
  flex-flow: row nowrap;
  margin-bottom: 1em;
  @media (min-width: 1440px) {
    margin-bottom: 14px;
  }
`;

export default TagsStyled;
