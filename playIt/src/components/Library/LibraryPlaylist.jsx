import React from 'react'
import LibraryGrid from './LibraryGrid'

function LibraryPlaylist({ playlists }) {

    console.log('playlist in lib playlist....', playlists)

    return (
        <div className='mt-10'>
            <LibraryGrid title="Top Playlist" items={playlists} />
        </div>
    )
}

export default LibraryPlaylist
