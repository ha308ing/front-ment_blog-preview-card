import styled from "styled-components";
import { PostTileContext as Context } from "../../PostTile";
import { type PropsWithChildrenClassName } from "react";
import Link from "@/components/Link";

const Title = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ title }) => {
      return (
        <h2 className={className}>
          <Link href="#">{title}</Link>
        </h2>
      );
    }}
  </Context.Consumer>
);

const TitleStyled = styled(Title)`
  font-size: 21px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 17px;
  line-height: 1;
  letter-spacing: -0.5px;

  @media (width >= 1440px) {
    margin-bottom: 18px;
    font-size: 24px;
    letter-spacing: normal;
  }
`;

export default TitleStyled;
