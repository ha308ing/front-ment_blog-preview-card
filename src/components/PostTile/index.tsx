import PostTile_, { type TPostTile } from "./PostTile";
import { type PropsWithChildren } from "react";

const PostTile = (props: PropsWithChildren<TPostTile>) => (
  <PostTile_ postData={props.postData} />
);

export default PostTile;
