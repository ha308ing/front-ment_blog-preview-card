import { styled } from "styled-components";
import { PostPreviewContext as Context } from "../../PostPreview";
import { type PropsWithChildrenClassName } from "react";

const Image = styled.img`
  max-width: fit-content;
`;

const Thumbnail = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ thumb, title }) => (
      <div className={className}>
        <Image src={thumb} alt={title} />
      </div>
    )}
  </Context.Consumer>
);

const ThumbnailStyled = styled(Thumbnail)`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  display: flex;
  place-content: center;
  place-items: center;
`;

export default ThumbnailStyled;
