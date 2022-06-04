import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Video001 from '../components/VideoPlayer/Video001';

const HotPlace = () => {
  return (
    <div>
      <NavBar />

      <Video001 url="https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS" />
      <hr />
    </div>
  );
};

export default HotPlace;
