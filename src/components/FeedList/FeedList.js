import React from 'react';
import colors from '../Colors/colors'
import FeedItem from '../FeedItem/FeedItem'


const FeedList = () => {
    return (
      <React.Fragment>
        {colors.map(color => (
          <FeedItem key={color.id} color={color} />
        ))}
      </React.Fragment>
    );
  };
  export default FeedList;