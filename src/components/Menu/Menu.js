import React from 'react';
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-tiger-transition";
import useStyles from '../Styles/Styles'
const Menu = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button component={Link} to="/" transition="glideOut-bottom">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Feed" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/about"
            transition="glideOut-bottom"
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
        <Divider />
        <ListItem button component={Link} to="/login" transition="scale">
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </div>
    );
  };
export default Menu  