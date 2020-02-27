import React from "react";
import useStyles from "../Styles/Styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-tiger-transition";
const FeedItem = ({ color }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.feedItemRoot}>
      <Link to={`/detail/${color.name}`} transition="glideIn-left">
        <div
          style={{ backgroundColor: color.color, width: "100%", height: 200 }}
        />
      </Link>
    </Paper>
  );
};

export default FeedItem;
