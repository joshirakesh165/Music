import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { SongContext } from '../../store/SongContext';

function AudioPlayerWrapper() {
    const songCtx = useContext(SongContext);

    const onClickNextHandler = () => {
        if (songCtx?.album?.id) {
            let currentSongIndex = songCtx.album.songs.indexOf(songCtx.album.songs.find(s => s.id == songCtx.currentSong.id));
            let nextIndex = currentSongIndex == songCtx.album.songs.length - 1 ? 0 : currentSongIndex + 1;
            songCtx.changeSong(songCtx.album.songs[nextIndex])
        }
    }
    const onClickPreviousHandler = () => {
        if (songCtx?.album?.id) {
            let currentSongIndex = songCtx.album.songs.indexOf(songCtx.album.songs.find(s => s.id == songCtx.currentSong.id));
            let prevIndex = currentSongIndex == 0 ? songCtx.album.songs.length - 1 : currentSongIndex - 1;
            songCtx.changeSong(songCtx.album.songs[prevIndex])
        }
    }


    return (
        <div className='flex bg-white'>
            <div className='hidden  lg:p-5 xl:pr-0 xl:flex xl:w-2/12'>
                <img className=' w-12 h-12' src={songCtx?.currentSong.image[2].link} alt="" />
                <div className='pl-5'> 
                    <div className='text-ls font-bold'>{songCtx?.currentSong.name.substr(0,18)}</div>
                    <div className='text-xs'>{songCtx?.currentSong.primaryArtists.substr(0,18)}</div>
                </div>
            </div>
            <AudioPlayer autoPlay
                showSkipControls={true}
                showJumpControls={true}
                showDownloadProgress={true}
                src={songCtx?.currentSong?.downloadUrl[4]?.link}
                onClickPrevious={onClickPreviousHandler}
                onPlay={e => console.log("onPlay")}
                onEnded={onClickNextHandler}
                onClickNext={onClickNextHandler}
            />
        </div>
    )
}

export default AudioPlayerWrapper
