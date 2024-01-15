import { styled } from "styled-components";
import { BlogTileContext } from "../BlogTile";
import { PropsWithChildren } from "react";

const months: Record<number, string> = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

function PubDate(props: PropsWithChildren) {
  return (
    <BlogTileContext.Consumer>
      {({ data }) => {
        const { pubdate } = data;
        return (
          <div {...props}>
            Published {pubdate.day} {months[pubdate.month]} {pubdate.year}
          </div>
        );
      }}
    </BlogTileContext.Consumer>
  );
}

const PubDateStyled = styled(PubDate)`
  text-align: left;
  margin-bottom: 18px;
  font-size: 0.875em;
  letter-spacing: -0.2px;
  word-spacing: 1px;
  @media (min-width: 1440px) {
  letter-spacing: -0.1px;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: -0.1px;
  }
`;

export default PubDateStyled;
