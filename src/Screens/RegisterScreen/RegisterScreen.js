import React from "react";
import { useStyles, AuthCancel } from "../../components";
import { Screen, Link } from "react-tiger-transition";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const RegisterScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.loginScreen}>
      <AuthCancel />
      <TextField className={classes.margin} defaultValue="Username" />
      <TextField className={classes.margin} defaultValue="Email" />
      <TextField
        className={classes.margin}
        type="password"
        defaultValue="Password"
      />
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
        Register
      </Button>
      <Typography className={classes.margin}>
        Old here?{" "}
        <Link to="/login" transition="flip-right">
          Login
        </Link>
        .
      </Typography>
    </Screen>
  );
};
export default RegisterScreen;
