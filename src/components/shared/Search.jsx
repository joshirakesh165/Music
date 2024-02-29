import React, { useContext, useState } from 'react'
import { searchSongByName } from '../../shared/song-service'
import { SongContext } from '../../store/SongContext'
import { useNavigate } from 'react-router-dom'
import debouncer from '../../util/debouncer'



function Search() {
    const [songData, setSongData] = useState([])
    const [keyword, setkeyword] = useState([])
    const songCtx = useContext(SongContext)
    const navigate = useNavigate()

    const fetchData = async () => {
        if (keyword) {
            let response = await searchSongByName(keyword);
            if (response && response?.data?.results) {
                setSongData([...response?.data?.results]);
            }
        } else {
            setSongData([]);
        }
    }


    const onChangeText = (e) => {
        setkeyword(e.target.value);
        debouncer(fetchData)
    }


    const onBlurHandler = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setSongData([]);
            setkeyword("");
        }, 100);
    }

    const onSongClick = (song) => {
        songCtx.changeAlbum({ id: song.album.id, songs: [song] }, song);
        navigate('/play')
        setSongData([]);
        setkeyword("");
    }

    return (
        <div className='w-full flex justify-center flex-col pr-0 sm:pr-10'>
            <input className='w-full h-10 pl-5 z-50 rounded-md bg-white border-blck border-2 text-black'
                type="text"
                onBlur={onBlurHandler}
                value={keyword}
                onChange={(e) => onChangeText(e)} placeholder='Search'
            />
            {songData && songData.length > 0 &&
                <div className='relative flex'>
                    <ul className='rounded-md z-10 absolute h-64 -top-10 pt-10  w-full overflow-scroll bg-white border-white text-white'>
                        {songData?.map(song =>
                            song.name && <li key={song.id} className='text-black p-5 border-b-2  border-gray-400 hover:cursor-pointer hover:bg-primary-color'
                                onClick={() => onSongClick(song)} >
                                {song.name}
                            </li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Search
