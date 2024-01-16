import { styled } from "styled-components";
import { PostTileContext as Context } from "../../PostTile";
import { type PropsWithChildrenClassName } from "react";

const Image = styled.img`
  max-width: fit-content;
`;

const Thumbnail = ({ className }: PropsWithChildrenClassName) => (
  <Context.Consumer>
    {({ thumb }) => (
      <div className={className}>
        <Image src={thumb} />
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
