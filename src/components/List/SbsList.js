import React from 'react';
import Video001 from '../VideoPlayer/Video001';

const list = [
  {
    id: 'a',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=a7a4EbJ4-tU&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'b',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=NbbYcsX4-kc&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'c',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=_Iw7mL0tkqA&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'd',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=Ayi6q4btHyk&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'e',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=AYh9zEU9ypI&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'f',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=63i9roKVQRs&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'g',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=jAMsPN_MADQ&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'h',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=5piuLNa5Hfc&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'i',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=MShOLenjduY&ab_channel=MnetK-POP" />
    ),
  },
  {
    id: 'j',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=SFyeM0YkOk8&ab_channel=MnetK-POP" />
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
