import React, { useContext } from 'react'
import AudioPlayerWrapper from '../components/Player/AudioPlayerWrapper'
import { SongContext } from '../store/SongContext'

function Footer() {
  const songCtx = useContext(SongContext);

  return (
    songCtx && songCtx.currentSong && (<div className='h-20 fixed bottom-0 w-full'>
      <AudioPlayerWrapper />
    </div>)

  )
}

export default Footer
