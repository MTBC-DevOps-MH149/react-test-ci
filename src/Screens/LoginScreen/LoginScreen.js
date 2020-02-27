import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AuthCancel, useStyles } from "../../components";
import { Screen, Link } from "react-tiger-transition";
const LoginScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.loginScreen}>
      <AuthCancel />
      <TextField className={classes.margin} defaultValue="Username or email" />
      <TextField
        className={classes.margin}
        type="password"
        defaultValue="Password"
      />
      <Button
        className={classes.margin}
        color="primary"
        variant="contained"
        component={Link}
        to="/"
        transition="scale"
      >
        Login
      </Button>
      <Typography className={classes.margin}>
        New here?{" "}
        <Link to="/register" transition="flip-left">
          Register
        </Link>
        .
      </Typography>
    </Screen>
  );
};

export default LoginScreen;
