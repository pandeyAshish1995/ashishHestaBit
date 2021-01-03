const postListTheme = {
    containerStyle: {
      marginLeft: 30,
      marginRight: 30,
      display: "grid",
      gridColumnGap: "2.5rem",
      gridRowGap: "2.5rem",
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  };
  
  const postCardTheme = {
    containerStyle: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      flexDirection: "column",
      flex: 1,
      paddingTop: 64,
      paddingBottom: 64,
      paddingLeft: 20,
      paddingRight: 20,
      borderStyle: "solid",
      borderColor: "rgb(226, 232, 240)",
      borderWidth: 1
    },
    titleStyle: {
      marginTop: 20,
      fontFamily: "Poppins",
      fontSize: 18,
      fontWeight: 600
    },
    bodyStyle: {
      fontFamily: "Poppins",
      fontSize: 16,
      marginTop: 8,
      textAlign: "center",
      color: "rgba(160,174,192,0.7)"
    }
  };

  export {postCardTheme,postListTheme}