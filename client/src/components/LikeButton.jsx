import React from 'react';
import { Button } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';

const LikeButton = (props) => {
  if (props.isLiked) {
    return (
      <IconButton
        onTouchTap={props.onTouchTap}
        className={props.className}>
        <Favorite color="#FD4A3E"/>
      </IconButton>
    );
  } else {
    return (
      <IconButton
        onTouchTap={props.onTouchTap}
        className={props.className}>
        <FavoriteBorder color="#FD4A3E"/>
      </IconButton>
    );
  }
};

export default LikeButton;
