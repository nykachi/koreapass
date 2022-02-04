import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Kmusic from './components/Kmusic/Kmusic';

import VideoModal from './components/VideoModal/VideoModal';
import Skills from './components/Skills/Skills';
import YouTube from './components/YouTube/YouTube';
import Contact from './components/Contact/Contact';
import Video from './components/Video/Video';

import Home001 from './components/Home/Home001';
import MostList from './components/MostList/MostList';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Video />
      <MostList />

      <Home001 />
      <Kmusic />
      <Skills />
      <VideoModal />
      <YouTube />
      <Contact />
    </div>
  );
};

export default App;
