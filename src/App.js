import React from 'react';
import './App.css';
import Video from './components/Video'
import videoMetadata from './metadata/videos.json';


function App() {
  const videos = videoMetadata;

  return (
    <div className='app'>
      <div className="container">{videos.map((videos, index) => {
        return (
          <Video key ={index} 
          channel={videos.channel} 
          description={videos.description} 
          song={videos.song} 
          url={videos.url} 
          likes={videos.likes} 
          messages={videos.messages} shares={videos.shares} 
          />
        )      
      })}
      </div>
    </div>
  );
}

export default App;
