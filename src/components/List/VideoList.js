import React from 'react';
import Video001 from '../VideoPlayer/Video001';

const list = [
  {
    id: 'a',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=Rq5SEhs9lws&t=425s&ab_channel=Skillthrive" />
    ),
  },
  {
    id: 'b',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=HtMPs7cvhDA&ab_channel=CodeCommerce" />
    ),
  },
];

const VideoList = () => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.videourl}</div>
      </li>
    ))}
  </ul>
);

export default VideoList;
