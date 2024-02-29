import React, { useContext, useState } from 'react'
import SongItem from './SongItem'

function SongList({ album }) {
    const [filteredAlbum, setFilterredAlbum] = useState({ ...album })
    const onChangeText = (e) => {
        let textBoxValue = String(e.target.value).toLowerCase();
        if (textBoxValue.trim(" ")) {
            filteredAlbum.songs = filteredAlbum.songs.filter(al => al.name.toLowerCase().includes(textBoxValue));
        } else {
            filteredAlbum.songs = album.songs;
        }
        setFilterredAlbum({ ...filteredAlbum });

    }
    return (
        <div className="shadow-md pl-2 pr-2 rounded-md mt-10 sm:mt-5 w-full h-full">
            {
                album?.songs?.length > 12 && <div className='w-full mb-5 flex justify-center '>
                    <input className='w-full h-12 pl-5 rounded-3xl bg-black border-white border-2 text-white sm:w-1/2'
                        type="text" onChange={(e) => onChangeText(e)} placeholder='Search' />
                </div>
            }
            <div className=' h-90-p overflow-scroll sm:h-full'>
                <ul className="divide-y divide-gray-200">
                    {filteredAlbum.songs.map(song => <SongItem song={song} album={filteredAlbum} key={song.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default SongList
