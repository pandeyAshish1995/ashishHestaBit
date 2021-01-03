import React from "react";

const Title = ({ titleName1 = "N/A", titleName2 = "N/A" }) => {
  return (
    <div
      style={{
        marginBottom: 64,
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: 48,
        fontWeight: 900,
        color: "rgba(26,32,44,1)",
        justifyContent: "center"
      }}
    >
      {titleName1}
      <span style={{ marginLeft: 4, color: "rgba(90,103,216,1)" }}>{titleName2}</span>
    </div>
  );
};

export default Title;
