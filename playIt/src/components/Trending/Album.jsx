import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAlbumDetailById, getSongById, getSongListAlbumById } from '../../shared/song-service';
import { SongContext } from '../../store/SongContext';

function Album({ album,isRounded }) {
    console.log('album', album)
    const roundedClass = isRounded ? 'rounded-full' : 'rounded-lg'

    const songCtx = useContext(SongContext)
    const navigate = useNavigate();
    const getSongData = async (data) => {
        const songData = await getSongById(data.songs[0].songId);
        songCtx.changeAlbum({ id: songData.data[0].album.id, songs: songData.data }, songData.data[0]);
        navigate('/play')
    }

    const onItemClick = async (album) => {
        let albumDetail = await getSongListAlbumById(album);
        let data = albumDetail?.data || null;
        data.songs.forEach(el => {
            let arr = el.url.split("/")
            el['songId'] = arr[arr.length - 1];
        })
        if (data) {
            if (data.songCount == 1) {
                getSongData(data);
            } else {
                navigate(`/detail/album/${album.albumId}`, { state: { album: data } });
            }
        }
    }

    return (
        <>
            <div key={album?.id}
                onClick={() => onItemClick(album)}
                className='p-5 hover:shadow-lg hover:shadow-white hover:p-0 hover:cursor-pointer'>
                <img className={` ${roundedClass} h-auto w-full max-w-full box-s`}
                    src={typeof (album?.image) == 'string' ? album.image : album?.image[2]?.link} alt={album?.title + 'image'} />
                {/* <span className='text-white flex justify-center cursor-pointer'>{album.title || album.name}</span> */}
            </div>
        </>
    )
}

export default Album
