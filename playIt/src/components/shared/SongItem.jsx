import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SongContext } from '../../store/SongContext';

function SongItem({song,album}) {
    const navigate = useNavigate();
    const songCtx = useContext(SongContext)
    const activeClass = song.id == songCtx?.currentSong?.id ? 'bg-primary-color hover:text-black' : 'bg-black text-white' 

    const onSongItemClick = async () => {
        songCtx.changeAlbum(album,song);
        navigate('/play')
    }

    return (
        <li className={`${activeClass} border-l-4 rounded-sm mt-3 flex items-center py-4 px-6 opacity-60 cursor-pointer  hover:bg-white hover:text-black`} key={song.id}>
            <img className="w-12 h-12 rounded-full object-cover mr-4" src={song.image[2].link}
                alt="User avatar" />
            <div className="flex-1" onClick={onSongItemClick}>
                <h3 className="text-lg font-medium">{song.name}</h3>
                <p className="text-gray-600 text-base">{song.primaryArtists}</p>
            </div>
        </li>
    )
}

export default SongItem
