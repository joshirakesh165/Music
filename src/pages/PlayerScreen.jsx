import React, { useContext, useEffect, useState } from 'react'
import PlayerContainer from '../components/Player/PlayerContainer'
import SongList from '../components/shared/SongList';
import { SongContext } from '../store/SongContext';
import { ArrowLeftCircleIcon,ArrowRightCircleIcon } from '@heroicons/react/24/solid';


function PlayerScreen() {
  const [showAlbum,toggleAlbum] = useState(false)
  const songCtx = useContext(SongContext)


  return (
    <><div id="play-container" className='w-full flex flex-col h-full text-white sm:flex-row'>
      <div className='h-1/2 flex justify-center items-center w-full sm:w-full'>
        <PlayerContainer />
      </div>
      {(songCtx?.album?.songs?.length || songCtx.changeSong.id) &&
        <div id="right" className='absolute z-50 flex h-4/5 pb-40  sm:pb-0 sm:h-2/3 sm:w-1/3'>
          {!showAlbum && <ArrowRightCircleIcon className='ml-0 w-10 cursor-pointer sm:w-20' onClick={() => toggleAlbum(true)}/>}
          {showAlbum &&<ArrowLeftCircleIcon  className='w-10 cursor-pointer sm:w-20' onClick={() => toggleAlbum(false)}/>}
          {showAlbum && <SongList album={songCtx?.album} />}

        </div>}
    </div>
    </>
  )
}

export default PlayerScreen
