import React from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import YouTube from "./components/YouTube/YouTube";
import Contact from "./components/Contact/Contact";
import ReactPlayer from "react-player";

const App = () => {
  
  return (
    <div className="App">
     < NavBar />
     <ReactPlayer
      width={"100%"}
      height={"100%"}
      controls url='https://www.youtube.com/watch?v=MD2Q6cqVmL4&ab_channel=JayLim' />
     < Home />
     < About />
     < Skills />
     < YouTube />
     < Contact />
    </div>
  );
}

export default App;
