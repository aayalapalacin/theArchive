import React, { useState } from "react";
import '../../../styles/archive_recommendation/retired_favorite.css'


const RetiredFavorite = () => {
    const [favorited, setFavorited] = useState(false)

    const updateFavorited = () => setFavorited(!favorited)
    
    return(
        <div className='retired-favorite-container'>
            <div>Want to bring this style back?  Hit the like button!</div>
            <button onClick={updateFavorited} className='retired-like-button'>
            </button>
        </div>
    )
    
}

export default RetiredFavorite