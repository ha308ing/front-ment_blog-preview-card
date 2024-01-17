import { type PropsWithChildrenClassName, createContext } from "react";
import Pic from "./components/Thumbnail";
import Tags from "./components/Tags";
import Title from "./components/Title";
import PubDate from "./components/PubDate";
import Snippet from "./components/Snippet";
import Author from "./components/Author";
import { styled } from "styled-components";

export type TPostPreviewProps = {
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

export const PostPreviewContext =
  createContext<TPostPreviewProps["postData"]>(dataDefault);

const PostPreview = ({
  postData,
  className,
}: PropsWithChildrenClassName<TPostPreviewProps>) => (
  <PostPreviewContext.Provider value={{ ...postData }}>
    <article className={className}>
      <Pic />
      <Tags />
      <PubDate />
      <Title />
      <Snippet />
      <Author />
    </article>
  </PostPreviewContext.Provider>
);

const PostPreviewStyled = styled(PostPreview)`
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

  /* font-size: clamp(1em, 0.9em + 1vw * 0.25, 1.5em); */
  font-size: 14px;
  border-width: 1px;
  height: 502px;

  @media (width >= 1440px) {
    font-size: 16px;
    padding: 23px;
    max-width: 384px;
    height: 522px;
    box-shadow: 8px 8px ${props => props.theme.black};
  }
`;

export default PostPreviewStyled;
