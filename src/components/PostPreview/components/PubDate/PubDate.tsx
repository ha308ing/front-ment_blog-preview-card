import { styled } from "styled-components";
import { PostPreviewContext as Context } from "../../PostPreview";
import { type PropsWithChildrenClassName } from "react";

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

const PubDate = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ pubdate }) => {
      return (
        <div className={className}>
          Published {pubdate.day} {months[pubdate.month]} {pubdate.year}
        </div>
      );
    }}
  </Context.Consumer>
);

const PubDateStyled = styled(PubDate)`
  text-align: left;
  margin-bottom: 18px;
  font-size: 0.875em;
  letter-spacing: -0.2px;
  word-spacing: 1px;
  font-weight: 600;

  @media (width >= 1440px) {
    margin-bottom: 20px;
  }
`;

export default PubDateStyled;
