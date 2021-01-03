import React, { useState } from "react";

import { postCardTheme as defaultTheme } from "../theme/postComponentTheme";

const PostCard = props => {
  const [hover, setHover] = useState(false);

  const { value, theme = defaultTheme } = props || {};
  const { title = "" } = value || {};

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        ...theme?.containerStyle,
        boxShadow: hover ? "0 4px 4px 2px rgba(0, 0, 0, 0.06)" : "none"
      }}
    >
      <div style={theme?.titleStyle}>{title}</div>
      <div style={theme?.bodyStyle}>{value?.body || ""}</div>
    </div>
  );
};

export default PostCard;
