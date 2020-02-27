import React, { useState, useEffect } from "react";
import { colors, DetailHeader, useStyles } from "../../components";
import { useParams } from "react-router-dom";
import { Route, Screen, Link } from "react-tiger-transition";

const DetailScreen = () => {
  const classes = useStyles();
  const { color } = useParams();
  const [colorObj, setColorObj] = useState({});

  useEffect(() => {
    // need to handle error if there is not color from param
    if (color) {
      const current = colors.filter(c => c.name === color)[0];
      const next = current.id < 18 ? colors[current.id + 1] : colors[0];
      const previous = current.id > 0 ? colors[current.id - 1] : colors[18];
      setColorObj({
        previous,
        current,
        next
      });
    }
  }, [color]);

  const { current, next, previous } = colorObj;

  if (!current) return <div key="fake-key" />;

  return (
    <Screen>
      <Screen display>
        <Route
          key={current.id}
          exact
          path={`/detail/${current.name}`}
          screen
          screenProps={{
            style: {
              backgroundColor: current.color
            }
          }}
        >
          <DetailHeader color={current.name} />
          <Link to={`/detail/${previous.name}`} transition="glide-right">
            <div className={classes.previous} />
          </Link>
          <Link to={`/detail/${next.name}`} transition="glide-left">
            <div className={classes.next} />
          </Link>
        </Route>

        <Route
          key={next.id}
          exact
          path={`/detail/${next.name}`}
          screen
          screenProps={{
            style: {
              backgroundColor: next.color
            }
          }}
        >
          <DetailHeader color={next.name} />
        </Route>

        <Route
          key={previous.id}
          exact
          path={`/detail/${previous.name}`}
          screen
          screenProps={{
            style: {
              backgroundColor: previous.color
            }
          }}
        >
          <DetailHeader color={previous.name} />
        </Route>
      </Screen>
    </Screen>
  );
};
export default DetailScreen;
