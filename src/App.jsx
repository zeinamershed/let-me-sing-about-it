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

function App() {
  const [songs, setSongs] = useState([]);

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

 /*  function handleDeleteUnit(unitId) {
    const filteredRentals = rentals.filter((rental) => {
      if (rental.id !== unitId) {
        return true;
      }
    });
    setRentals(filteredRentals);
  }
  function handleAddToFavourites(unit) {
    setFavRentals([...favRentals, unit]);
  } */

	return (
		<>
    <Navbar />
			<Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/songs' element={<AllSongsPage songs={songs}/>}/>
				<Route path='/decades' element={<DecadesPage/>}/>
        <Route path='/random' element={<RandomSongPage/>}/>
        <Route path='/favorites' element={<FavoriteSongsPage/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddSongsPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/songs/:songId" element={<OneSongDetails songs={songs}/>}/>
        <Route path="*" element={<NotFound />} />
			</Routes>
      
      <br />
      <Footer />
		</>
	);
 
}

export default App;
