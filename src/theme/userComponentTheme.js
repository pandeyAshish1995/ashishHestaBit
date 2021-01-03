const userListTheme = {
  containerStyle: {
    marginLeft: 30,
    marginRight: 30,
    display: "grid",
    gridColumnGap: "2.5rem",
    gridRowGap: "2.5rem",
    gridTemplateColumns: "1fr 1fr 1fr"
  }
};

const userCardTheme = {
    cardContainerTheme: {
      display: "flex",
      cursor: "pointer",
      flexDirection: "column",
      flex: 1,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      borderStyle: "solid",
      borderColor: "rgb(226, 232, 240)",
      borderWidth: 1
    },
    nameContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      marginTop: 8
    },
    keyNameStyle: {
      fontFamily: "Poppins",
      fontSize: 18,
      fontWeight: 600,
      color: "rgba(26,32,44,1)"
    },
    keyValueStyle: {
      fontFamily: "Poppins",
      fontSize: 16,
      marginLeft: 3,
      color: "rgba(26,32,44,1)"
    }
  };

export { userListTheme,userCardTheme };
