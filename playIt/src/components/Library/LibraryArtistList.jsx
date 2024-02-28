import React, { useEffect } from 'react'
import LibraryGrid from './LibraryGrid'
import { top_artists } from './artist-list.js'

function LibraryArtistList() {

    return (
        <div className='mt-10'>
            <LibraryGrid title="Artist" isRounded={true} items={top_artists} />
        </div>
    )
}

export default LibraryArtistList
