import React from "react";
import { Menu, useStyles } from "../../components";
import { Screen } from "react-tiger-transition";
const MenuScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.screen}>
      <Menu />
    </Screen>
  );
};
export default MenuScreen;
