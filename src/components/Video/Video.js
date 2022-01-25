import React from 'react';
import classes from './Video.module.css';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <div className={classes.player}>
      <ReactPlayer
        className={classes.reactPlayer}
        width={'100%'}
        height={'100%'}
        controls
        url="https://www.youtube.com/watch?v=WI-0sKDT4iI&ab_channel=TheLateLateShowwithJamesCorden"
      />
    </div>
  );
};

export default Video;
