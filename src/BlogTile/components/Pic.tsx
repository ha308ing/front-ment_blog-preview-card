import { styled } from "styled-components";
import { BlogTileContext } from "../BlogTile";
import { PropsWithChildren } from "react";

const PicStyled = styled.img`
  max-width: fit-content;
`;

function PicContainer(props: PropsWithChildren) {
  return (
    <BlogTileContext.Consumer>
      {({ data }) => (
        <div {...props}>
          <PicStyled src={data.pic} />
        </div>
      )}
    </BlogTileContext.Consumer>
  );
}

const PicContainerStyled = styled(PicContainer)`
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

export default PicContainerStyled;
