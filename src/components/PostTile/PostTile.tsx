import { type PropsWithChildrenClassName, createContext } from "react";
import Pic from "./components/Thumbnail";
import Tags from "./components/Tags";
import Title from "./components/Title";
import PubDate from "./components/PubDate";
import Snippet from "./components/Snippet";
import Author from "./components/Author";
import { styled } from "styled-components";

export type TPostTile = {
  postData: {
    link: string;
    tags: { name: string; link: string }[];
    thumb: string;
    pubdate: { year: number; month: number; day: number };
    title: string;
    snippet: string;
    author: {
      avatar: string;
      name: string;
      link: string;
    };
  };
};

const dataDefault = {
  link: "#",
  tags: [{ name: "Tag", link: "#" }],
  thumb: "https://placekitten.com/600/400",
  pubdate: { year: 1970, month: 1, day: 1 },
  title: "Lorem Ipsum",
  snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Et voluptate, minima perspiciatis corporis repudiandae voluptatum nesciunt
    omnis sapiente veniam ab eum asperiores assumenda
    in blanditiis ut sed magni accusantium consequatur.`,
  author: {
    avatar: "https://placekitten.com/200/200",
    name: "Lorem Author",
    link: "#",
  },
};

export const PostTileContext =
  createContext<TPostTile["postData"]>(dataDefault);

const PostTile = ({
  postData,
  className,
}: PropsWithChildrenClassName<TPostTile>) => (
  <PostTileContext.Provider value={{ ...postData }}>
    <article className={className}>
      <Pic />
      <Tags />
      <PubDate />
      <Title />
      <Snippet />
      <Author />
    </article>
  </PostTileContext.Provider>
);

const PostTileStyled = styled(PostTile)`
  &,
  & * {
    transition: all 0.1s ease-in-out;
  }

  & *:focus-visible {
    outline: 2px solid ${props => props.theme.primary};
  }

  background-color: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: 7px 7px ${props => props.theme.black};
  color: ${props => props.theme.black};
  border-color: ${props => props.theme.black};
  border-style: solid;
  padding: 22px;
  text-align: left;
  cursor: default;
  max-width: 325px;
  font-size: clamp(1em, 0.9em + 1vw * 0.25, 1.5em);
  border-width: 1px;

  @media (width >= 1440px) {
    padding: 23px;
    max-width: 384px;
    box-shadow: 8px 8px ${props => props.theme.black};
  }
`;

export default PostTileStyled;
