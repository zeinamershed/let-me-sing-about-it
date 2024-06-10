import './App.css';
import HomePage from './pages/HomePage';
import DecadesPage from './pages/DecadesPage';
import RandomSongPage from './pages/RandomSongPage';
import FavoriteSongsPage from './pages/FavoriteSongsPage';
import { Routes, Route } from "react-router-dom";
import About from '../src/pages/AboutPage'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import OneSongDetails from './pages/OneSongDetails';

function App() {




















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
				<Route path='/decades' element={<DecadesPage/>}/>
        <Route path='/random' element={<RandomSongPage/>}/>
        <Route path='/favorites' element={<FavoriteSongsPage/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/songs/:songId" element={<OneSongDetails/>}
          />
			</Routes>
      
      <br />
      <Footer />
		</>
	);
 
}

export default App;
