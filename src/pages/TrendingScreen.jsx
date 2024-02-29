import React, { useEffect } from 'react'
import Trending from '../components/Trending/Trending'

function TrendingScreen({albums}) {

  return (
    albums && albums.length > 0 ?
    (<Trending trendingAlbums={albums}/>) : <div className='text-white'> Fetching songs for you</div>
  )
}

export default TrendingScreen
