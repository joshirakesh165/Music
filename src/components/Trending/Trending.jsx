import React from 'react'
import Album from './Album';

function Trending({trendingAlbums}) {
    
    return (
        <div className="h-95-p grid grid-cols-1 gap-10 overflow-scroll md:grid-cols-5  md:gap-10">
            {trendingAlbums.length > 0 &&
                trendingAlbums.map(album => <Album key={album.albumId} album={album} />)
            }
        </div>

    )
}

export default Trending
