import { type PropsWithChildrenClassName } from "react";
import { PostTileContext as Context } from "../../PostTile";
import { styled } from "styled-components";

const Tag = styled.a`
  font-weight: 800;
  background-color: ${props => props.theme.primary};
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
    color: ${props => props.theme.black};
  }
  &:focus-visible {
    color: ${props => props.theme.black};
    outline: 2px solid ${props => props.theme.black} !important;
  }

  @media (min-width: 1440px) {
    padding: 7px 13px;
  }
`;

const Tags = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ tags }) => (
      <ul className={className}>
        {tags.map(tag => (
          <li key={tag.link}>
            <Tag as="a" href={tag.link}>
              {tag.name}
            </Tag>
          </li>
        ))}
      </ul>
    )}
  </Context.Consumer>
);

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
