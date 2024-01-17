import PostTile_, { type TPostPreviewProps } from "./PostPreview";
import { type PropsWithChildren } from "react";

const PostTile = (props: PropsWithChildren<TPostPreviewProps>) => (
  <PostTile_ postData={props.postData} />
);

export default PostTile;
