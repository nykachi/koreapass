import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Video from './components/Video/Video';
import MostList001 from './components/MostList/MostList001';
import Home001 from './components/Home/Home001';

/*import ImageSlider from './components/ImgSlider/ImageSlider';
import { SliderData } from './components/ImgSlider/SliderData';*/

import Kmusic from './components/Kmusic/Kmusic';

import VideoModal from './components/VideoModal/VideoModal';
import Skills from './components/Skills/Skills';
import YouTube from './components/YouTube/YouTube';
import Contact from './components/Contact/Contact';

import VideoModal003 from './components/VideoModal/VideoModal002';
import VideoModalTest from './components/VideoModal/VideoModalTest';
import Video001 from './components/VideoPlayer/Video001';

/*import MostList from './components/MostList/MostList';*/

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Video />
      <MostList001 />
      <Home001 />

      <Video001 url="https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS" />
      <Video001 url="https://www.youtube.com/watch?v=RcrwSWw3bH8&ab_channel=KBSKpop" />
      <Video001 url="https://www.youtube.com/watch?v=pYzX7cqK_JQ&ab_channel=%ED%95%9C%EA%B5%AD%EA%B4%80%EA%B4%91%EA%B3%B5%EC%82%ACTV" />
      <Video001 url="https://www.youtube.com/watch?v=3P1CnWI62Ik&list=RD3P1CnWI62Ik&index=2&ab_channel=%EC%98%A8%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80ONSTAGE" />
      <Video001 url="https://www.youtube.com/watch?v=3kpeOhq34nU&ab_channel=KBS%EA%B5%90%EC%96%91" />
      <Video001 url="https://www.youtube.com/watch?v=5VxYrmnwQiA&ab_channel=%ED%95%9C%EA%B5%AD%EA%B4%80%EA%B4%91%EA%B3%B5%EC%82%ACTV" />
      <Video001 url="https://www.youtube.com/watch?v=m3g4GEHX1zU&ab_channel=KLT" />
      <Video001 url="https://www.youtube.com/watch?v=C83WOaDDolU&t=127s&ab_channel=MeganOsten" />

      <Kmusic />

      <Skills />
      <VideoModal />
      <VideoModal003 />
      <VideoModalTest />

      <YouTube />
      <Contact />
    </div>
  );
};

export default App;
