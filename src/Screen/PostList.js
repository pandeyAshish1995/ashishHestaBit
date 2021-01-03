import React from "react";

import PostCard from "./PostCards";
import { LoaderComponent } from "./Components";

import { postListTheme as theme } from "../theme/postComponentTheme";

const PostList = props => {
  const { data = [], loading, loadMore } = props;
  return (
    <>
      <div style={theme?.containerStyle}>
        {data.map((value, index) => {
          return <PostCard value={value} key={value?.id || index} />;
        })}
      </div>
      <LoaderComponent loadMore={loadMore} loading={loading} />
    </>
  );
};

export default PostList;
