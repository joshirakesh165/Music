import React, { useEffect } from 'react'
import LibraryHeader from '../components/Library/LibraryHeader'
import LibraryPlaylist from '../components/Library/LibraryPlaylist'
import LibrarytopCharts from '../components/Library/LibrarytopCharts'
import LibraryArtistList from '../components/Library/LibraryArtistList.JSX'
function LibraryScreen({libraryData}) {
  
  return (
    libraryData  ? (<div className='h-full overflow-scroll'>
      <div id="library-header">
        <LibraryHeader />
      </div>
      <LibrarytopCharts charts={libraryData.charts}/>
      <LibraryPlaylist  playlists={libraryData.playlists}/>

      {/* <LibraryArtistList /> */}
    </div>) :
    <div> Data fetching for u</div>
  )
}

export default LibraryScreen
