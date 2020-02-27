import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AboutScreen,
  FeedScreen,
  MenuScreen,
  LoginScreen,
  RegisterScreen,
  DetailScreen
} from "./Screens";
import { useStyles } from "./components";
import "react-tiger-transition/styles/main.min.css";
import {
  Navigation,
  Route,
  scale,
  glideIn,
  glideOut,
  flip,
  glide
} from "react-tiger-transition";

// inject styles
scale({
  name: "scale",
  scale: 1.2,
  exit: {
    delay: 100
  }
});
glide({
  name: "glide-left",
  direction: "left",
  opacity: 0.3
});
glide({
  name: "glide-right",
  direction: "right",
  opacity: 0.3
});
glideIn({
  name: "glideIn-left",
  direction: "left"
});
glideIn({
  name: "glideIn-top",
  direction: "top"
});
glideOut({
  name: "glideOut-bottom",
  direction: "bottom"
});
glideOut({
  name: "glideOut-right",
  direction: "right"
});
flip({
  name: "flip-right",
  direction: "right",
  duration: 200
});
flip({
  name: "flip-left",
  direction: "left",
  duration: 200
});

//document.getElementById("root").style.height = "100vh";
//document.getElementById("root").style.backgroundColor = "#333";

const Example = () => {
  const classes = useStyles();
  const hideInsteadOfUnmount = {
    mountOnEnter: true,
    unmountOnExit: false,
    onExited: node => node.classList.add(classes.hide),
    onEnter: node => node.classList.remove(classes.hide)
  };

  return (
    // <Router>
    //   <Navigation>
    //     <Route exact path="/" transitionProps={{ ...hideInsteadOfUnmount }}>
    //       <FeedScreen />
    //     </Route>

    //     <Route exact path="/login">
    //       <LoginScreen />
    //     </Route>

    //     <Route exact path="/Register">
    //       <RegisterScreen />
    //     </Route>

    //     <Route exact path="/menu">
    //       <MenuScreen />
    //     </Route>

    //     <Route exact path="/about">
    //       <AboutScreen />
    //     </Route>

    //     <Route exact path="/detail/:color">
    //       <DetailScreen />
    //     </Route>
    //   </Navigation>
    // </Router>
    <>
    <h1>Salam Pakistan...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>
    <h1>Salam Pakistan...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1><h1>Salam Pakistan...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>

    <h1>Salam Pakistan...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>
    <h1>Salam Pakistan...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>
    <h1>Welcome to the world of Software Engineers...........</h1>

    </>

  );
};

export default Example;
