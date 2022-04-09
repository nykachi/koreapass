import React from 'react';
import classes from './Video.module.css';
import ReactPlayer from 'react-player';

const Video001 = ({ url }) => {
  return (
    <div className={classes.player}>
      <ReactPlayer
        className={classes.reactPlayer}
        width={'100%'}
        height={'100%'}
        controls={true}
        url={url}
      />
    </div>
  );
};

export default Video001;
