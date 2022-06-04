import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Music from './pages/Music';
import Kfood from './pages/Kfood';
import Kculture from './pages/Kculture';
import HotPlace from './pages/HotPlace';
import Kent from './pages/Kent';
import Others from './pages/Others';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="music" element={<Music />} />
        <Route path="kfood" element={<Kfood />} />
        <Route path="kculture" element={<Kculture />} />
        <Route path="hotplace" element={<HotPlace />} />
        <Route path="kent" element={<Kent />} />
        <Route path="others" element={<Others />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
