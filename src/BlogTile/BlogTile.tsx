import { createContext, PropsWithChildren } from "react";
import Author from "./components/Author";
import Pic from "./components/Pic";
import PubDate from "./components/PubDate";
import Snippet from "./components/Snippet";
import Tags from "./components/Tags";
import Title from "./components/Title";

import { styled } from "styled-components";

type BlogTileProps = {
  data: {
    tags: { name: string; url: string }[];
    pic: string;
    pubdate: { year: number; month: number; day: number };
    title: string;
    snippet: string;
    author: {
      avatar: string;
      name: string;
    };
  };
} & PropsWithChildren;

const dataDefault = {
  data: {
    tags: [],
    pic: "",
    pubdate: { year: 0, month: 0, day: 0 },
    title: "",
    snippet: "",
    author: { avatar: "", name: "" },
  },
};

export const BlogTileContext = createContext<BlogTileProps>(dataDefault);

function BlogTile({ data, ...props }: BlogTileProps) {
  return (
    <BlogTileContext.Provider value={{ data }}>
      <article {...props}>
        <Pic />
        <Tags />
        <PubDate />
        <Title />
        <Snippet />
        <Author />
      </article>
    </BlogTileContext.Provider>
  );
}

const BlogTileStyled = styled(BlogTile)`
  & *:focus-visible {
    outline: 2px solid #f6d050;
  }

  background-color: #fff;
  border-radius: 20px;
  box-shadow: 7px 7px #000;
  color: #000;
  border-color: #000;
  border-style: solid;

  padding: 22px;
  text-align: left;
  cursor: default;

  width: 325px;
  height: 500px;
  font-size: 14px;
  border-width: 1px;

  @media (min-width: 1440px) {
    padding: 23px;
    width: 384px;
    height: 522px;
    font-size: 16px;
    box-shadow: 8px 8px #000;
  }
`;

export default BlogTileStyled;
