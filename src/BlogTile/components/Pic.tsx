import { styled } from "styled-components";
import { BlogTileContext } from "../BlogTile";
import { PropsWithChildren } from "react";

const PicStyled = styled.img`
  /* margin-bottom: 1.5rem; */
  max-width: fit-content;
`;

function PicContainer(props: PropsWithChildren) {
  // const { data } = useContext(BlogTileContext);
  // return <img src={data.pic} />;
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
  /* width: 100%; */
  display: flex;
  place-content: center;
  place-items: center;
`;

export default PicContainerStyled;
