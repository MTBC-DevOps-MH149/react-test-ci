import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  screen: {
    backgroundColor: "white",
    marginTop: "20px",
    textAlign: "justify"
  },
  loginScreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  margin: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menu: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  feedItemRoot: {
    margin: theme.spacing(2)
  },
  cancelAuth: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: theme.spacing(2)
  },
  hide: {
    opacity: 0,
    visibility: "hidden",
    zIndex: -1
  },
  previous: {
    height: `calc(100% - 64px)`,
    position: "absolute",
    width: "50%",
    top: 64,
    left: 0,
    zIndex: 3
  },
  next: {
    height: `calc(100% - 64px)`,
    position: "absolute",
    width: "50%",
    top: 64,
    right: 0,
    zIndex: 3
  },
  code: {
    color: deepOrange[500],
    fontSize: 14,
    fontFamily: "monospace",
    backgroundColor: grey[100],
    borderRadius: 5,
    padding: theme.spacing(0.4, 0.6, 0.4, 0.6)
  }
}));
export default useStyles;
