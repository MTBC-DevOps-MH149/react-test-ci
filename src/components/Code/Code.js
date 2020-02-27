import React from "react";
import useStyles from '../Styles/Styles'

const Code = ({ children }) => {
    console.log("Children Received.............................................",children);
    const classes = useStyles();
    return <span className={classes.code}>{children}</span>;
  };
  export default Code;
  