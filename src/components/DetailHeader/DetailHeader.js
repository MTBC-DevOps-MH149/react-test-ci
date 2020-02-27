import React from "react";
import useStyles from "../Styles/Styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-tiger-transition";

const DetailHeader = ({ color }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" transition="glideOut-right">
              <ArrowBackIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {color}
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default DetailHeader;
