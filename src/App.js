import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import VideoModal from './components/VideoModal/VideoModal';
import Skills from './components/Skills/Skills';
import YouTube from './components/YouTube/YouTube';
import Contact from './components/Contact/Contact';
import Video from './components/Video/Video';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Video />
      <Home />

      <About />
      <Skills />
      <VideoModal />
      <YouTube />
      <Contact />
    </div>
  );
};

export default App;
