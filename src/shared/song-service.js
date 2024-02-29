import { API_BASE_URL } from "../constants";
import http from "../util/axios/http"

const getSongById = async (songId) => {
    const requestUrl = 'songs?link=https://www.jiosaavn.com/song/thunderclouds/' + songId
    const trackInfo = await http.get(requestUrl);
    console.log(trackInfo);
    return trackInfo;
}

const getTrendingData = async () => {
    let requestUrl = 'modules?language=hindi,english'
    const data = await http.get(requestUrl)
    return data;
}

const getAlbumDetailById = async (albumId) => {
    let requestUrl = `albums?link=https://www.jiosaavn.com/album/night-visions/${albumId}`
    const data = await http.get(requestUrl)
    return data;
}

const getPlaylistDetails = async (id) => {
    let requestUrl = `playlists?id=${id}`
    const data = await http.get(requestUrl)
    return data;
}
const getSongsByArtistId = async (artistUrl) => {
    let requestUrl = "artists?link="+artistUrl
    const data = await http.get(requestUrl)
    return data;
}

const getSongListAlbumById = async (album) => {
    if (album.artistId) {
        return await getSongsByArtistId(album.permaUrl)
    } else if (album.type == 'album') {
        return await getAlbumDetailById(album.albumId);
    } else if (album.type == 'playlist') {
        return await getPlaylistDetails(album.id)
    } else {

    }
}

const searchSongByName = async (keyword) => {
    const requestUrl = `search/songs?query=${keyword}&page=1&limit=5`
    const trackInfo = await http.get(requestUrl);
    console.log(trackInfo);
    return trackInfo;
}



export { getSongById, getTrendingData, getAlbumDetailById, getSongListAlbumById,searchSongByName }