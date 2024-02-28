import React, { useContext } from 'react'
import { SongContext } from '../../store/SongContext'
import { NavLink } from 'react-router-dom'


function Equalizer() {
    const songCtx = useContext(SongContext)

    return (
        <div className='flex flex-col'>
            <img src="/equilizer.gif" className=' mt-40' alt="" />
            <span className='flex justify-center text-3xl sm:text-5xl'> {songCtx?.currentSong?.name} </span>
            <span className='flex justify-center text-xs mt-5 bold sm:text-md'> {songCtx?.currentSong?.primaryArtists} </span>
            {!songCtx.currentSong && <span className='flex justify-center text-xl sm:text-2xl'> <NavLink to={"/"}>Go To Librray</NavLink> </span>}

        </div>
    )
}

export default Equalizer
