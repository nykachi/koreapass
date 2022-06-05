import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Video from './components/Video/Video';
import MostList001 from './components/MostList/MostList001';
import Home001 from './components/Home/Home001';

/*import ImageSlider from './components/ImgSlider/ImageSlider';
import { SliderData } from './components/ImgSlider/SliderData';*/

import Kmusic from './components/Kmusic/Kmusic';

import VideoModal from './components/VideoModal/VideoModal';

import VideoModal003 from './components/VideoModal/VideoModal002';
import VideoModalTest from './components/VideoModal/VideoModalTest';
import Kfood from './components/kfood/Kfood';
import Ktv from './components/ktv/Ktv';
/*import MostList from './components/MostList/MostList';*/

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Video />
      <MostList001 />
      <Ktv />
      <Home001 />

      <Kmusic />

      <Kfood />

      <VideoModal />
      <VideoModal003 />
      <VideoModalTest />
    </div>
  );
};

export default App;
