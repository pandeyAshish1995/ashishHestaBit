import React, { useState } from "react";

import {userCardTheme as theme} from "../theme/userComponentTheme"


/* for showing one line value */

const showValues = ({ keyName, keyValue }) => {
  return (
    <div style={theme?.nameContainer}>
      <div style={theme?.keyNameStyle}>{`${keyName}: `}</div>
      <div style={theme?.keyValueStyle}>{keyValue}</div>
    </div>
  );
};

/* for showing  user info */

const UserCard = props => {
  const [hover, setHover] = useState(false);
  const { value } = props || {};
  const { name, email, gender } = value || {};

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        ...theme?.cardContainerTheme,
        boxShadow: hover ? "0 4px 4px 2px rgba(0, 0, 0, 0.06)" : "none"
      }}
    >
      {showValues({ keyName: "Name", keyValue: name || "N/A" })}
      {showValues({ keyName: "Email", keyValue: email || "N/A" })}
      {showValues({ keyName: "Gender", keyValue: gender || "N/A" })}
    </div>
  );
};

export default UserCard;
