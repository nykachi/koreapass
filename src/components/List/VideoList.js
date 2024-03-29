import React from 'react';
import Video001 from '../VideoPlayer/Video001';

const list = [
  {
    id: 'a',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=TkpTgn4sV0c&list=PL4Lb93R1nd7ecPn9R7Q09f3dkDa6rbGvj&ab_channel=ImagineYourKorea" />
    ),
  },
  {
    id: 'ab',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=B3uUfrLtZOU&ab_channel=%EC%A4%8C%EC%82%B4%EB%A1%B1" />
    ),
  },
  {
    id: 'abc',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=7ArCK7uJS9U&list=PL4Lb93R1nd7dyH7MFRNZPlEd7rf4XZkqH&ab_channel=ImagineYourKorea" />
    ),
  },
  {
    id: 'abcd',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=zGo7QWzsWbE&ab_channel=%EB%94%A9%EA%B0%80%EB%94%A9%EA%B0%80%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4DGDGStudio" />
    ),
  },
  {
    id: 'b',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=UmFeiOdoZ8o&ab_channel=%ED%95%9C%EA%B5%AD%EB%9D%BC%EB%94%94%EC%98%A4" />
    ),
  },

  {
    id: 'ba',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=eo6dcv18oA4&ab_channel=MnetK-POP" />
    ),
  },

  {
    id: 'c',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=4J-g7ida_WE&list=PLWDz_A_ER635jYO8vyTVw7BFFuqxAKura&ab_channel=MBCkpop" />
    ),
  },
  {
    id: 'd',
    videourl: (
      <Video001 url="https://www.youtube.com/watch?v=Vjk8SjbjxRA&ab_channel=ImagineYourKorea" />
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
