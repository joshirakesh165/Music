import React, { useState,useEffect } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayerScreen from './pages/PlayerScreen';
import TrendingScreen from './pages/TrendingScreen';
import RootLayout from './pages/RootLayout';
import ItemDetails from './components/shared/ItemDetails';
import { SongContextProvider } from './store/SongContext';
import LibraryScreen from './pages/LibraryScreen';
import { getTrendingData } from './shared/song-service';
import extractFolderAndGetData from './util/fs.service';

const addAlbumId = (albums) => {
  albums.forEach(album => {
    let arr = album.url.split("/")
    album['albumId'] = arr[arr.length - 1];
  })
}

export default function App() {
  extractFolderAndGetData()


  const [albumData, setAlbumData] = useState();

  const fetchTrendingData = async () => {
    let trendingData = await getTrendingData();
    
    let trendingAlbums = trendingData?.data.trending?.albums.filter(el => el.type == 'album');
    let albumList = trendingData?.data.albums.filter(el => el.type == 'album');
    let playlists = trendingData?.data.playlists?.filter(el => el.type == 'playlist');
    let charts = trendingData?.data.charts?.filter(el => el.type == 'playlist');

    [trendingAlbums,albumList,playlists,charts].forEach(album => {
      addAlbumId(album)
    });
    
    console.log('trendingAlbums',trendingAlbums)
    console.log('albumList',albumList)
    console.log('charts',charts)
    console.log('playlists',playlists)

    setAlbumData({trendingAlbums,albumList,charts,playlists});
  }

  useEffect(() => {
    fetchTrendingData();
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/play', element: <PlayerScreen /> },
        { path: '/tranding', element: <TrendingScreen albums={albumData?.trendingAlbums}/> },
        { path: '/detail/:type/:id', element: <ItemDetails /> },
        { path: '/favoutite', element: <div>Favoutite</div> },
        { path: '/', element: <LibraryScreen libraryData ={albumData}/> },
      ]
    }
  ])
  return (
    <SongContextProvider>
      <RouterProvider router={router} />
    </SongContextProvider>
  )
}
