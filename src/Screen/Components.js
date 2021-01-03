import React from "react";

import ComponentWithData from "./ComponentWithData";
import PostList from "./PostList";
import UserList from "./UserList";

import { containerStyle, defaultButtonStyle, defaultTitleStyle } from "../theme/componentTheme";

const PostComponent = () => {
  return (
    <div style={containerStyle}>
      <Title titleName1={"Our"} titleName2={"Posts"} />
      <ComponentWithData CallBack={PostList} url={"https://gorest.co.in/public-api/posts"} />
    </div>
  );
};

const UserComponent = () => {
  return (
    <div style={containerStyle}>
      <Title titleName1={"Our"} titleName2={"Users"} />
      <ComponentWithData CallBack={UserList} url={"https://gorest.co.in/public-api/users"} />
    </div>
  );
};

const LoaderComponent = ({ loading = false, loadMore, theme = defaultButtonStyle }) => {
  return (
    <div
      onClick={() => {
        loadMore && loadMore();
      }}
      style={theme}
    >
      {loading ? "loading..." : "Load More"}
    </div>
  );
};

const Title = ({ titleName1 = "N/A", titleName2 = "N/A", theme = defaultTitleStyle }) => {
  return (
    <div style={theme?.titleName1Style}>
      {titleName1}
      <span style={theme?.titleName2Style}>{titleName2}</span>
    </div>
  );
};

export { PostComponent, UserComponent, LoaderComponent };
