import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import DecadesPage from './pages/DecadesPage';
import RandomSongPage from './pages/RandomSongPage';
import FavoriteSongsPage from './pages/FavoriteSongsPage';
import { Routes, Route } from "react-router-dom";
import About from '../src/pages/AboutPage';
import Footer from './components/Footer';

function App() {

	return (
		<>
			<Routes>
        <Route path='/' element={<HomePage />}/>
				<Route path='/decades' element={<DecadesPage/>}/>
        <Route path='/random' element={<RandomSongPage/>}/>
        <Route path='/favorites' element={<FavoriteSongsPage/>}/>
        <Route path="/About" element={<About />} />
			</Routes>
      
      <br />
      <Footer />
		</>
	);
}

export default App;
