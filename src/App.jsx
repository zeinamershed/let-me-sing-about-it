import './App.css';
import HomePage from './pages/HomePage';
import DecadesPage from './pages/DecadesPage';
import RandomSongPage from './pages/RandomSongPage';
import FavoriteSongsPage from './pages/FavoriteSongsPage';
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [songs, setSongs] = useState([]);
  const addSong = (newSong) => {
    setSongs((prevSongs) => [
      ...prevSongs,
      { id: prevSongs.length + 1, ...newSong }
    ]);
  };

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

  return (
    <>
      <Navbar currUser={currUser} setCurrUser={setCurrUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/songs' element={<AllSongsPage songs={songs} addFavorite={addFavorite} removeFavorite={removeFavorite} currUser={currUser} />} />
        <Route path='/decades' element={<DecadesPage />} />
        <Route path='/random' element={<RandomSongPage />} />
        <Route path='/favorites' element={<FavoriteSongsPage currUser={currUser} removeFavorite={removeFavorite} />} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddSongsPage addSong={addSong} />} />
        <Route path="/About" element={<About />} />
        <Route path="/songs/:songId" element={<OneSongDetails songs={songs} addFavorite={addFavorite} removeFavorite={removeFavorite} currUser={currUser} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp setCurrUser={setCurrUser} />} />
        <Route path="/login" element={<LogInn setCurrUser={setCurrUser} />} />
        <Route path="/profile" element={<ProfilePage currUser={currUser} setCurrUser={setCurrUser} />} />
      </Routes>

      <br />
      <Footer />
    </>
  );
}

export default App;