import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Video from './components/Video/Video';
import MostList001 from './components/MostList/MostList001';
import Home001 from './components/Home/Home001';

/*import ImageSlider from './components/ImgSlider/ImageSlider';
import { SliderData } from './components/ImgSlider/SliderData';*/

import Kmusic from './components/Kmusic/Kmusic';

import VideoModal from './components/VideoModal/VideoModal';

import Kfood from './components/kfood/Kfood';
import Ktv from './components/ktv/Ktv';
/*import MostList from './components/MostList/MostList';*/
import VideoList from './components/List/VideoList';

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

      <VideoList />

      <VideoModal />
    </div>
  );
};

export default App;
