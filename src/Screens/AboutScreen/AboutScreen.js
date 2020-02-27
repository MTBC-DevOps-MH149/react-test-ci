import React from "react";
import {SimpleHeader,Code,useStyles} from "../../components";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Screen } from "react-tiger-transition";
import { Container } from "@material-ui/core";
const AboutScreen = () => {
  const classes = useStyles();
  console.log("Classes............",classes);
  return (
    <Screen className={classes.screen}>
      <Container>
      <SimpleHeader title="About" />
      <Toolbar />
      <Typography className={classes.margin}>
        This is a simple example of how to use this package, here are some
        points to notice:
      </Typography>
      <Typography className={classes.margin}>
        1 - The <Code>transitionProps</Code> on the route of the{" "}
        <Code>FeedScreen</Code> ensure that this route don't get unmounted, but
        at the same time remains hidden when you are on other routes. For
        example, try deleting the <Code>onEnter</Code> and <Code>onExited</Code>{" "}
        properties and then navigating to <Code>/login</Code> and clincking on
        the <Code>/register</Code> link.
      </Typography>
      <Typography className={classes.margin}>
        2 - As the <Code>FeedScreen</Code> do not get unmounted, it will keep
        around and remember scroll position when you open a{" "}
        <Code>/detail/:color</Code> page and come back.
      </Typography>
      <Typography className={classes.margin}>
        3 - The most complex screen is the <Code>DetailScreen</Code>. It has the{" "}
        <Code>display</Code> prop to allow transitioning between routes on the
        same <Code>path</Code>. Notice how it is rendering 3 routes every time,
        this is useful because despite we know the lenght of the colors, it is
        pretending we don't, like a real case where we are fetching the previous
        and next links every time we are on a different <Code>path</Code>.
      </Typography>
      <Typography className={classes.margin}>
        4 - Unlike if we were defining transitions in the routes, it is very
        simple to arrive on the same route with different transitions, for
        example in the <Code>/login</Code> path, you can arrive with 2 different
        transitions, coming from the paths <Code>/regitser</Code> and{" "}
        <Code>/</Code> or <Code>/about</Code> or <Code>/menu</Code>.
      </Typography>
      <Toolbar />
      </Container>
    </Screen>
  );
};
export default AboutScreen;
