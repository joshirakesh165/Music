import React, { useContext, useEffect, useState } from 'react'
import SongList from './SongList';
import AlbumTitle from './AlbumTitle';
import { useLocation } from 'react-router-dom';

function ItemDetails() {
    const location = useLocation()
    const [selectedAlbum, setSelectedAlbum] = useState();

    useEffect(() => {
        if (location?.state?.album) {
            setSelectedAlbum({ ...location?.state?.album });
        }
    }, [location])

    return (
        <>      
        {selectedAlbum && selectedAlbum.id && <div className='flex flex-col h-full'>
            <AlbumTitle album={selectedAlbum} />
            <SongList album={selectedAlbum} />
        </div>}
        </>
    )
}

export default ItemDetails
