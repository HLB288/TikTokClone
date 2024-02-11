import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share' 
import MessageIcon from '@mui/icons-material/Message'
import {useState } from 'react'
import './VideoSidebar.css'


export default function VideoSidebar({messages, shares, likes}) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videosidebar">
            <div className="videosidebar__button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(true)} />)
                }
   
                <p>{liked ? `${likes + 1}` : `${likes}`}</p>"
            </div>
            <div className="videosidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>"
            </div>
            <div className="videosidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
           
        </div>
    )
}