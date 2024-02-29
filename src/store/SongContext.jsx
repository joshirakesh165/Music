import { createContext, useState } from "react";

const intialState = {
    album: {},
    currentSong: null,
    changeAlbum: () => {},
    changeSong: () => {}
}
export const SongContext = createContext(intialState);

export const SongContextProvider = ({ children }) => {
    const [songContext, setSongContext] = useState(intialState);

    const changeAlbum = (album,song) => {
        setSongContext(state => ({ album: {...album },currentSong: song || state.currentSong }))
    }

    const changeSong  = (selectedSong) => {
        let isfromSameAlbum = songContext.album.id == selectedSong.album.id;
        let newAlbum = {};
        if(isfromSameAlbum) {
            newAlbum = {...songContext.album}
        }
        setSongContext(state => ({...state,currentSong :selectedSong,album:newAlbum}))
    }

    let songCtx = {
        album: songContext.album,
        currentSong: songContext.currentSong,
        changeAlbum: changeAlbum,
        changeSong: changeSong

    }
    return (
        <SongContext.Provider value={songCtx}>
            {children}
        </SongContext.Provider>
    )
}