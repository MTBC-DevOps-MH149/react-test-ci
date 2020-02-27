import React from "react";
import useStyles from "../Styles/Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-tiger-transition";
const SimpleHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link
              to="/menu"
              transition="glideIn-top"
              style={{ color: "white" }}
            >
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button
            component={Link}
            color="inherit"
            to="/login"
            transition="scale"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default SimpleHeader;
