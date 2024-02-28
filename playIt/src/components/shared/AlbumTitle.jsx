import React, { useContext } from 'react'
import { SongContext } from '../../store/SongContext'

function AlbumTitle({album}) {
    // const songCtx = useContext(SongContext)

    return (
        <div className='h-1/4  mt-2 flex flex-wrap justify-center sm:justify-start'>
            <img className='h-0 rounded-full sm:h-40' src={album.image[2].link} alt="" />
            <h3 className='text-white text-2xl mt-5 ml-50 flex sm:mt-0 sm:ml-10 sm:text-6xl sm:items-center'>{album.name}</h3>
        </div>
    )
}

export default AlbumTitle
