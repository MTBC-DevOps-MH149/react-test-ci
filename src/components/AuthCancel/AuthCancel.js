import React from 'react';
import useStyles from '../Styles/Styles'
import { Link } from "react-tiger-transition";
import CloseIcon from "@material-ui/icons/Close";
const AuthCancel = () => {
    const classes = useStyles();
  
    return (
      <Link className={classes.cancelAuth} to="/" transition="scale">
        <CloseIcon />
      </Link>
    );
  };
  export default AuthCancel