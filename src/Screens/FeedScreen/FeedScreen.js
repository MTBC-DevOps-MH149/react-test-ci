import React from "react";
import { useStyles, SimpleHeader, FeedList } from "../../components";
import { Screen } from "react-tiger-transition";
import Toolbar from "@material-ui/core/Toolbar";
const FeedScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.screen}>
      <SimpleHeader title="Feed" />
      <Toolbar />
      <FeedList />
    </Screen>
  );
};

export default FeedScreen;
