import styled from "styled-components";
import { PostPreviewContext as Context } from "../../PostPreview";
import { type PropsWithChildrenClassName } from "react";
import Link from "@/components/Link";

const Title = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ title }) => {
      return (
        <h1 className={className}>
          <Link href="#">{title}</Link>
        </h1>
      );
    }}
  </Context.Consumer>
);

const TitleStyled = styled(Title)`
  font-size: 1.5em;
  font-weight: 800;
  margin: 0;
  margin-bottom: 17px;
  line-height: 1;
  letter-spacing: -0.5px;

  @media (width >= 1440px) {
    margin-bottom: 18px;
    letter-spacing: normal;
  }
`;

export default TitleStyled;
