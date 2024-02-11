import React,{useState, useRef} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'




function Video({channel, description, song, likes, messages, shares}) {
    const [playing, setPlaying] = useState(true);
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause()
            videoRef.current.muted = true
            setPlaying(false)
        } else {
            videoRef.current.play()
            videoRef.current.muted = false
            setPlaying(true)           
        }
    }

  return (
    <div className='video'>
      <video className="video__player" 
      loop 
      autoPlay p
      reLoad="auto" 
      muted onClick={onVideoPress} 
      ref={videoRef} 
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
