import { styled } from "styled-components";
import { PostTileContext as Context } from "../../PostTile";
import { FC } from "react";

const Image = styled.img`
  max-width: fit-content;
`;

const Thumbnail: FC = props => (
  <Context.Consumer>
    {({ thumb }) => (
      <div {...props}>
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

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export default ThumbnailStyled;
