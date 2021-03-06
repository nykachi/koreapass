import React from 'react';
import Video001 from '../VideoPlayer/Video001';

const list = [
  {
    id: 'a',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=f7b68sf39XQ&list=PLjUVzlcpeN4QY-RU3CMqHa9Gj2w9yzbt3&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'b',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=yj3HRtiGsuc&list=PLjUVzlcpeN4TqrYXZiIIYcLr5Ww5ujTeV&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'c',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=yNaFYpBVPHA&list=PLzJT711y0gzKBaSIsYp_pnvsk58mwmy-s&ab_channel=%EC%8A%A4%EB%B8%8C%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%8C%9D%2FSBSKPOP" />
    ),
  },
  {
    id: 'd',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=RcrwSWw3bH8&ab_channel=KBSKpop" />
    ),
  },
  {
    id: 'e',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=pYzX7cqK_JQ&ab_channel=%ED%95%9C%EA%B5%AD%EA%B4%80%EA%B4%91%EA%B3%B5%EC%82%ACTV" />
    ),
  },
  {
    id: 'f',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=5VxYrmnwQiA&ab_channel=%ED%95%9C%EA%B5%AD%EA%B4%80%EA%B4%91%EA%B3%B5%EC%82%ACTV" />
    ),
  },
  {
    id: 'g',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=m3g4GEHX1zU&ab_channel=KLT" />
    ),
  },
  {
    id: 'h',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=C83WOaDDolU&t=127s&ab_channel=MeganOsten" />
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
