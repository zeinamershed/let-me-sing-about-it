import './App.css';
import HomePage from './pages/HomePage';
import DecadesPage from './pages/DecadesPage';
import RandomSongPage from './pages/RandomSongPage';
import FavoriteSongsPage from './pages/FavoriteSongsPage';
import { Routes, Route, ScrollRestoration } from "react-router-dom";
import About from '../src/pages/AboutPage'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './config';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AddSongsPage from './pages/AddSongsPage';
import AllSongsPage from './pages/AllSongsPage';
import OneSongDetails from './pages/OneSongDetails';
import NotFound from './pages/NotFound';
import SignUp from './components/SignUp';
import LogInn from './components/LogInn';
import ProfilePage from './pages/ProfilePage';
<<<<<<< HEAD
import ScrollToTop from './components/ScrollToTop';
import OneDecadeFiltered from './pages/OneDecadeFiltered';
=======
import EditSongPage from './pages/EditSongPage';
>>>>>>> zeina

function App() {
  const [songs, setSongs] = useState([]);
  const [currUser, setCurrUser] = useState();
  

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/songs`);
        console.log("here is the return from the post", data);
        setSongs(data);
      } catch (error) {
        console.log("there was an error with the post", error);
      }
    };

    fetchSongs();
  }, []);

  const addFavorite = async (songId) => {
    if (!currUser) return;

    try {
      const updatedFavorites = [...currUser.favorites, songId];
      const updatedUser = { ...currUser, favorites: updatedFavorites };

      await axios.patch(`${API_URL}/users/${currUser.id}`, { favorites: updatedFavorites });
      setCurrUser(updatedUser);
      } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFavorite = async (songId) => {
    if (!currUser) return;

    try {
      const updatedFavorites = currUser.favorites.filter((id) => id !== songId);
      const updatedUser = { ...currUser, favorites: updatedFavorites };

      await axios.patch(`${API_URL}/users/${currUser.id}`, { favorites: updatedFavorites });
      setCurrUser(updatedUser);
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const addSong = (newSong) => {
    setSongs((prevSongs) => [...prevSongs, newSong]);
  };

  const updateSong = async (updatedSong) => {
    try {
      const { data } = await axios.put(`${API_URL}/songs/${updatedSong.id}`, updatedSong);
      setSongs((prevSongs) =>
        prevSongs.map((song) =>
          song.id === data.id ? data : song
        )
      );
    } catch (error) {
      console.error('Error updating song:', error);
    }
  };

  async function deleteSong(songId) {
    try {
      await axios.delete(`${API_URL}/songs/${songId}`);
      setSongs((prevSongs) => prevSongs.filter((song) => song.id !== songId));
      console.log('Song deleted successfully');
    } catch (error) {
      console.error('Error deleting song:', error);
    }
  }



  return (
    <>
      <Navbar currUser={currUser} setCurrUser={setCurrUser} />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage currUser={currUser}/>} />
        <Route path='/songs' element={<AllSongsPage songs={songs} addFavorite={addFavorite} removeFavorite={removeFavorite} currUser={currUser} deleteSong={deleteSong}/>} />
        <Route path='/decades' element={<DecadesPage />} />
        <Route path="decades/:decadeId" element={<OneDecadeFiltered songs={songs}/>} />
        <Route path='/random' element={<RandomSongPage />} />
        <Route path='/favorites' element={<FavoriteSongsPage currUser={currUser} songs={songs} />} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddSongsPage addSong={addSong} currUser={currUser} />} />
        <Route path="/About" element={<About />} />
        <Route path="/songs/:songId" element={<OneSongDetails songs={songs} addFavorite={addFavorite} removeFavorite={removeFavorite} currUser={currUser} deleteSong={deleteSong}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp setCurrUser={setCurrUser} />} />
        <Route path="/login" element={<LogInn setCurrUser={setCurrUser} />} />
<<<<<<< HEAD
        <Route path="/profile" element={<ProfilePage currUser={currUser} setCurrUser={setCurrUser} songs={songs}/>} />
=======
        <Route path="/profile" element={<ProfilePage currUser={currUser} setCurrUser={setCurrUser} />} />
        <Route path='/edit-song/:id' element={<EditSongPage songs={songs} updateSong={updateSong} />} />
>>>>>>> zeina
      </Routes>

      <br />
      <Footer />
    </>
  );
}

export default App;